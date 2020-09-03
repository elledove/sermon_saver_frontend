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
            const notesInfo = `<div id="${note.id}">            
            <h2>${note.attributes.title} </h2>
            <h3>${note.attributes.speaker} </h3>
            <p>  ${note.attributes.description}</p>
            <a href="${note.attributes.link_url}"> Link to sermon/message </a>
            <h4> ${note.attributes.topic.name} </h4>
            <button ${note.id}>edit </button>
            </div>
            <br> <br>`;
            
            document.querySelector('#notes-container').innerHTML += notesInfo;
        });
    })

}

function formHandler(e) {
    e.preventDefault()
    const inputTitle = document.querySelector('#input-title').value
    const inputDescription = document.querySelector('#input-description').value
    const inputSpeaker = document.querySelector('#input-speaker').value
    const inputUrl = document.querySelector('#input-url').value
    const inputTopic = parseInt( document.querySelector('#topics').value)
    postFetchReq(inputTitle,inputDescription,inputSpeaker,inputUrl,inputTopic);
}



function postFetchReq(title,description,speaker,link_url,topic_id) {
console.log(title,description,speaker,link_url,topic_id)

}