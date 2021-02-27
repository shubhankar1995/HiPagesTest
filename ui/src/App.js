import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
