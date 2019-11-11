import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Stage from './components/Stage'
import ListStages from './components/ListStages'
import Elements from './components/Elements'
import Save from './components/Save'

const STAGES = ['Stage1','Stage2','Stage3'];
const ELEMENTS = ['BUTTON','TEXT','INPUT'];

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <Save></Save>
          <ListStages></ListStages>
          <div className='main'>
            <Elements></Elements>
            <Stage></Stage>
            <div className='list-elements'></div>
          </div>
        </div>
    )
  }
}

export default {App, ELEMENTS, STAGES};
