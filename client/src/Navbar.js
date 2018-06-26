import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
      </div>
    );
  }

}

export default Navbar;
