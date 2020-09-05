const notesurl = "http://localhost:3000/api/notes"
const topicsurl = "http://localhost:3000/api/topics"

document.addEventListener('DOMContentLoaded', () => {
    getNotes();

    const notesForm = document.querySelector('#create-note-form')
    notesForm.addEventListener('submit',(e) => formHandler(e))
})




function getNotes() {
    fetch(notesurl)
    .then(response => response.json())
    .then(notes =>{
        console.log(notes)
        notes.data.forEach(note => {
            //debugger
            let newNote = new Note(note)
            // const notesInfo = `<div id="${note.id}">            
            // <h2>${note.attributes.title} </h2>
            // <h3>${note.attributes.speaker} </h3>
            // <p>  ${note.attributes.description}</p>
            // <a href="${note.attributes.link_url}"> Link to sermon/message </a>
            // <h4> ${note.attributes.topic.name} </h4>
            // <button ${note.id}>edit </button>
            // </div>
            // <br> <br>`;
            
             document.querySelector('#notes-container').innerHTML += newNote.render();
           // render(note) // *** Im running into a problem Here! Unless i refresh the page the Post appears to not work. Also, the POST returns an object that doesn't recognize the name of the topic until refreshed???
        });
    })

}



// function render(note){
//     const notesInfo = `<div data-id="${note.id}">            
//     <h2>${note.attributes.title} </h2>
//     <h3>${note.attributes.speaker} </h3>
//     <p>  ${note.attributes.description}</p>
//     <a href="${note.attributes.link_url}"> Link to sermon/message </a>
//     <h4> ${note.attributes.topic.name} </h4>
//     <button data-id =${note.id}>edit </button>
//     </div>
//     <br> <br>`;
    
//     document.querySelector('#notes-container').innerHTML += notesInfo;

// }











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
     
     //`<div id="${note.id}">            
    //  <h2>${note.title} </h2>
    //  <h3>${note.speaker} </h3>
    //  <p>  ${note.description}</p>
    //  <a href="${note.link_url}"> Link to sermon/message </a>
    //  <h4> ${note.topic_id.name} </h4>
    //  <button ${note.id}>edit </button>
    //  </div>
    //  <br> <br>`;
     //debugger
      document.querySelector('#notes-container').innerHTML += newNote.render();
    //render(note)
})

}