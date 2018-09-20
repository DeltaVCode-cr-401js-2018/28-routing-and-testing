import React, { Component } from 'react';

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

  render() {
    return (
      <React.Fragment>
        Dashboard connected!
      </React.Fragment>
    );
  }
}