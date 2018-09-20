import React from 'react';
import NoteForm from './note-form';
import uuid from 'uuid';
import NoteList from './note-list';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      error: null
    };
  }

  handleUpdateNote = (note) =>{
    if(!note.title){
      this.setState({
        error: 'Title is required'
      });
      return;
    }
    console.log(note);
    let updatedNotes = this.state.notes.map(eNote =>
        eNote._id === note._id ? note : eNote
      );
    this.setState(prevState=>({
      error: null,
      notes: updatedNotes,
    }));
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
    let arr = this.state.notes.filter(note=> note._id !== id);
    console.log(arr);
    this.setState({
      error: null,
      notes: arr,
    });
  }

  render(){
    return(
      <React.Fragment>
        <h1>Notes</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        <NoteForm handleComplete={this.handleAddNote}/>
        <NoteList handleUpdate={this.handleUpdateNote} removeNote={this.removeNote} notes={this.state.notes}/>
      </React.Fragment>
    )
  }
}