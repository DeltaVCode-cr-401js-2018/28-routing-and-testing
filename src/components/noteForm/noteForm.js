import React, { Component } from 'react';

const defaultState = {
  title: '',
  content: '',
}

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(defaultState);
  }

  onChange = (event) => {
    const { name, value, type } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.onChange}
        />

        <textarea
          rows="5"
          cols="100"
          type="text"
          name="content"
          placeholder="What do you want note to say"
          value={this.state.content}
          onChange={this.onChange}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }

}