import React, { Component } from 'react';
import axios from 'axios';
import Sticky from './Sticky';
import './style.css';

class StickyBoard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('/sticky')
      .then( result => {
        console.log(result);
    })
  }

  render() {
    return (
      <div style={styles.board}>
        <Sticky />
      </div>
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
