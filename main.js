const { app, BrowserWindow } = require('electron');
const path = require('path');

// User data (localStorage) lives in a folder named after the original package
// name. Pin it explicitly so renaming the product never orphans existing data.
app.setPath('userData', path.join(app.getPath('appData'), 'aliskanlik-takip-paneli'));

function createWindow() {
  const win = new BrowserWindow({
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
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
