# 🪐 Cosmos — Productivity Hub

**Habit tracking, Trello-style project boards and long-term analytics in one space-themed desktop app.**

Cosmos brings together your daily routines and your projects. You can check off habits, plan work on a Kanban board, and look back at months of history, all in a single offline-first window. Your data stays on your machine.

> 🇹🇷 [Türkçe README için tıklayın](README.tr.md)

![License](https://img.shields.io/badge/license-Apache%202.0-blue)
![Electron](https://img.shields.io/badge/Electron-30-47848F?logo=electron&logoColor=white)
![Platform](https://img.shields.io/badge/platform-Windows-0078D6)
![Status](https://img.shields.io/badge/status-active%20development-8B5CF6)

---

## ✨ Features

### 🔁 Habit Tracker
- **Weekly check-in grid.** Mark each habit for each day with a single click.
- **Per-habit schedules.** Choose which weekdays a habit repeats on (e.g. Mon/Wed/Fri). Shortcuts are available for *Every day*, *Weekdays* and *Weekends*.
- **Smart streaks.** Unscheduled days never break a streak, and today doesn't count against you until the day is over.
- **Time travel.** Jump to past or future weeks and edit them. *Back to today* brings you back to the current week.
- **Streak leaderboard** with 🔥 badges.
- **Custom categories.** Add and remove categories freely.
- **Unlimited colors.** Pick from a neon palette or a color picker, or type any `#RRGGBB` hex code.
- **3D weekly chart.** Switch between bar and wave views.

### 📋 Projects & Kanban
- **Multiple projects**, each with its own color, card count and completion percentage.
- **Three columns: TODO → IN PROGRESS → DONE.** Move cards by drag & drop or with quick-move buttons.
- **Trello-style cards:**
  - cover color
  - multi-color tags
  - an **optional checklist** with a live progress bar (e.g. `2/3 · 67%`)

### 📊 Reports & Analytics
- **Monthly discipline curve.** Shows your completion rate day by day for any month you pick.
- **Category balance radar.** Shows which areas of your life get the most attention.
- **Monthly habit scorecard.** Shows completed vs. scheduled days for each habit.
- **Kanban report.** A stacked chart of TODO / IN PROGRESS / DONE cards for every project.
- **Yearly activity heatmap.** A GitHub-style grid covering the last 52 weeks.

### 🔒 Privacy & Data
- **100% local.** There are no accounts, no servers and no telemetry.
- **One-click JSON backup & restore.** Move your data between computers or keep a safety copy.
- **Automatic migration** from v1 data and v1 backup files.

### 🌌 Interface
- Animated starfield background with nebula gradients.
- Glassmorphism panels with neon accents.
- Chart cards with 3D perspective that flatten when you hover over them.
- Turkish user interface (English localization is on the roadmap).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Desktop shell | [Electron](https://www.electronjs.org/) 30 |
| Packaging | [electron-builder](https://www.electron.build/) 24 |
| UI | HTML5 + vanilla JavaScript (single-file app) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (Play CDN), custom CSS (glassmorphism, 3D perspective) |
| Charts | [Chart.js](https://www.chartjs.org/) with a custom 3D shadow plugin |
| Icons | [Lucide](https://lucide.dev/) |
| Fonts | Space Grotesk, Inter (Google Fonts) |
| Background | HTML5 Canvas starfield animation |
| Storage | `localStorage` (Chromium LevelDB on disk) |

The whole application lives in a single file, [`AliskanlikTakip.html`](Cosmos_Aliskanlik_Kanban_v2_Windows/electron_project/AliskanlikTakip.html). Electron's [`main.js`](Cosmos_Aliskanlik_Kanban_v2_Windows/electron_project/main.js) only opens a window and loads that file.

---

## 🚀 Getting Started

### Run in the browser (no install)
Open [`Cosmos_Aliskanlik_Kanban_v2_Windows/AliskanlikTakip.html`](Cosmos_Aliskanlik_Kanban_v2_Windows/AliskanlikTakip.html) in any modern browser.

> In browser mode, data is saved to that browser's storage. It is separate from the desktop app's data.

### Run as a desktop app
Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/11R5/cosmos-productivity-hub.git
cd cosmos-productivity-hub/Cosmos_Aliskanlik_Kanban_v2_Windows/electron_project
npm install
npm start
```

### Build a portable Windows `.exe`

```bash
npm run build:win
```

The executable is written to `electron_project/dist/`.

> **Windows tip:** If the build fails with `Cannot create symbolic link`, run the terminal as Administrator or turn on **Developer Mode** (Settings → System → For developers).

---

## 💾 Where is my data?

The desktop app stores everything locally in its user data folder:

| OS | Path |
|---|---|
| Windows | `%APPDATA%\aliskanlik-takip-paneli\` |
| macOS | `~/Library/Application Support/aliskanlik-takip-paneli/` |
| Linux | `~/.config/aliskanlik-takip-paneli/` |

Your data survives restarts, app updates, and moving or deleting the `.exe`. It is lost only if you delete this folder or reinstall the OS. Use **Backup / Restore** in the top-right corner to keep a portable `.json` copy.

---

## 🗺️ Roadmap

- [ ] **Cross-platform builds:** macOS (`.dmg`) and Linux (`AppImage` / `.deb`)
- [ ] Bundle Tailwind, Chart.js and Lucide locally, so the app works fully **offline**
- [ ] App icon and branding
- [ ] GitHub Releases with downloadable installers
- [ ] English localization (i18n)
- [ ] Automatic updates
- [ ] Persistent file-based storage and automatic backups

Ideas and feature requests are welcome. Please open an [issue](https://github.com/11R5/cosmos-productivity-hub/issues).

---

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Make your changes in `electron_project/AliskanlikTakip.html`, and test them with `npm start`.
3. Keep the data schema **backward compatible**. Existing users' `localStorage` data must keep loading.
4. Open a pull request with a short description and, ideally, a screenshot.

---

## 📄 License

Licensed under the [Apache License 2.0](LICENSE).
