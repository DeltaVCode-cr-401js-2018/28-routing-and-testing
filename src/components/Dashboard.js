import React, { Component } from 'react';

import Form from './CreateForm';
import List from './List';

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

  addStore = (store) => {
    this.setState(prevState => ({
      stores:[...prevState.stores, store],
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Form handleSubmit={this.addStore}/>
        <List/>
      </React.Fragment>
    );
  }
}