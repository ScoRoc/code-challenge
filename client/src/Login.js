import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <label for='email'>Email</label>
          <input id='email' type='text' required />
          <label for='password'>Password</label>
          <input id='password' type='password' required />
        </form>
      </div>
    );
  }

}

export default Login;
