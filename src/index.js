import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';
import './css/App.css';

import App from './containers/App';
import { Provider } from 'react-redux';
import Store from './reducers/';



ReactDOM.render((<Provider store={Store}>
		<App/>
	</Provider>), document.getElementById('root'));

serviceWorker.register();
