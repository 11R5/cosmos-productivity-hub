// End-to-end smoke test: drives the real UI in Electron with real keyboard input.
// Run with `npm test`. Uses a throwaway user-data folder; your data is never touched.
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');

app.setPath('userData', fs.mkdtempSync(path.join(os.tmpdir(), 'cosmos-test-')));

const results = [];
const consoleErrors = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function check(name, ok, detail = '') {
  results.push({ name, ok: !!ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${!ok && detail ? `  -> ${detail}` : ''}`);
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1400, height: 900, show: false,
    webPreferences: { offscreen: true, contextIsolation: true, sandbox: true },
  });
  win.webContents.on('console-message', (_e, level, message) => {
    if (level >= 3) consoleErrors.push(message);
  });
  const js = (code) => win.webContents.executeJavaScript(code);
  const type = async (text) => {
    for (const ch of text) {
      win.webContents.sendInputEvent({ type: 'char', keyCode: ch });
      await sleep(5);
    }
  };
  const press = async (key) => {
    win.webContents.sendInputEvent({ type: 'keyDown', keyCode: key });
    win.webContents.sendInputEvent({ type: 'keyUp', keyCode: key });
    await sleep(150);
  };
  const click = (selector) => js(`document.querySelector(${JSON.stringify(selector)}).click()`);
  const isOpen = (id) => js(`document.getElementById('${id}').classList.contains('flex')`);
  const activeId = () => js('document.activeElement && document.activeElement.id');

  await win.loadFile(path.join(__dirname, '..', 'src', 'index.html'));
  await sleep(800);

  // --- Startup -------------------------------------------------------------
  check('app renders habits and projects on first launch',
    await js("document.querySelectorAll('#habit-table-body tr').length > 0 && state.projects.length > 0"));

  // --- Projects: create twice, with an empty attempt in between -------------
  await js("switchTab('kanban')");
  const projectsBefore = await js('state.projects.length');
  for (let round = 1; round <= 2; round++) {
    await js('openProjectModal()');
    await sleep(100);
    check(`project #${round}: modal opens with name field focused`, (await activeId()) === 'newProjectName');
    await js('saveNewProject()'); // empty name
    await sleep(100);
    check(`project #${round}: empty name is flagged, no native dialog`,
      await js("document.getElementById('newProjectName').classList.contains('input-error')"));
    await type(`Proje ${round}`);
    check(`project #${round}: typing still works after the warning`,
      (await js("document.getElementById('newProjectName').value")) === `Proje ${round}`);
    await press('Enter');
    check(`project #${round}: Enter creates the project and closes the modal`,
      !(await isOpen('projectModal')) && (await js('state.projects.length')) === projectsBefore + round);
  }

  // --- Cards: create twice, then delete with confirmation -------------------
  const cardsBefore = await js('getActiveProject().cards.length');
  for (let round = 1; round <= 2; round++) {
    await js("openKanbanCardModal('todo')");
    await sleep(100);
    check(`card #${round}: modal opens with title focused`, (await activeId()) === 'cardTitleInput');
    await js('saveKanbanCard()');
    await sleep(100);
    await type(`Kart ${round}`);
    check(`card #${round}: typing works after empty-title warning`,
      (await js("document.getElementById('cardTitleInput').value")) === `Kart ${round}`);
    await js("document.getElementById('newChecklistItemInput').focus()");
    await type('Alt görev');
    await press('Enter');
    check(`card #${round}: Enter adds a checklist item`, (await js('modalCardChecklist.length')) === 1);
    await js("document.getElementById('cardTitleInput').focus()");
    await press('Enter');
    check(`card #${round}: Enter saves the card`,
      !(await isOpen('kanbanCardModal')) && (await js('getActiveProject().cards.length')) === cardsBefore + round);
  }

  const cardId = await js('getActiveProject().cards[getActiveProject().cards.length - 1].id');
  await js(`openKanbanCardModal('todo', '${cardId}')`);
  await sleep(100);
  await js('deleteCardFromModal(); 0');
  await sleep(100);
  check('delete card asks for confirmation in-app', await isOpen('appDialog'));
  await click('#appDialogCancel');
  await sleep(100);
  check('cancel keeps the card', await js(`getActiveProject().cards.some(c => c.id === '${cardId}')`));
  await js('deleteCardFromModal(); 0');
  await sleep(100);
  await click('#appDialogOk');
  await sleep(150);
  check('confirm deletes the card and closes both modals',
    !(await js(`getActiveProject().cards.some(c => c.id === '${cardId}')`)) &&
    !(await isOpen('appDialog')) && !(await isOpen('kanbanCardModal')));

  await js("openKanbanCardModal('todo')");
  await sleep(100);
  await type('Sonra');
  check('typing works in a new modal after a confirmation dialog',
    (await js("document.getElementById('cardTitleInput').value")) === 'Sonra');
  await press('Escape');
  check('Escape closes the modal', !(await isOpen('kanbanCardModal')));

  // --- Invalid card color -----------------------------------------------------
  await js("openKanbanCardModal('todo')");
  await sleep(100);
  await type('Renk testi');
  await js("document.getElementById('cardHexInput').value = 'mavi'");
  await js('saveKanbanCard()');
  await sleep(100);
  check('invalid hex color is rejected', await isOpen('kanbanCardModal'));
  await js('closeKanbanCardModal()');

  // --- Escaping of user text ------------------------------------------------
  await js("switchTab('habits')");
  await js('openCategoryModal()');
  await sleep(100);
  await type(`Ev'de "Spor" <b>x</b>`);
  await press('Enter');
  check('category with quotes and HTML is added',
    await js(`state.categories.includes('Ev\\'de "Spor" <b>x</b>')`));
  check('category name is shown as text, not HTML',
    await js("!document.querySelector('#categoryListContainer b')"));
  const catIdx = await js(`state.categories.indexOf('Ev\\'de "Spor" <b>x</b>')`);
  await js(`deleteCategory(${catIdx}); 0`);
  await sleep(100);
  await click('#appDialogOk');
  await sleep(100);
  check('category with a quote can be deleted', await js(`!state.categories.includes('Ev\\'de "Spor" <b>x</b>')`));
  await js('closeCategoryModal()');

  await js('openHabitModal()');
  await sleep(100);
  await type('<img src=x onerror="window.__xss=1">');
  await press('Enter');
  await sleep(100);
  check('habit name with HTML is not executed', await js('window.__xss !== 1 && !document.querySelector("#habit-table-body img")'));

  // --- Import: partial backup must not break the app -------------------------
  await js(`importAllData({ target: { value: 'x', files: [new File([JSON.stringify({ habits: [{ name: 'Yedekten', history: { '2026-01-01': true } }] })], 'b.json')] } })`);
  await sleep(300);
  check('import asks before overwriting data', await isOpen('appDialog'));
  await click('#appDialogOk');
  await sleep(200);
  check('partial backup is repaired (projects + categories exist)',
    await js("state.habits.length === 1 && state.projects.length === 1 && state.categories.length > 0"));
  await js("switchTab('kanban')");
  await js("openKanbanCardModal('todo')");
  await sleep(100);
  check('card modal still opens after importing a backup without projects', await isOpen('kanbanCardModal'));
  await js('closeKanbanCardModal()');

  await js(`importAllData({ target: { value: 'x', files: [new File(['not json'], 'bad.json')] } })`);
  await sleep(300);
  check('broken backup file shows an error dialog', await isOpen('appDialog'));
  await click('#appDialogOk');

  // --- Reports ---------------------------------------------------------------
  await js("switchTab('reports')");
  await sleep(400);
  check('future days are left out of the monthly curve',
    await js('monthlyTrendChartInstance.data.datasets[0].data.some(v => v === null) || new Date().getDate() === new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()'));

  // --- Persistence -------------------------------------------------------------
  await js("localStorage.getItem('cosmos_tracker_v2')").then((raw) =>
    check('state is saved to localStorage', raw && JSON.parse(raw).habits[0].name === 'Yedekten'));

  check('no console errors', consoleErrors.length === 0, consoleErrors.join(' | '));

  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  app.exit(failed ? 1 : 0);
});
