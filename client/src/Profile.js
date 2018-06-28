import React, { Component } from 'react';
import AddSticky from './AddSticky';
import StickyBoard from './StickyBoard';

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Here's your profile page</p>
        <AddSticky />
        <StickyBoard />
      </div>

    );
  }
};

export default Profile;
