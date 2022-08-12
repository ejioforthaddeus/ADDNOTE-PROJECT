//HTML ELEMENTS
let body = document.getElementById("body");
let title = document.getElementById("title");
let save = document.getElementById("savebtn");


save.addEventListener("click", ()=>{
  
    let saved_notes = JSON.parse(localStorage.getItem("notes")||"[]");
    let newnote = {};
    newnote.title = title.value;
    newnote.body = body.value;
    newnote.date = new Date().getTime();
   
    saved_notes.push(newnote);
    
    localStorage.setItem("notes",JSON.stringify(saved_notes));
     window.history.back();

})
