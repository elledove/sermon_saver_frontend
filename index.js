const notesurl = "http://localhost:3000/api/notes"
const topicsurl = "http://localhost:3000/api/topics"

document.addEventListener('DOMContentLoaded', () => {
    getNotes();
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
            <a href="${note.attributes.link_ur}"> </a>
            <h4> ${note.attributes.topic.name} </h4>
            <button ${note.id}>edit </button>
            </div>
            <br> <br>`;
            
            document.querySelector('#notes-container').innerHTML += notesInfo;
        });
    })

}