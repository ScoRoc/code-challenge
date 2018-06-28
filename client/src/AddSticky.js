import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class AddSticky extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfStickies: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newSticky = this.newSticky.value;
    console.log(newSticky);
    axios.post('/add-sticky', { newSticky })
      .then(result => {
        console.log(result);
        // this.setState({ numberOfStickies: result.stickyNumber });
      })
  }

  render() {
    if (this.state.loggedIn) return <Redirect to='/' />

    return (
      <div>
        <form id='signup-form' onSubmit={this.handleSubmit}>
          <label htmlFor='new-sticky'>Add Note</label>
          <input id='new-sticky' type='text' ref={ input => {this.newSticky = input}} required />
          <button type='submit'>Signup</button>
        </form>
      </div>
    );
  }

}

export default AddSticky;
