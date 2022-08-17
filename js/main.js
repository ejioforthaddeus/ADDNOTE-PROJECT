//HTML ELEMENTS
let body = document.getElementById("body");
let title = document.getElementById("title");
let save = document.getElementById("savebtn");


save.addEventListener("click", () => {

    let saved_notes = JSON.parse(localStorage.getItem("notes") || "[]");
    let newnote = {};
    newnote.title = title.value;
    newnote.body = body.value;
    newnote.date = new Date().getTime();

    saved_notes.push(newnote);

    localStorage.setItem("notes", JSON.stringify(saved_notes));
    window.history.back();

})


async function deleteNote(id) {

    let confirm = window.confirm("Are you sure you want to delete?")

    if (confirm) {
        let saved_notes = JSON.parse(localStorage.getItem("notes" || "[]"));

        saved_notes = saved_notes.filter((value, index, saved_notes) => {
            return index != id;
        })

        localStorage.setItem("notes", JSON.stringify(saved_notes));
        window.location.href = window.location.href;
    }

}

async function viewNote(id) {
    let view_title = document.querySelector(".view-title");
    let view_body = document.querySelector(".view-body");

    let saved_notes = JSON.parse(localStorage.getItem("notes" || "[]"));

    currentNote = saved_notes.filter((value, index, saved_notes) => {
        return index == id;
    })

    view_title.innerHTML = currentNote[0].title;
    view_body.innerHTML = currentNote[0].body;
}