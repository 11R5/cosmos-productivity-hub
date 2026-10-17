// Builds the app icons from the logo artwork in Logo/Logo.jpg. Run with `npm run icon`.
// The rounded tile is detected on its white background, cropped, given transparent
// rounded corners and placed on a 1024px canvas with macOS-style padding.
//   build/icon.png       1024x1024, used by electron-builder (ico/icns are derived from it)
//   src/assets/icon.png  512x512, window icon and README logo
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = path.join(root, 'Logo', 'Logo.jpg');

function renderInPage(srcUrl, size) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = reject;
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height);

      // Bounding box of everything that isn't the near-white background.
      let minX = width, minY = height, maxX = 0, maxY = 0;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          if (data[i] < 200 || data[i + 1] < 200 || data[i + 2] < 200) {
            if (x < minX) minX = x; if (x > maxX) maxX = x;
            if (y < minY) minY = y; if (y > maxY) maxY = y;
          }
        }
      }
      const inset = 4; // trim the anti-aliased white fringe
      const sx = minX + inset, sy = minY + inset;
      const sw = maxX - minX - inset * 2, sh = maxY - minY - inset * 2;

      const out = document.createElement('canvas');
      out.width = size; out.height = size;
      const o = out.getContext('2d');
      const pad = Math.round(size * 100 / 1024);
      const tile = size - pad * 2;
      const r = tile * 0.2;
      o.beginPath();
      o.roundRect(pad, pad, tile, tile, r);
      o.clip();
      o.imageSmoothingQuality = 'high';
      o.drawImage(img, sx, sy, sw, sh, pad, pad, tile, tile);
      resolve({ png: out.toDataURL('image/png'), box: [minX, minY, maxX, maxY] });
    };
    img.src = srcUrl;
  });
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, webPreferences: { offscreen: true } });
  await win.loadURL('data:text/html,<html></html>');
  const srcUrl = 'data:image/jpeg;base64,' + fs.readFileSync(source).toString('base64');

  const write = async (size, file) => {
    const { png, box } = await win.webContents.executeJavaScript(
      `(${renderInPage.toString()})(${JSON.stringify(srcUrl)}, ${size})`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, Buffer.from(png.split(',')[1], 'base64'));
    console.log('wrote', path.relative(root, file), 'from tile', box.join(','));
  };

  await write(1024, path.join(root, 'build', 'icon.png'));
  await write(512, path.join(root, 'src', 'assets', 'icon.png'));
  app.quit();
});
