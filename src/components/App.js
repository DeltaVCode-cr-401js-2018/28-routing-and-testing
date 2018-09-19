import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>SalmonCookies</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Owner's Dashboard</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/" component={Landing}/>
          <Route path='/dashboard' component={Dashboard}/>
        </main>
      </div>
    );
  }
}

export default App;
