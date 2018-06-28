import React, { Component } from 'react';
import StickyBoard from './StickyBoard';

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Here's your profile page</p>
        <StickyBoard />
      </div>

    );
  }
};

export default Profile;
