import { availableColors, availableLevels } from '../actions/';

const reducers = (state = {
	availableColors: [],
	availableLevels: []
}, action) => {
	switch (action.type) {
	case 'GET_AVAILABLE_COLORS':
		return {
			...state,
			availableColors: action.values
		}
	case 'GET_AVAILABLE_LEVELS':	
		return {
			...state,
			availableLevels: action.values
		}
	default:
		return state;	
	}
};

export default reducers;