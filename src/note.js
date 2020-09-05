class Note {
constructor(note){
    this.id = note.id
    //debugger
    this.title = note.attributes.title
    this.description = note.attributes.description
    this.link_url = note.attributes.link_url
    this.speaker = note.attributes.speaker
    this.topic = note.attributes.topic
    Note.all.push(this)
    //debugger
}

 render(){
     //debugger
    return `<div data-id="${this.id}">            
    <h2>${this.title} </h2>
    <h3>${this.speaker} </h3>
    <p>  ${this.description}</p>
    <a href="${this.link_url}"> Link to sermon/message </a>
    <h4> ${this.topic.name} </h4>
    <button data-id =${this.id}>edit </button>
    </div>
    <br> <br>`;
    
    

}



}

Note.all = [];