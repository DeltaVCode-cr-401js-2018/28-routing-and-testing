import React from 'react';
import NoteForm from './note-form';
import uuid from 'uuid';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      error: null
    };
  }

  renderNoteList(){
    return(
      <div>
        {this.state.notes.map(note=>(
          <section key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button id={note._id} onClick={this.removeNote}>Remove {note.title}?</button>
          </section>
        ))}
      </div>
    )
  }

  handleAddNote = (note) =>{
    console.log(note);
    if(!note.title){
      this.setState({
        error: 'Title is required'
      });
      return;
    }
    note._id = uuid();
    note.editting = false;
    note.completed = false;
    this.setState(prevState=>({
      notes: [...prevState.notes, note],
      error: null,
    }));
  }

  removeNote = (e) =>{
    let id = e.target.id;
    let arr = this.state.notes.filter(note=> note._id);
  }

  render(){
    return(
      <React.Fragment>
        <h1>Notes</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        <NoteForm handleAddNote={this.handleAddNote}/>
        {this.renderNoteList()}
      </React.Fragment>
    )
  }
}