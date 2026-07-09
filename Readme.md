# Google keep Clone - Educational Project

A simplified clone of Google keep built with basic HTML, CSS & JavaScript, as part of a Zaio Institute of Technology Educational Project.

## How to Run

1. Download or clone this project folder.
2. Make sure the folder structure stays intact and sits in the same Directory.
3. Open the index.html directly in any modern web browser. No building steps service or installation is required as this is a static site.
4. No login or set up is needed this is just a landing page.

**Note:** Notes are **not saved permanetly**. Since this project doesn't use local storage or any backend. All the notes only exist in memory for the current browser session at refreshing or closing the page will clear all notes.

## What the JavaScript Actually Does

The following features of fully functional, wired up with real event listeners and logic:

- **Create and save a note** - clicking the take a note input expand it to a full form. Clicking on the **close** or clicking anywhere outside the form, saves the note as a card and resets the form. Empty notes are not saved
- **Display notes** - saved notes render dynamically as cards in the grid. The empty state "notes that you add appear here" dashboard automatically Hein once at least one note exists and reappearance if none remain.
- **Archive** - hovering a note can't reveals a toolbar. Clicking the archive button moves the note from the notes view into the archive view. The archive view has its own empty state dashboard and shows and hides it the same way.
- **More options modal** - clicking the 3.icon opens a small drop-down menu positioned next to the icon that was clicked clicking outside the model closes it.
- **Delete a note** — clicking "Delete note" inside that modal removes the currently selected note card entirely from the page.
- **Mobile search toggle** — below 794px screen width, the search bar collapses into a single icon. Clicking it expands the search input (hiding the logo/menu section to make room) and shows a back arrow to collapse it again.
- **Responsive layout** — the sidebar, note bar, note form, and notes grid all resize and restack at smaller screen widths via CSS media queries, controlled in part by the same show/hide logic used above.

## What Is Not Functional (Styling Only)

Several buttons and icons exist in the interface purely for visual/layout accuracy, matching the real Google Keep design — but they have **no JavaScript behavior attached**, since they were outside the scope of this project's requirements. Clicking these does nothing:

**Note form toolbar:**

- Formatting options, background/color picker, reminders, add collaborator, add image, undo, redo
  **Note card toolbar:**
- Background/color picker, reminders, add collaborator, add image
- The pin icon and checkbox icon (visual only, not clickable)
  **Options modal (aside from "Delete note"):**
- Add label, Add drawing, Make a copy, Show tick boxes, Copy to Google Docs, Version history
  **Top navbar:**
- Refresh, List view toggle, Settings, Google Apps grid, Account icon
- The search **input itself** does not filter or search notes — only the open/close toggle animation is functional
  **Sidebar:**
- Reminders, Edit Labels, and Bin — these display and highlight like the Notes/Archive tabs visually on hover, but have no click functionality or associated view
  These elements were intentionally left as static UI to preserve the visual layout of the original Google Keep design, without implementing functionality beyond what the project brief required (create, add, archive, and display notes).

## Tech Used

- HTML5
- CSS3 (Flexbox, media queries, CSS transitions via `opacity`)
- Vanilla JavaScript (DOM manipulation, event listeners — no frameworks or libraries)
- Google Material Icons (Filled + Outlined) via Google Fonts CDN
