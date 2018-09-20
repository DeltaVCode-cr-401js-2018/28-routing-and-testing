import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard/dashboard'

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
              component={() => <p>You can use this app to create notes. Go to 
                Dashboard to add your own notes with a title and content.</p>} />

            <Route exact path="/dashboard"
              component={Dashboard} />
          </main>
          <footer>
            <Route path="/dashboard"
              component={() => <p>If you are on the dashboard you will see this message, 
                just testing how it works. Hello!</p>} />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
