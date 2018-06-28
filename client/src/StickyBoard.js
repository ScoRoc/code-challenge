import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './style.css';

class StickyBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.board} className='board'>
        <div style={styles.smallBoard}>
          <Draggable bounds='parent'>
            <p className='drag'>I'm Draggable</p>
          </Draggable>
        </div>
      </div>
    );
  }
}

const styles = {
  board: {
    position: 'relative',
    background: 'blue',
    height: '80vh',
    width: '85vw',
    margin: '0 auto'
  },
  smallBoard: {
    height: '400px',
    width: '400px',
    background: 'purple'
  }
}

export default StickyBoard;
