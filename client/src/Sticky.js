import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './style.css';

class Sticky extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Draggable bounds='parent' defaultPosition={{x:5, y:0}}>
        <div className='drag'>
          <div className='drag-inner'>
            <p>I'm Draggable</p>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Sticky;
