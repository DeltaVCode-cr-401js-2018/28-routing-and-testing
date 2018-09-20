import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from './components/landing';
import Dashboard from './components/dashboard';


export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Homepage</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
          </nav>
          <main>
            <Route exact path='/'
              component={Landing} />
            <Route exact path='/dashboard'
              component={Dashboard} />
          </main>
        </div>
      </BrowserRouter>
      
    );
  }
}