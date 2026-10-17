# Changelog

All notable changes to Cosmos are listed here. Versions follow [Semantic Versioning](https://semver.org/).

## [2.1.1] — 2026-10-17

### Fixed
- Text fields no longer stop accepting input after a warning or confirmation, e.g. when creating a second project or card. Native `alert()`/`confirm()` were replaced with in-app dialogs and toasts.
- Typing is smoother while dialogs are open. The starfield animation is throttled and pauses while a dialog is open or the window is in the background.
- Names containing quotes or HTML (`'`, `"`, `<`) are displayed correctly, and categories with an apostrophe can be deleted.
- Restoring a partial or older backup no longer leaves the app half-rendered. The same backup file can be selected twice.
- Future days are no longer counted as missed in the weekly success rate, the weekly chart or the monthly reports.
- The weekly target counts only scheduled days.
- Deleting a category moves its habits to another category instead of leaving them orphaned.
- Invalid card colors are rejected.
- Only one Cosmos window can run at a time, so two windows can't overwrite each other's data.
- Dropping a file on the window no longer replaces the app with a blank page.

### Added
- Enter saves and Escape closes dialogs; the first field is focused automatically.
- Confirmations before deleting a card and before restoring a backup.
- End-to-end smoke test (`npm test`), which also runs in CI.
- Project plan, technical documentation, workflows and known-issues log in `docs/`.

## [2.1.0] — 2026-10-17

### Added
- Windows (installer + portable), macOS (Intel + Apple Silicon) and Linux (AppImage + deb) builds through GitHub Actions.
- Fully offline: Tailwind, Chart.js, Lucide and the fonts are bundled.
- New app icon and logo.
- English and Turkish README, user guides and screenshots.

### Changed
- The project moved to the repository root. The app lives in `src/index.html`.
- The sample data shown on first launch is now generic.

## [2.0.0]

- First public version: habit tracker, Kanban projects, monthly and yearly reports, JSON backup.
