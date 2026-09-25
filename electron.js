const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

app.setAppUserModelId('com.jhonywalker.dnplayer');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 750,
    title: "DN Player",
    icon: path.join(__dirname, 'build', 'icon.ico'),
    autoHideMenuBar: true,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
