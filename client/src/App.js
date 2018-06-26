import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  withRouter,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: null
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/"
              render={(props) => <HomePage />}
            />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
