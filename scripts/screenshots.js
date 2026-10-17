// Captures README screenshots with generated demo data. Run with `npm run screenshots`.
// Uses a throwaway user-data folder, so your real Cosmos data is never touched.
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const os = require('os');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'docs', 'screenshots');
const WIDTH = 1440;
const HEIGHT = 900;

app.setPath('userData', fs.mkdtempSync(path.join(os.tmpdir(), 'cosmos-shots-')));

// --- Demo data -------------------------------------------------------------
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const dateKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const daysAgo = (n) => {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate() - n);
};
const mon0 = (d) => (d.getDay() + 6) % 7;

function buildDemoState() {
  const rand = mulberry32(42);
  const habitDefs = [
    { name: 'Sabah Koşusu', category: 'Sağlık & Spor', color: '#10B981', days: [0, 2, 4], rate: 0.85 },
    { name: 'Kitap Okuma (30 dk)', category: 'Zihin & Gelişim', color: '#00F2FE', days: [0, 1, 2, 3, 4, 5, 6], rate: 0.8 },
    { name: 'Meditasyon', category: 'Zihin & Gelişim', color: '#8B5CF6', days: [0, 1, 2, 3, 4, 5, 6], rate: 0.7 },
    { name: 'İngilizce Pratik', category: 'Zihin & Gelişim', color: '#F59E0B', days: [0, 1, 2, 3, 4], rate: 0.75 },
    { name: 'Kod Yazma', category: 'Yazılım & AI', color: '#6366F1', days: [0, 1, 2, 3, 4], rate: 0.9 },
    { name: 'Gitar Çalışması', category: 'Müzik & Sanat', color: '#EC4899', days: [1, 3, 5], rate: 0.65 },
    { name: '2L Su İçmek', category: 'Sağlık & Spor', color: '#06B6D4', days: [0, 1, 2, 3, 4, 5, 6], rate: 0.85 },
    { name: 'Günlük Planlama', category: 'Üretkenlik', color: '#A855F7', days: [0, 1, 2, 3, 4, 5, 6], rate: 0.8 },
  ];

  const habits = habitDefs.map((h, i) => {
    const history = {};
    for (let n = 1; n < 330; n++) {
      const d = daysAgo(n);
      if (!h.days.includes(mon0(d))) continue;
      // Older days are a little less consistent; the last two weeks form an unbroken streak.
      const rate = n <= 14 ? 1 : h.rate - Math.min(n / 330, 1) * 0.25;
      if (rand() < rate) history[dateKey(d)] = true;
    }
    if (i % 2 === 0 && h.days.includes(mon0(daysAgo(0)))) history[dateKey(daysAgo(0))] = true;
    return { id: 1000 + i, name: h.name, category: h.category, color: h.color, scheduledDays: h.days, history };
  });

  const card = (id, title, desc, status, color, tags, checklist, ago) => ({
    id, title, desc, status, color, tags, checklist, createdAt: dateKey(daysAgo(ago)),
  });
  const T = {
    design: { name: 'Tasarım', color: '#EC4899' },
    dev: { name: 'Geliştirme', color: '#818CF8' },
    urgent: { name: 'Yüksek Öncelik', color: '#F87171' },
    seo: { name: 'SEO', color: '#34D399' },
    content: { name: 'İçerik', color: '#FBBF24' },
    test: { name: 'Test', color: '#22D3EE' },
    home: { name: 'Ev', color: '#FB923C' },
  };

  const projects = [
    {
      id: 'proj-web', name: 'Kişisel Web Sitesi', color: '#6366F1',
      cards: [
        card('c1', 'SEO ve meta etiketleri', 'Open Graph görselleri ve sitemap oluştur', 'todo', '#34D399', [T.seo], [], 3),
        card('c2', 'İletişim formu', 'Spam korumalı basit bir form', 'todo', '#F59E0B', [T.dev],
          [{ text: 'Form arayüzü', done: false }, { text: 'E-posta yönlendirme', done: false }], 2),
        card('c3', 'Blog altyapısı (Markdown)', 'Yazıları Markdown dosyalarından üret', 'inprogress', '#00F2FE', [T.dev, T.urgent],
          [{ text: 'Markdown ayrıştırıcı', done: true }, { text: 'Yazı listesi sayfası', done: true },
           { text: 'Etiket filtreleri', done: false }, { text: 'RSS beslemesi', done: false }], 9),
        card('c4', 'Karanlık mod', 'Sistem temasını otomatik algıla', 'inprogress', '#8B5CF6', [T.design], [], 5),
        card('c5', 'Ana sayfa tasarımı', 'Hero alanı ve proje vitrini', 'done', '#EC4899', [T.design],
          [{ text: 'Taslak çizimler', done: true }, { text: 'Mobil uyum', done: true }], 20),
        card('c6', 'Alan adı ve hosting', '', 'done', '#10B981', [], [], 25),
      ],
    },
    {
      id: 'proj-app', name: 'Mobil Uygulama', color: '#10B981',
      cards: [
        card('m1', 'Bildirim izinleri', '', 'todo', '#F59E0B', [T.dev], [], 4),
        card('m2', 'Beta test dağıtımı', 'Test kullanıcılarına ilk sürümü gönder', 'inprogress', '#22D3EE', [T.test],
          [{ text: 'Test listesi', done: true }, { text: 'Geri bildirim formu', done: false }], 6),
        card('m3', 'Giriş ekranı', '', 'done', '#10B981', [T.design], [], 15),
        card('m4', 'Veritabanı şeması', '', 'done', '#6366F1', [T.dev], [], 18),
      ],
    },
    {
      id: 'proj-home', name: 'Ev & Yaşam', color: '#F59E0B',
      cards: [
        card('h1', 'Kitaplık düzenleme', '', 'todo', '#FB923C', [T.home], [], 1),
        card('h2', 'Yıllık bütçe planı', 'Gelir-gider tablosunu güncelle', 'inprogress', '#FBBF24', [T.content], [], 7),
        card('h3', 'Bitki sulama takvimi', '', 'done', '#34D399', [T.home], [], 12),
      ],
    },
  ];

  return {
    categories: ['Üretkenlik', 'Zihin & Gelişim', 'Sağlık & Spor', 'Müzik & Sanat', 'Yazılım & AI'],
    habits,
    projects,
    activeProjectId: 'proj-web',
  };
}

// --- Capture ---------------------------------------------------------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

app.whenReady().then(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const win = new BrowserWindow({
    width: WIDTH, height: HEIGHT, show: false, useContentSize: true,
    backgroundColor: '#050711',
    webPreferences: { offscreen: true },
  });
  const js = (code) => win.webContents.executeJavaScript(code);

  await win.loadFile(path.join(root, 'src', 'index.html'));
  await js(`localStorage.setItem('cosmos_tracker_v2', ${JSON.stringify(JSON.stringify(buildDemoState()))})`);
  await win.loadFile(path.join(root, 'src', 'index.html'));
  await sleep(1000);

  async function shot(name, setup, { fullPage = false } = {}) {
    win.setContentSize(WIDTH, HEIGHT);
    await js(`${setup}; window.scrollTo(0, 0);`);
    await sleep(1800);
    let height = HEIGHT;
    if (fullPage) {
      height = Math.max(HEIGHT, await js('document.documentElement.scrollHeight'));
      win.setContentSize(WIDTH, height);
      await sleep(1500);
    }
    const img = await win.webContents.capturePage({ x: 0, y: 0, width: WIDTH, height });
    fs.writeFileSync(path.join(outDir, name), img.toPNG());
    console.log('captured', name, `${WIDTH}x${height}`);
  }

  await shot('01-habits.png', "switchTab('habits')", { fullPage: true });
  await shot('02-kanban.png', "switchTab('kanban')", { fullPage: true });
  // Show last month: the current month is only partly over, so its curve drops to 0 after today.
  const prev = daysAgo(new Date().getDate());
  const prevMonth = `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`;
  await shot('03-reports.png', `document.getElementById('reportMonthInput').value = '${prevMonth}'; switchTab('reports')`, { fullPage: true });
  await shot('04-habit-editor.png', "switchTab('habits'); openHabitModal(1001)");
  await shot('05-card-editor.png', "closeHabitModal(); switchTab('kanban'); openKanbanCardModal('inprogress', 'c3')");

  app.quit();
});
