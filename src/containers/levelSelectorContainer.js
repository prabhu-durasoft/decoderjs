import LevelSelector from '../components/levelSelector';
import { connect } from 'react-redux';
import { AVAILABLE_LEVELS, LEVEL_OF_GAME, GENERATE_TARGET_COLORS } from '../actions';


const mapStateToProps = ({game}) => {
	return {
		availableLevels: game.availableLevels,
		levelOfGame: game.levelOfGame,
		gameStarted: game.gameStarted
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadAvailableLevels: () => dispatch({
			type: AVAILABLE_LEVELS
		}),
		setLevelOfGame: (levelId) => dispatch({
			type: LEVEL_OF_GAME, payload: { levelId }	
		}),
		generateTargetColors: () => dispatch({
			type: GENERATE_TARGET_COLORS
		})
	}
};

const LevelSelectorContainer = connect(
		mapStateToProps, mapDispatchToProps
)(LevelSelector);

export default LevelSelectorContainer;

