import React, { Component } from 'react';
import axios from 'axios';
import Sticky from './Sticky';
import './style.css';

class StickyBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickies: null
    }
  }

  componentDidMount() {
    axios.get(`/profile/${this.props.user._id}/sticky`)
      .then( result => {
        this.setState({ stickies: result.data.stickies });
    })
  }

  render() {
    let stickies = null;
    if (this.state.stickies) {
      stickies = this.state.stickies.map( (sticky, id) => {
        <Sticky id={id} sticky={sticky} />
      });
      return (
        <div style={styles.board}>
          <p>hi</p>
          {this.stickies}
        </div>
      )
    }
    return (
      <div style={styles.board}></div>
    );
  }
}

const styles = {
  board: {
    position: 'relative',
    background: 'rgba(235, 210, 215, 0.7)',
    height: '70vh',
    width: '85vw',
    margin: '0 auto',
    padding: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,.4) inset'
  }
}

export default StickyBoard;
