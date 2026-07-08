// BRING UP THE NOTE FORM
const noteBar = document.getElementById("noteBar");
const noteForm = document.getElementById("noteForm");
const noteTrigger = document.getElementById("noteTrigger");
const closeNoteForm = document.getElementById("closeNoteForm");

noteTrigger.addEventListener("click", () => {
  noteForm.classList.remove("hidden");
  noteBar.classList.add("hidden");
  noteForm.querySelector(".note-form-title").focus();
});

closeNoteForm.addEventListener("click", () => {
  noteForm.classList.add("hidden");
  noteBar.classList.remove("hidden");
  noteForm.querySelector(".note-form-title").value = "";
  noteForm.querySelector(".note-form-body").value = "";
});

// CLOSES BUTTON ON NOTE FORM
window.addEventListener("click", (e) => {
  if (e.target === noteForm) {
    noteForm.classList.add("hidden");
    noteBar.classList.remove("hidden");
    noteForm.querySelector(".note-form-title").value = "";
    noteForm.querySelector(".note-form-body").value = "";
  }
});

// CLOSES THE NOTE FORM WHEN CLICKED OUTSIDE OF IT
document.addEventListener("click", (event) => {
  const clickedInsideForm = noteForm.contains(event.target);
  const clickedTrigger = noteTrigger.contains(event.target);

  if (
    !clickedInsideForm &&
    !clickedTrigger &&
    !noteForm.classList.contains("hidden")
  ) {
    noteForm.classList.add("hidden");
    noteBar.classList.remove("hidden");
  }
});
