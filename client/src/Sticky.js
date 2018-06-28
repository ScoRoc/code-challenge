import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './style.css';

class Sticky extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Draggable bounds='parent' defaultPosition={{x:50, y:50}}>
          <div className='drag'>
            <div className='drag-inner'>
              <p>I'm Draggable</p>
            </div>
          </div>
        </Draggable>
    );
  }
}

const styles = {
  board: {
    position: 'relative',
    background: 'rgba(235, 210, 215, 0.7)',
    height: '70vh',
    width: '85vw',
    margin: '0 auto'
  }
}

export default Sticky;
