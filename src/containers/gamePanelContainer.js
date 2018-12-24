import GamePanel from '../components/gamePanel';
import { connect } from 'react-redux';
import { AVAILABLE_COLORS } from '../actions';

const mapStateToProps = ({game}) => {
	return {
		availableColors: game.availableColors	
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

const GamePanelContainer = connect(
		mapStateToProps, mapDispatchToProps
)(GamePanel);

export default GamePanelContainer;

