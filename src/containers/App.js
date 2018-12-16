import React, { Component } from 'react';
import MainRoutes from '../routes';

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
		<MainRoutes/>
      </div>
    );
  }
}

export default App;
