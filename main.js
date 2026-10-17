const { app, BrowserWindow } = require('electron');
const path = require('path');

// User data (localStorage) lives in a folder named after the original package
// name. Pin it explicitly so renaming the product never orphans existing data.
app.setPath('userData', path.join(app.getPath('appData'), 'aliskanlik-takip-paneli'));

// Two windows on the same localStorage would overwrite each other's data
// (and the second one cannot lock the database), so allow a single instance.
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  let mainWindow = null;

  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1400,
      height: 900,
      minWidth: 1024,
      minHeight: 700,
      title: 'Cosmos',
      autoHideMenuBar: true,
      backgroundColor: '#050711',
      icon: path.join(__dirname, 'src', 'assets', 'icon.png'),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true
      }
    });

    const appUrl = mainWindow.webContents.getURL.bind(mainWindow.webContents);

    // Dropping a file on the window (or any link) would navigate away from the
    // app and make it look blank; keep the window on index.html.
    mainWindow.webContents.on('will-navigate', (event, url) => {
      if (url !== appUrl()) event.preventDefault();
    });
    mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));

    mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
    mainWindow.on('closed', () => { mainWindow = null; });
  }

  app.on('second-instance', () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
