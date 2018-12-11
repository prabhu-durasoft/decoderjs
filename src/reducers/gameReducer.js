import { AVAILABLE_COLORS, AVAILABLE_LEVELS, LEVEL_OF_GAME, GENERATE_TARGET_COLORS } from '../actions/';
import defaults from './defaults';  
import generateTargetColors from './colorsGenerator'

const initialState = {
	availableColors: [],
	availableLevels: [],
	levelOfGame: '',
	targetColors: []
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
	case AVAILABLE_COLORS:
		return {...state,  availableColors: defaults.colors};
	case AVAILABLE_LEVELS:
		return { ...state, availableLevels: defaults.levels };
	case LEVEL_OF_GAME:
		return { ...state, levelOfGame: action.payload.levelId };
	case GENERATE_TARGET_COLORS:	
		let targetColors = generateTargetColors(state.levelOfGame, state.availableColors);	
		console.log(targetColors);
		return { ...state, targetColors };
	default:
		return state;
	}
};

export default gameReducer;