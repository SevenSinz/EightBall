import React, { Component } from 'react';
import './App.css';
import EightBall from './Eightball';


class App extends Component {
  render() {
    return (
      <div className="App">
        <EightBall />
        <EightBall answers={[{"msg": "Yes", "color": "navy"}]}
        />
      </div>
    );
  }
}

export default App;
