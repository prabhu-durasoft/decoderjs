import { createStore } from 'redux';
import { combineReducers } from 'redux';
import availables from './availables';

const reducers = combineReducers({
  availables
});

const Store = createStore(reducers);
export default Store;
