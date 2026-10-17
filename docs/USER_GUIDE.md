# Cosmos — User Guide

A quick guide for first-time users. You'll know the basics in about five minutes.

> 🇹🇷 [Türkçe Kullanım Kılavuzu](KULLANIM_KILAVUZU.md) · ⬅️ [Back to README](../README.md)

The interface is currently in Turkish. Labels in **bold** are shown as they appear in the app, with the English meaning in *italics*.

## Contents

1. [Installation](#1-installation)
2. [Layout](#2-layout)
3. [Habits](#3-habits)
4. [Projects & Kanban](#4-projects--kanban)
5. [Reports](#5-reports)
6. [Backup & moving to a new computer](#6-backup--moving-to-a-new-computer)
7. [FAQ](#7-faq)

---

## 1. Installation

Download the right file for your system from the [Releases](https://github.com/11R5/cosmos-productivity-hub/releases) page:

- **Windows:** `Cosmos-…-setup.exe` installs the app; `Cosmos-…-portable.exe` runs without installing.
  - If SmartScreen appears, click **More info → Run anyway**.
- **macOS:** Open the `.dmg` and drag Cosmos into **Applications**.
  - The first time, right-click the app and choose **Open**.
  - If macOS says the app is "damaged", run `xattr -cr /Applications/Cosmos.app` in Terminal.
- **Linux:** Install the `.deb` with your package manager. To use the AppImage instead, first run `chmod +x Cosmos-*.AppImage`, then open it.

The first launch includes a few sample habits and projects. Feel free to edit or delete them.

## 2. Layout

| Top bar | Meaning |
|---|---|
| **Alışkanlık Üssü** | *Habit Hub*: your weekly habit grid |
| **Proje & Kanban Board** | *Projects & Kanban*: TODO / IN PROGRESS / DONE boards |
| **Aylık / Yıllık Rapor & 3D Analiz** | *Monthly / Yearly Reports*: charts and the activity heatmap |
| **Yedek İndir / Yedek Yükle** | *Download / Restore backup*: export or import all data as `.json` |

> 💡 **Tip:** When a dialog opens, the first field is already focused. **Enter** saves and **Esc** closes it.

## 3. Habits

![Habits](screenshots/01-habits.png)

### Add a habit
1. Click **Yeni Rutin / Hedef Ekle** (*New routine*).
2. Enter a **name** and pick a **category**.
3. Choose the **weekdays** the habit repeats on.
   - Click individual days, or use the shortcuts **Her Gün** (*every day*), **Hafta İçi** (*weekdays*) and **Hafta Sonu** (*weekends*).
4. Pick a **color**: click the palette, use the color box, or type a hex code such as `#FF5733`.
5. Click **Rutin Kaydet** (*Save*).

![Habit editor](screenshots/04-habit-editor.png)

### Check off a day
- Click the box for that day in the habit's row. Click it again to undo.
- Unscheduled days are dimmed. You can still check them, but leaving them empty never breaks your streak.

### Go back in time
- Use the `‹` and `›` arrows to move between weeks and fill in days you missed.
- **Bugüne Dön** (*Back to today*) returns you to the current week.

### Edit or delete
- In the **İşlem** (*Actions*) column, use the settings icon to edit a habit or the trash icon to delete it.

### Categories
- **Kategorileri Yönet** (*Manage categories*) lets you add or remove categories.
- Use the drop-down next to it to filter the grid by category.

### How streaks work
- A streak counts how many scheduled days in a row you completed.
- Unscheduled days are skipped and never break a streak.
- If you haven't checked today yet, yesterday's streak is kept until the day is over.

## 4. Projects & Kanban

![Kanban](screenshots/02-kanban.png)

### Create a project
1. Click **Yeni Proje Ekle** (*New project*), give it a name and a color, then click **Oluştur** (*Create*).
2. Switch between projects with the tabs at the top.
3. **Projeyi Sil** (*Delete project*) deletes the selected project and all of its cards.

### Add a card
- Click **Yeni Görev Kartı Ekle** (*New card*) or the **+** in a column header.
- A card can have:
  - a **title** and **notes**
  - a **status** (column)
  - a **cover color**
  - **tags**: type a name, pick a color, then press **+**
  - an optional **checklist**: type an item, then press **Enter** or click **Madde Ekle** (*Add item*)
- Click **Kartı Kaydet** (*Save card*).

![Card editor](screenshots/05-card-editor.png)

### Move cards
- Drag a card to another column.
- Or use the quick buttons on the card: **TODO**, **SÜRÜYOR** (*in progress*) and **BİTTİ ✓** (*done*).
- You can tick checklist items right on the board. The progress bar updates instantly.

## 5. Reports

![Reports](screenshots/03-reports.png)

- Choose a month in **Rapor Ayı / Yılı** (*Report month*).
- **Discipline curve:** the share of your routines completed on each day of the month.
- **Category radar:** how consistent you are in each area.
- **Kanban report:** how each project's cards are spread across the three stages.
- **Monthly scorecard:** completed vs. scheduled days for each habit.
- **Yearly heatmap:** the last 364 days. The brighter the square, the more active the day.

## 6. Backup & moving to a new computer

- Data is saved automatically after every change. You don't need to do anything.
- For safety, click **Yedek İndir** from time to time. It downloads a `cosmos_yedek_YYYY-MM-DD.json` file.
- To move to another computer:
  1. Click **Yedek İndir** on the old computer.
  2. Install Cosmos on the new one.
  3. Click **Yedek Yükle** and choose the backup file.

> ⚠️ **Yedek Yükle replaces your current data.** Back up your current data first.

| OS | Data folder |
|---|---|
| Windows | `%APPDATA%\aliskanlik-takip-paneli\` |
| macOS | `~/Library/Application Support/aliskanlik-takip-paneli/` |
| Linux | `~/.config/aliskanlik-takip-paneli/` |

## 7. FAQ

**Will I lose my data if I close the app or restart my computer?**
No. Data is stored on disk. It is lost only if you delete the data folder above.

**Do I need an internet connection?**
No. Cosmos runs fully offline and never sends data anywhere.

**Will my data survive an update?**
Yes. A new version uses the same data folder.

**Is there a mobile version?**
Not yet. Cosmos is a desktop app.

**I found a bug or have an idea.**
Please open a [GitHub issue](https://github.com/11R5/cosmos-productivity-hub/issues).
