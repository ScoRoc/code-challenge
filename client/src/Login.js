import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    console.log(email, password);
  }

  render() {
    return (
      <div>
        <form id='login-form' onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input id='email-signup' type='email' ref={ input => {this.email = input}} required />
          <label htmlFor='password'>Password</label>
          <input id='password-signup' type='password' ref={ input => {this.password = input}} required />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }

}

export default Login;
