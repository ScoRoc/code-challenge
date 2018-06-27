import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // withRouter,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.liftUser = this.liftUser.bind(this);
  }

  liftUser(user) {
    this.setState({
      user
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} />
          <Route exact path="/"
              render={(props) => <HomePage />}
            />
          <Route path='/profile' render={() =>
            <Profile user={this.state.user} />
            } />
          <Route path='/signup' render={() =>
            <Signup liftUser={() => this.liftUser()} />
          } />
          <Route path='/login' render={() =>
            <Login liftUser={() => this.liftUser()} />
          } />
        </div>
      </Router>
    );
  }
}

export default App;
