import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  withRouter,
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import ToDoList from './ToDoList';

class App extends Component {
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
      <BrowserRouter>
        <div>
          <Route exact path="/"
              render={(props) => <HomePage />}
            />
          <Route exact path="/instructions"
              render={(props) => <ToDoList />}
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
