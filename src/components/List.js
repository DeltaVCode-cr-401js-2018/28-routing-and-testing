import React, { Component } from 'react';

import Item from './ListItem';

export default class List extends Component {
  render() {
    return (
      <ul>
        <Item/>
      </ul>
    );
  }
}