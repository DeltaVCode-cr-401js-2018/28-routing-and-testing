import React, { Component } from 'react';
import uuid from 'uuid';

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
    store._id = uuid();
    this.setState(prevState => ({
      stores:[...prevState.stores, store],
    }));
  }

  deleteStore =(storeID) => {
    let adjustedStoreRoster = this.state.stores.filter(x => x._id !== storeID);
    this.setState({stores:adjustedStoreRoster});
  }

  render() {
    return (
      <React.Fragment>
        <Form handleSubmit={this.addStore}/>
        <List listOfStores={this.state.stores} delete={this.deleteStore}/>
      </React.Fragment>
    );
  }
}