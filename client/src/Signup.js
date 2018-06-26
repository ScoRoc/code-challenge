import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <label for='name'>Name</label>
          <input id='name' type='text' required />
          <label for='email'>Email</label>
          <input id='email' type='text' required />
          <label for='password'>Password</label>
          <input id='password' type='password' required />
        </form>
      </div>
    );
  }

}

export default Signup;
