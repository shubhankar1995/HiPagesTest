import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
