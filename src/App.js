import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">Landing</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/"
              component={() => <h1>Description goes here</h1>} />

            {/* <Route exact path="/dashboard"
              component={Dashboard} /> */}
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
