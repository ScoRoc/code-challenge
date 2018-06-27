import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.name.value;
    let email = this.email.value;
    let password = this.password.value;
    axios.post('/auth/signup', { name, email, password })
      .then(result => {
        console.log(result);
      })
  }

  render() {
    return (
      <div>
        <form id='signup-form' onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input id='name-signup' type='text' ref={ input => {this.name = input}} required />
          <label htmlFor='email'>Email</label>
          <input id='email-signup' type='email' ref={ input => {this.email = input}} required />
          <label htmlFor='password'>Password</label>
          <input id='password-signup' type='password' ref={ input => {this.password = input}} required />
          <button type='submit'>Signup</button>
        </form>
      </div>
    );
  }

}

export default Signup;
