import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {notes} = this.props;
    return(
      <div>
        {notes.map(note=>(
          <NoteItem handleUpdate={this.props.handleUpdate} removeNote={this.props.removeNote} note={note}/>
        ))}
      </div>
    );
  }
}