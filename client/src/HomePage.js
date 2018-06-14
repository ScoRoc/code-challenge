import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  withRouter,
  Route
} from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: null
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='App'>
        <h1>This is your homepage.</h1>
        <p>Go to the <a className='green' href='/instructions'>instructions</a> page to begin.</p>
      </div>
    );
  }
}

export default HomePage;
