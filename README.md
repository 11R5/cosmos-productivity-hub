<div align="center">

<img src="src/assets/icon.png" width="128" alt="Cosmos icon" />

# Cosmos — Productivity Hub

**Habit tracking, Trello-style project boards and long-term analytics in one space-themed desktop app.**

[![Build](https://github.com/11R5/cosmos-productivity-hub/actions/workflows/build.yml/badge.svg)](https://github.com/11R5/cosmos-productivity-hub/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/v/release/11R5/cosmos-productivity-hub?include_prereleases&color=8B5CF6)](https://github.com/11R5/cosmos-productivity-hub/releases)
![Platforms](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-0EA5E9)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

[Download](#-download) · [Install](#-installation) · [Features](#-features) · [User Guide](docs/USER_GUIDE.md) · [Docs](#-documentation) · [Build from source](#-build-from-source) · [🇹🇷 Türkçe](README.tr.md)

<img src="docs/screenshots/01-habits.png" alt="Cosmos habit tracker" width="900" />

</div>

---

Cosmos brings your daily routines and your projects together. You can check off habits, plan work on a Kanban board, and look back at a whole year of history, all in one window.

- **Private.** Everything is stored on your computer. There are no accounts, no servers and no telemetry.
- **Offline.** Fonts, icons, styles and charts are bundled with the app, so it never needs an internet connection.
- **Cross-platform.** Builds are available for Windows, macOS and Linux.

## 📥 Download

Get the latest version from the [**Releases page**](https://github.com/11R5/cosmos-productivity-hub/releases).

| Platform | File | Notes |
|---|---|---|
| **Windows** | `Cosmos-x.y.z-setup.exe` | Installer with Start Menu and desktop shortcuts |
| | `Cosmos-x.y.z-portable.exe` | Runs without installing, e.g. from a USB stick |
| **macOS** | `Cosmos-x.y.z-mac-arm64.dmg` | Apple Silicon (M1/M2/M3/M4) |
| | `Cosmos-x.y.z-mac-x64.dmg` | Intel Macs |
| **Linux** | `Cosmos-x.y.z-linux-x86_64.AppImage` | Works on most distributions |
| | `Cosmos-x.y.z-linux-amd64.deb` | Debian / Ubuntu / Mint |

> **The builds are not code-signed yet.** This is normal for small open-source projects, but your system will show a warning the first time you open the app. The steps below explain how to get past it.

## 🧭 Installation

<details open>
<summary><b>🪟 Windows 10 / 11</b></summary>

**Installer (recommended)**
1. Download `Cosmos-x.y.z-setup.exe` from [Releases](https://github.com/11R5/cosmos-productivity-hub/releases/latest).
2. Double-click it. If **Windows protected your PC** (SmartScreen) appears, click **More info**, then **Run anyway**.
3. Choose the install folder and click **Install**. Cosmos is added to the Start Menu and the desktop.

**Portable (no installation)**
1. Download `Cosmos-x.y.z-portable.exe` and put it anywhere, e.g. your desktop or a USB stick.
2. Double-click to run it. SmartScreen may ask once, as above.

**Uninstall:** Settings → Apps → Cosmos → Uninstall. Your data is kept in `%APPDATA%\aliskanlik-takip-paneli`; delete that folder too if you want a clean removal.
</details>

<details>
<summary><b>🍎 macOS 11+ (Apple Silicon & Intel)</b></summary>

1. Download the `.dmg` for your Mac:
   - Apple menu → **About This Mac**. If it shows *Apple M1/M2/M3/M4*, download `mac-arm64.dmg`; for *Intel*, download `mac-x64.dmg`.
2. Open the `.dmg` and drag **Cosmos** into **Applications**.
3. The first time, **right-click** Cosmos in Applications, choose **Open**, then click **Open** again.
4. If macOS says *"Cosmos is damaged and can't be opened"*, open Terminal, run the command below, then start Cosmos normally:
   ```bash
   xattr -cr /Applications/Cosmos.app
   ```

**Uninstall:** drag Cosmos from Applications to the Trash. Data lives in `~/Library/Application Support/aliskanlik-takip-paneli`.
</details>

<details>
<summary><b>🐧 Linux (x64)</b></summary>

**Debian / Ubuntu / Mint (.deb)**
```bash
sudo apt install ./Cosmos-x.y.z-linux-amd64.deb
```
Then launch **Cosmos** from your app menu. To uninstall, run `sudo apt remove aliskanlik-takip-paneli`.

**Any distribution (AppImage)**
```bash
chmod +x Cosmos-x.y.z-linux-x86_64.AppImage
./Cosmos-x.y.z-linux-x86_64.AppImage
```
If it doesn't start on Ubuntu 22.04+, install FUSE 2 with `sudo apt install libfuse2`.

Data lives in `~/.config/aliskanlik-takip-paneli`.
</details>

**Updating:** download the new version and install it over the old one (or replace the portable file). Your data stays where it is.

## ✨ Features

### 🔁 Habit Tracker

*(See the screenshot at the top of this page.)*

| | |
|---|---|
| **Weekly check-in grid** | Mark each habit for each day with a single click. Today's column is highlighted. |
| **Per-habit schedule** | Choose which weekdays a habit repeats on, e.g. *Mon, Wed, Fri*. Shortcuts are available for *Every day*, *Weekdays* and *Weekends*. Days that aren't scheduled are dimmed. |
| **Smart streaks** | Unscheduled days never break a streak, and an unchecked *today* doesn't reset it before the day is over. |
| **Time travel** | Use the `‹` / `›` arrows to move to any past or future week and fill in missed days. **Bugüne Dön** (*Back to today*) brings you back to the current week. |
| **Dashboard cards** | Today's progress, this week's success rate, your strongest active streak and an overall Kanban summary. |
| **Streak leaderboard** | Habits ranked by current streak with 🔥 badges, plus how many days each one has been completed in total. |
| **3D weekly chart** | Daily completion rate for the selected week, shown as 3D bars or a neon wave. |
| **Categories & filtering** | Create and delete categories, then filter the grid by category. |
| **Unlimited colors** | Choose from the neon palette or a color picker, or type any `#RRGGBB` hex code. |

<img src="docs/screenshots/04-habit-editor.png" alt="Habit editor" width="100%" />

### 📋 Projects & Kanban

<img src="docs/screenshots/02-kanban.png" alt="Kanban board" width="100%" />

| | |
|---|---|
| **Multiple projects** | Each project has its own color and its own board. Tabs show how many cards each project has. |
| **Three columns** | **TODO → IN PROGRESS → DONE**. Move cards with drag & drop or with the quick buttons on each card. |
| **Project stats** | Completion percentage, cards in progress, and checklist progress across the project. |
| **Rich cards** | Each card has a title, notes, a cover color and any number of colored tags. |
| **Optional checklists** | Add sub-tasks to any card and tick them off right on the board, with a live progress bar (e.g. `2/4 · 50%`). |

<img src="docs/screenshots/05-card-editor.png" alt="Card editor" width="100%" />

### 📊 Reports & Analytics

<img src="docs/screenshots/03-reports.png" alt="Reports" width="100%" />

| | |
|---|---|
| **Month picker** | Look at any past month. |
| **Daily discipline curve** | Your completion rate for every day of the selected month. |
| **Category balance radar** | Which areas of life get the most attention. |
| **Kanban report** | TODO / IN PROGRESS / DONE card counts for every project, as a stacked chart. |
| **Monthly scorecard** | Completed vs. scheduled days for each habit. |
| **Yearly activity heatmap** | A GitHub-style grid of the last 52 weeks (364 days). |

### 💾 Data & Backup

- Data is saved automatically on every change and survives restarts and updates.
- **Yedek İndir** (*Download backup*) exports everything to a readable `cosmos_yedek_YYYY-MM-DD.json` file.
- **Yedek Yükle** (*Restore backup*) imports a backup, so you can move your data to a new computer. Backups from v1 are also accepted.

| OS | Data folder |
|---|---|
| Windows | `%APPDATA%\aliskanlik-takip-paneli\` |
| macOS | `~/Library/Application Support/aliskanlik-takip-paneli/` |
| Linux | `~/.config/aliskanlik-takip-paneli/` |

> The user interface is currently in **Turkish**. English localization is on the roadmap. The [User Guide](docs/USER_GUIDE.md) translates the main buttons and labels.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Desktop shell | [Electron](https://www.electronjs.org/) 30 |
| Packaging | [electron-builder](https://www.electron.build/) (NSIS, portable, DMG, AppImage, deb) |
| UI | HTML5 + vanilla JavaScript, as a single-page app in `src/index.html` |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3 (compiled locally), custom CSS for glassmorphism and 3D perspective |
| Charts | [Chart.js](https://www.chartjs.org/) 4 with a custom 3D shadow plugin |
| Icons | [Lucide](https://lucide.dev/) |
| Fonts | Inter and Space Grotesk (bundled through [Fontsource](https://fontsource.org/)) |
| Background | HTML5 Canvas starfield animation |
| Storage | `localStorage` (Chromium LevelDB on disk) |
| CI/CD | GitHub Actions builds all three platforms and publishes releases |

## 🧑‍💻 Build from source

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/11R5/cosmos-productivity-hub.git
cd cosmos-productivity-hub
npm install
npm start
```

| Command | What it does |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm test` | Runs the end-to-end smoke test (34 checks with real keyboard input) |
| `npm run build:win` | Builds the Windows installer and portable `.exe` into `dist/` |
| `npm run build:mac` | Builds `.dmg` files for Intel and Apple Silicon (must run on macOS) |
| `npm run build:linux` | Builds `.AppImage` and `.deb` (run on Linux) |
| `npm run build:css` | Recompiles Tailwind after you change classes in `src/index.html` |
| `npm run vendor` | Copies Chart.js, Lucide and the fonts from `node_modules` into `src/vendor/` |
| `npm run icon` | Regenerates the PNG app icons from `Logo/Logo.jpg` |
| `npm run screenshots` | Regenerates `docs/screenshots/` using demo data (your real data is not touched) |

You can also open `src/index.html` directly in a browser. In that case data is saved to that browser's storage, separately from the desktop app.

### Project structure

```
├── main.js                 Electron main process (window, data folder, single instance)
├── src/
│   ├── index.html          The whole app: markup, styles and logic
│   ├── assets/             App icon (PNG)
│   ├── styles/             Tailwind input file
│   └── vendor/             Bundled Tailwind CSS, Chart.js, Lucide, fonts
├── build/icon.png          Icon used by electron-builder
├── Logo/                   Original logo artwork
├── scripts/                vendor, icon, screenshot and smoke-test helpers
├── docs/                   Guides, plan, technical docs, screenshots
├── CHANGELOG.md            Release history
└── .github/workflows/      Test, cross-platform build and release pipeline
```

### Making a release

Bump `version` in `package.json`, add a `CHANGELOG.md` entry, then push a version tag. GitHub Actions runs the tests, builds Windows, macOS and Linux, and attaches the files to a new GitHub Release:

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

## 📚 Documentation

| Document | Language | Contents |
|---|---|---|
| [User Guide](docs/USER_GUIDE.md) | English | How to use every screen |
| [Kullanım Kılavuzu](docs/KULLANIM_KILAVUZU.md) | Turkish | The same guide in Turkish |
| [Project Plan](docs/PROJE_PLANI.md) | Turkish | Vision, scope, roadmap, distribution, risks |
| [Sync Plan](docs/SENKRONIZASYON_PLANI.md) | Turkish | Work plan for free cloud / LAN / Tailscale sync (draft) |
| [Technical Documentation](docs/TEKNIK_DOKUMAN.md) | Turkish | Architecture, data model, render cycle, security, build, tests |
| [Workflows](docs/IS_AKISLARI.md) | Turkish | User flows, development, release and bug-tracking workflows (with diagrams) |
| [Known Issues](docs/BILINEN_SORUNLAR.md) | Turkish | Bug log: what was fixed and what is still open |
| [Changelog](CHANGELOG.md) | English | What changed in each version |

## 🗺️ Roadmap

- [x] Windows, macOS and Linux builds
- [x] Fully offline (all assets bundled)
- [x] App icon
- [x] Automated releases via GitHub Actions
- [x] End-to-end smoke test in CI
- [ ] Upgrade to a supported Electron version
- [ ] File-based storage with automatic backups
- [ ] **Free, serverless sync between computers**: via a synced folder (Google Drive for Desktop, OneDrive, Dropbox, iCloud, Syncthing), the Google Drive API, and local network / Tailscale peer-to-peer. See the [Sync Plan](docs/SENKRONIZASYON_PLANI.md)
- [ ] English localization (i18n)
- [ ] Reminders and notifications
- [ ] Automatic updates
- [ ] Code signing for Windows and macOS

See the full [Project Plan](docs/PROJE_PLANI.md). Have an idea? [Open an issue](https://github.com/11R5/cosmos-productivity-hub/issues).

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Make your changes in `src/index.html`, then run `npm run build:css` and check them with `npm start`.
3. Run `npm test`. All checks must pass.
4. Keep the data schema **backward compatible**. Existing users' data must keep loading.
5. Open a pull request with a short description and, ideally, a screenshot.

See [Workflows](docs/IS_AKISLARI.md) for the full checklist.

## 📄 License

[Apache License 2.0](LICENSE). Bundled third-party libraries keep their own licenses (MIT / ISC / OFL).
