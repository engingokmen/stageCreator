import React from 'react';
import List from '../App'
import Draggable from './Draggable';

class Elements extends React.Component {
  render() {
    const listItems = List.ELEMENTS.map((element)=>
      <Draggable key={List.ELEMENTS.indexOf(element)} name={element}></Draggable>
    );
    return <ul className='list-elements'>{listItems}</ul>;
  }
}

export default Elements;
