import React, { Component } from 'react';
import uuid from 'uuid';
import NoteForm from '../noteForm/noteForm';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { _id: uuid(),
          title: 'titles will go here',
          content: 'more stuff here'
        },
      ],
      error: null,
    };
  }
  
  addNote = (note) => {
    note._id = uuid();
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }


  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>

        <NoteForm
          addNote={this.addNote}
        />

        <NoteList notes={this.state.notes} />
      </React.Fragment>
    );
  }
}

class NoteList extends Component {
  render() {
    return (
      <ul>
        {this.props.notes.map(note => (
          <li key={note._id}>
            {note.title} : {note.content}
          </li>
        ))}
      </ul>
    );
  }
}