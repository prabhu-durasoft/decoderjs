import React, { Component } from 'react';
import AvailableColorsDisplayContainer from './availableColorsDisplayContainer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>
            Decoder
          </p>
        </header>
		<hr/>
		<AvailableColorsDisplayContainer/>
      </div>
    );
  }
}

export default App;
