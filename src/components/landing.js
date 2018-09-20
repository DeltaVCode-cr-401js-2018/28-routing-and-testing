import React from 'react';

export default class Landing extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <p>This is an app used to create notes for a user. Yeah....</p>
      </React.Fragment>
    );
  }
}