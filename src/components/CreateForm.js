import React, { Component } from 'react';

const defaultState = {
  storeName: '',
  min: 0,
  max: 1,
  avg: 0,
}

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  onComplete = (event) => {
    event.preventDefault();

    console.log(this.state);
    this.props.handleSubmit(this.state);

    this.setState(defaultState);
  } 

  handleChange = (event) => {
    const {name, value, type} = event.target;
    
    this.setState({[name]: type === 'number' ? +value : value});
  }

  render() {
    return (
      <form onSubmit={this.onComplete}>
        <input type="text" name="storeName" placeholder="New store name" onChange={this.handleChange}/>
        <input type="number" name="max" placeholder="min Number of customers" onChange={this.handleChange}/>
        <input type="number" name="min" placeholder="max Number of customers" onChange={this.handleChange}/>
        <input type="number" name="avg" placeholder="avg sales" onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }
}