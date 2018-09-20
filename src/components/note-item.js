import React from 'react';
import NoteForm from './note-form';
import Modal from './modal';

export default class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editting: false,
    };
  }

  startEdit = () =>{
    this.setState({
      editting: true,
    });
  }
  endEdit = () =>{
    this.setState({
      editting: false,
    });
  }
  render(){
    const note = this.props.note;
    console.log(this.props);
    return(
      <section key={note._id}>
        <h2>{note.title}</h2>
        <p onDoubleClick={this.startEdit}>{note.content}</p>
        <button id={note._id} onClick={this.props.removeNote}>Remove {note.title}?</button>
        <Modal show={this.state.editting} handleClose={this.endEdit}>
          <NoteForm handleComplete={this.props.handleUpdate} handleClose={this.endEdit} note={note}/>
        </Modal>
      </section>
    );
  }
}