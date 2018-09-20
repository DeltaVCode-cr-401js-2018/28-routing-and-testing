import React from 'react';

const defaultState = {
  title: '',
  content: '',
  complete: false,
  editting: false,
};

export default class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = defaultState;
  }
  onComplete = (e) =>{
    e.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }
  handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    return(
      <form onSubmit={this.onComplete}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='Content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Publish Note</button>
      </form>
    );
  }
}