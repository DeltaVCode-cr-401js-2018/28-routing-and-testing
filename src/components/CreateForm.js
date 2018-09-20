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
        <label>Store Name<input type="text" name="storeName" value={this.state.storeName} onChange={this.handleChange}/></label>
        <label>Max # of Customers/hr<input type="number" step="1" name="max" value={this.state.max} onChange={this.handleChange}/></label>
        <label>Min # of Customers/hr<input type="number" step="1" name="min" value={this.state.min} onChange={this.handleChange}/></label>
        <label>Avg # of sales/customers<input type="number" step="0.01" name="avg" value={this.state.avg} onChange={this.handleChange}/></label>
        <input type="submit"/>
      </form>
    );
  }
}