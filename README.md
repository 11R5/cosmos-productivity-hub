<div align="center">

<img src="src/assets/icon.png" width="128" alt="Cosmos icon" />

# Cosmos — Productivity Hub

**Habit tracking, Trello-style project boards and long-term analytics in one space-themed desktop app.**

[![Build](https://github.com/11R5/cosmos-productivity-hub/actions/workflows/build.yml/badge.svg)](https://github.com/11R5/cosmos-productivity-hub/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/v/release/11R5/cosmos-productivity-hub?include_prereleases&color=8B5CF6)](https://github.com/11R5/cosmos-productivity-hub/releases)
![Platforms](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-0EA5E9)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

[Download](#-download) · [Features](#-features) · [User Guide](docs/USER_GUIDE.md) · [Build from source](#-build-from-source) · [🇹🇷 Türkçe](README.tr.md)

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

> **The builds are not code-signed yet.** This is normal for small open-source projects, but you will see a warning the first time you open the app:
> - **Windows SmartScreen:** click **More info**, then **Run anyway**.
> - **macOS:** right-click the app, choose **Open**, then confirm. If macOS says the app is "damaged", run `xattr -cr /Applications/Cosmos.app` in Terminal.
> - **Linux AppImage:** make the file executable with `chmod +x Cosmos-*.AppImage`, then run it.

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
├── main.js                 Electron main process (window + data folder)
├── src/
│   ├── index.html          The whole app: markup, styles and logic
│   ├── assets/             App icon (PNG)
│   ├── styles/             Tailwind input file
│   └── vendor/             Bundled Tailwind CSS, Chart.js, Lucide, fonts
├── build/icon.png          Icon used by electron-builder
├── Logo/                   Original logo artwork
├── scripts/                vendor, icon and screenshot helpers
├── docs/                   User guides and screenshots
└── .github/workflows/      Cross-platform build and release pipeline
```

### Making a release

Push a version tag. GitHub Actions then builds Windows, macOS and Linux, and attaches the files to a new GitHub Release:

```bash
git tag v2.1.0
git push origin v2.1.0
```

## 🗺️ Roadmap

- [x] Windows, macOS and Linux builds
- [x] Fully offline (all assets bundled)
- [x] App icon
- [x] Automated releases via GitHub Actions
- [ ] English localization (i18n)
- [ ] Automatic updates
- [ ] Code signing for Windows and macOS
- [ ] File-based storage with automatic backups
- [ ] Reminders and notifications

Have an idea? [Open an issue](https://github.com/11R5/cosmos-productivity-hub/issues).

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Make your changes in `src/index.html`, then run `npm run build:css` and test with `npm start`.
3. Keep the data schema **backward compatible**. Existing users' data must keep loading.
4. Open a pull request with a short description and, ideally, a screenshot.

## 📄 License

[Apache License 2.0](LICENSE). Bundled third-party libraries keep their own licenses (MIT / ISC / OFL).
