import React from 'react';

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      translateX:null,
      translateY:null
    }

    this.originX = null;
    this.originY = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragStarted = false;

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart(event) {
    this.originX = event.clientX;
    this.originY = event.clientY;
    this.dragStarted = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  onDragMove(event) {
    if (!this.dragStarted) {
      return;
    }
    event.preventDefault();
    const deltaX = event.clientX - this.originX;
    const deltaY = event.clientY - this.originY;
    this.setState({
      translateX:this.offsetX + deltaX,
      translateY:this.offsetY + deltaY
    })
    event.currentTarget.style.transform = 'translate(' +
      this.state.translateX + 'px, ' + this.state.translateY + 'px)';
  }

  onDragEnd(event) {
    this.dragStarted = false;
    this.offsetX += event.clientX - this.originX;
    this.offsetY += event.clientY - this.originY;
  }

  render () {
    return (
        <li
          onPointerDown={this.onDragStart}
          onPointerMove={this.onDragMove}
          onPointerUp={this.onDragEnd}
          >{this.props.name}</li>
    )
  }
}

export default Draggable;

// className="ball"
