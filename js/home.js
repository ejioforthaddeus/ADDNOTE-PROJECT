let mynotes = JSON.parse(localStorage.getItem("notes")||"[]");
let lists = ``;
if(mynotes!=null){
    for( let i = 0; i< mynotes.length; i++){
        lists =`
        <div col-md-6 offset-md-3 class="note-list">
                  <span>${mynotes[i].title}</span>
               <span class="" >
                <button class=" btn btn-primary ml-5" onclick="viewNote(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                <button class="btn btn-danger ml-5" onclick="deleteNote(${i})">Delete</button>
               </span>
               <hr>`;
                document.getElementById("mynotes").insertAdjacentHTML( 'beforeend', lists);
    }
   
}