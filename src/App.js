import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  changeNumber = (value) => {
    this.setState((oldState) => ({
      number: oldState.number + value
    }));
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <button className='count-button' onClick={() => this.changeNumber(-5)}>- 5</button>
        <button className='count-button' onClick={() => this.changeNumber(-1)}>- 1</button>
        <h2 className='main-number'>{number}</h2>
        <button className='count-button' onClick={() => this.changeNumber(1)}>+ 1</button>
        <button className='count-button' onClick={() => this.changeNumber(5)}>+ 5</button>
      </>
    );
  }
}

export default App;
