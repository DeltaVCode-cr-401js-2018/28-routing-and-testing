import React, { Component } from 'react';

export default class Item extends Component {
  deleteStore = () => {
    this.props.delete(this.props.storeItem._id);
  }

  render() {
    return (
      <React.Fragment>
        <li>{this.props.storeItem.storeName} : $X in sales <button onClick={this.deleteStore}>Delete</button ></li>
      </React.Fragment>
    );
  }
}