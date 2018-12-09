import { createStore } from 'redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const reducers = combineReducers({
	game: gameReducer
});

const Store = createStore(reducers);
export default Store;
