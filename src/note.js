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
  static findById(id) {
    return this.all.find(note => note.id === id);

   }

   renderUpdateForm() {
    return `
       <form data-id=${this.id} >
          <h3>Edit your notes from the sermon/message</h3>
          
          <label>Title</label>
          <input id='input-title' type="text" name="title" value="${this.title}"  class="input-text">
          <br><br>

          <label>Description</label>
          <textarea id='input-description' name="description" rows="8" cols="80" value="${this.description}" ></textarea>
          <br><br>

          <label>Link</label>
          <input id='input-url' type="text" name="url" value="${this.link_url}"  class="input-text">
          <br><br>

         <label>Speaker</label>
          <input id='input-speaker' type="text" name="speaker" value="${this.speaker}"  class="input-text">
          <br><br>

          <label>Topic</label>
          <select id="topics" name="topics" value="${this.topic.name}">
            <option value="1">Wisdom</option>
            <option value="2">Heaven</option>
            <option value="3">Discernment</option>
            <option value="4">Forgiveness</option>
          </select>
          <br><br>
      
          <input id= 'edit-button' type="submit" name="submit" value="Edit Note" class="submit">
        </form>
      
  `;
  }









}

Note.all = [];