// VARIBLES - THAT I USE FOR MY JS FUNCTIONS AND FEATURES

const noteBar = document.getElementById("noteBar");
const noteForm = document.getElementById("noteForm");
const noteTrigger = document.getElementById("noteTrigger");
const closeNoteForm = document.getElementById("closeNoteForm");
const notesGrid = document.getElementById("notesGrid");
const noteDashboard = document.getElementById("noteDashboard");
const notesTab = document.getElementById("notesTab");
const archiveTab = document.getElementById("archiveTab");
const notesView = document.getElementById("notesView");
const archiveView = document.getElementById("archiveView");
const archiveGrid = document.getElementById("archiveGrid");
const optionsModal = document.getElementById("optionsModal");
let activeCard = null;
const formMoreButton = document.getElementById("formMoreButton");
const deleteNoteOption = document.getElementById("deleteNoteOption");

// SAVE NOTE FUNCTION - Adds notes in and removes the dashboard if there are notes
function saveNote() {
  const titleValue = noteForm.querySelector(".note-form-title").value;
  const bodyValue = noteForm.querySelector(".note-form-body").value;

  if (titleValue.trim() !== "" || bodyValue.trim() !== "") {
    const card = document.createElement("div");
    card.classList.add("note-card");
    card.innerHTML = `
        <div class="card-checkbox"><i class="material-icons-outlined">check_circle</i></div>
        <div class="card-pin"><i class="material-icons-outlined">push_pin</i></div>
        <h3>${titleValue}</h3>
        <p>${bodyValue}</p>
        <div class="card-toolbar">
        <i class="material-icons-outlined">palette</i>
        <i class="material-icons-outlined">notification_add</i>
        <i class="material-icons-outlined">person_add</i>
        <i class="material-icons-outlined">image</i>
        <i class="material-icons-outlined archive-btn">archive</i>
        <i class="material-icons-outlined more-btn">more_vert</i>
        </div>`;
    notesGrid.appendChild(card);
    attachArchiveButton(card);
    attachMoreOptions(card);

    if (notesGrid.children.length > 0) {
      noteDashboard.classList.add("hidden");
    }
  }
}

function updateDashboard() {
  noteDashboard.classList.toggle("hidden", notesGrid.children.length > 0);
  const archiveDashboard = document.getElementById("archiveDashboard");
  archiveDashboard.classList.toggle("hidden", archiveGrid.children.length > 0);
}

// BRING UP THE NOTE FORM

noteTrigger.addEventListener("click", () => {
  noteForm.classList.remove("hidden");
  noteBar.classList.add("hidden");
  noteForm.querySelector(".note-form-title").focus();
});

closeNoteForm.addEventListener("click", () => {
  saveNote();

  noteForm.classList.add("hidden");
  noteBar.classList.remove("hidden");
  noteForm.querySelector(".note-form-title").value = "";
  noteForm.querySelector(".note-form-body").value = "";
});

// CLOSE NOTE FORM WHEN CLICKED OUTSIDE

document.addEventListener("click", (event) => {
  const clickedInsideForm = noteForm.contains(event.target);
  const clickedTrigger = noteTrigger.contains(event.target);

  if (
    !clickedInsideForm &&
    !clickedTrigger &&
    !noteForm.classList.contains("hidden")
  ) {
    saveNote();

    noteForm.classList.add("hidden");
    noteBar.classList.remove("hidden");
    noteForm.querySelector(".note-form-title").value = "";
    noteForm.querySelector(".note-form-body").value = "";
  }
});

// ARCHIVE TAB - Moves notes to and from the archive tab
notesTab.addEventListener("click", () => {
  notesView.classList.remove("hidden");
  archiveView.classList.add("hidden");
  notesTab.classList.add("active");
  archiveTab.classList.remove("active");
});

archiveTab.addEventListener("click", () => {
  notesView.classList.add("hidden");
  archiveView.classList.remove("hidden");
  notesTab.classList.remove("active");
  archiveTab.classList.add("active");
});

function attachArchiveButton(card) {
  const archiveButton = card.querySelector(".archive-btn");
  archiveButton.addEventListener("click", () => {
    if (card.parentElement === notesGrid) {
      archiveGrid.appendChild(card);
      archiveButton.textContent = "unarchive";
    } else {
      notesGrid.appendChild(card);
      archiveButton.textContent = "archive";
    }
    updateDashboard();
  });
}

// MORE OPTIONS MODAL NOTE CARD - Opens the more options modal from the note card
function attachMoreOptions(card) {
  const moreButton = card.querySelector(".more-btn");

  moreButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const rect = moreButton.getBoundingClientRect();
    optionsModal.style.top = rect.bottom + window.scrollY + "px";
    optionsModal.style.left = rect.left + window.scrollX + "px";

    optionsModal.classList.remove("hidden");

    card.classList.add("menu-open");
    activeCard = card;
  });
}

// MORE OPTIONS MODAL NOTE FORM - Opens the more options modal from the note form
formMoreButton.addEventListener("click", (event) => {
  event.stopPropagation();

  const rect = formMoreButton.getBoundingClientRect();
  optionsModal.style.top = rect.bottom + window.scrollY + "px";
  optionsModal.style.left = rect.left + window.scrollX + "px";

  optionsModal.classList.remove("hidden");

  formMoreButton.classList.add("menu-open");
});

document.addEventListener("click", (event) => {
  if (!optionsModal.contains(event.target)) {
    optionsModal.classList.add("hidden");

    if (activeCard) {
      activeCard.classList.remove("menu-open");
      activeCard = null;
    }
    formMoreButton.classList.remove("menu-open");
  }
});

// DELETE NOTE - Deletes the note card from the dashboard in the more options modal of the note card
deleteNoteOption.addEventListener("click", () => {
  if (activeCard) {
    activeCard.remove();
    activeCard = null;
    optionsModal.classList.add("hidden");
    updateDashboard();
  }
});
