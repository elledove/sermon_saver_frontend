const notesurl = "http://localhost:3000/api/notes"
const topicsurl = "http://localhost:3000/api/topics"

document.addEventListener('DOMContentLoaded', () => {
    getNotes();

    const notesForm = document.querySelector('#create-note-form')
    notesForm.addEventListener('submit',(e) => formHandler(e))

    const notesContainer = document.querySelector("#notes-container");
    notesContainer.addEventListener('click',(e) => {
    const editId = e.target.dataset.id
    const note = Note.findById(editId);
    console.log(note);

    } )
})




function getNotes() {
    fetch(notesurl)
    .then(response => response.json())
    .then(notes =>{
        console.log(notes)
        notes.data.forEach(note => {
            //debugger
            let newNote = new Note(note)
            
            
             document.querySelector('#notes-container').innerHTML += newNote.render();
           
        });
    })

}







function formHandler(e) {
    e.preventDefault()
    const inputTitle = document.querySelector('#input-title').value
    const inputDescription = document.querySelector('#input-description').value
    const inputSpeaker = document.querySelector('#input-speaker').value
    const inputUrl = document.querySelector('#input-url').value
    const inputTopic =  parseInt(document.querySelector('#topics').value)
    postFetchReq(inputTitle,inputDescription,inputSpeaker,inputUrl,inputTopic);
}



function postFetchReq(title,description,speaker,link_url,topic_id) {
    console.log(title,description,speaker,link_url,topic_id);
const bodyData ={title,description,speaker,link_url,topic_id}

fetch(notesurl, {

method: "POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify(bodyData)
 
})

.then(response => response.json())
.then(note => {
    console.log(note)
     const newNote = new Note(note.data)
     
     //debugger
      document.querySelector('#notes-container').innerHTML += newNote.render();
    
})

}