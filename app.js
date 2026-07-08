const noteBar = document.getElementById("noteBar");
const noteForm = document.getElementById("noteForm");
const noteTrigger = document.getElementById("noteTrigger");
const closeNoteForm = document.getElementById("closeNoteForm");
const notesGrid = document.getElementById("notesGrid");
const noteDashboard = document.querySelector(".note-dashboard");

function saveNote() {
  const titleValue = noteForm.querySelector(".note-form-title").value;
  const bodyValue = noteForm.querySelector(".note-form-body").value;

  if (titleValue.trim() !== "" || bodyValue.trim() !== "") {
    const card = document.createElement("div");
    card.classList.add("note-card");
    card.innerHTML = `
        <h3>${titleValue}</h3><p>${bodyValue}</p>`;
    notesGrid.appendChild(card);

    if (notesGrid.children.length > 0) {
      noteDashboard.classList.add("hidden");
    }
  }
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
