import { availableColors, availableLevels } from '../actions/';

const defaults = {
	colors: { 
			[Symbol('Red')]: { id: 'c_red', color: 'red' }, 
			[Symbol('Green')]: { id: 'c_green', color: 'green' },
			[Symbol('Blue')]: { id: 'c_blue', color: 'blue' }, 
			[Symbol('White')]: { id: 'c_white', color: 'white' },
			[Symbol('Black')]: { id: 'c_black', color: 'black' },
			[Symbol('Yellow')]: { id: 'c_yellow', color: 'yellow' },
			[Symbol('Pink')]: { id: 'c_pink', color: 'pink' },
			[Symbol('Orange')]: { id: 'c_orange', color: 'orange' },
			[Symbol('Brown')]: { id: 'c_brown', color: 'brown' },
			[Symbol('LightBlue')]: { id: 'c_lightblue', color: 'lightblue' },
			[Symbol('Gray')]: { id: 'c_gray', color: 'gray' }
	},
	levels: {
			[Symbol('Beginner')]: { id: 'l_beginner', level: 'Beginner' },
			[Symbol('Intermediate')]: { id: 'l_intermediate', level: 'Intermediate' },
			[Symbol('Advanced')]: { id: 'l_advanced', level: 'Advanced' }
	}	
};

const reducers = (state = {
	availableColors: {},
	availableLevels: {}
}, action) => {
	switch (action.type) {
	case 'GET_AVAILABLE_COLORS':
		return {
			...state,
			availableColors: defaults.colors
		}
	case 'GET_AVAILABLE_LEVELS':	
		return {
			...state,
			availableLevels: defaults.levels
		}
	default:
		return state;	
	}
};

export default reducers;