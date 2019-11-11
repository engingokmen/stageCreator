import React from 'react';
import List from '../App'

class ListStages extends React.Component {
  render() {
    const listItems = List.STAGES.map((stage)=>
      <li key={List.STAGES.indexOf(stage)}>{stage}</li>
    );
    return <ul className='list-stages'>{listItems}</ul>;
  }
}

export default ListStages;
