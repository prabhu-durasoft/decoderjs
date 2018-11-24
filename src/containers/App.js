import React, { Component } from 'react';
import AvailableColorsDisplayContainer from './availableColorsDisplayContainer';
import LevelSelectorContainer from './levelSelectorContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            Decoder
          </h1>
        </header>
		<hr/>
		<AvailableColorsDisplayContainer/>
		<hr/>
		<LevelSelectorContainer/>
      </div>
    );
  }
}

export default App;
