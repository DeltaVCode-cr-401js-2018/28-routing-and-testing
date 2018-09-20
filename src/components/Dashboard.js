import React, { Component } from 'react';

import Form from './CreateForm';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state= {
      stores:[],
      error:null,
    }
  }

  componentDidMount(){
    console.log('__State__',this.state);
  }

  componentDidUpdate(){
    console.log('__State__',this.state);
  }

  addStore = (state) => {
    console.log('adding '+state+' to state');
    this.setState(prevState => ({
      stores:[...prevState.stores, state],
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Form handleSubmit={this.addStore}/>
      </React.Fragment>
    );
  }
}