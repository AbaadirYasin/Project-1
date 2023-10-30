document.addEventListener("DOMContentLoaded", function () {
    const noteTitle = document.getElementById("noteTitle");
    const noteContent = document.getElementById("noteContent");
    const addNoteButton = document.getElementById("addNote");
    const notesList = document.getElementById("notesList");
    const clearAllButton = document.getElementById("clearAll");

    addNoteButton.addEventListener("click", function () {
        const title = noteTitle.value;
        const content = noteContent.value;

        if (title.trim() !== "" && content.trim() !== "") {
            const noteItem = document.createElement("div");
            noteItem.classList.add("note-item");
            noteItem.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
            `;
            notesList.appendChild(noteItem);

            // Clear input fields
            noteTitle.value = "";
            noteContent.value = "";
        }
    });

    clearAllButton.addEventListener("click", function () {
        while (notesList.firstChild) {
            notesList.removeChild(notesList.firstChild);
        }
    });
});
