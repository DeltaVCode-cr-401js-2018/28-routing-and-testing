import React, { Component } from 'react';
import uuid from 'uuid';
//TODO import noteForm

export default class Dashboard extends Comment {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { _id: uuid(),
          title: 'titles will go here',
          content: 'more stuff here'
        },
      ],
      error: null,
    };
  }
}