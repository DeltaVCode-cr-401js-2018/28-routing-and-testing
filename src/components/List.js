import React, { Component } from 'react';

import Item from './ListItem';

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <h2>List of Stores</h2>
        <ul>
        {this.props.listOfStores.map(store => (
          <React.Fragment key={store._id}>
            <Item storeItem={store} delete={this.props.delete}/>
          </React.Fragment>
        ))}
        </ul>
      </div>
    );
  }
}