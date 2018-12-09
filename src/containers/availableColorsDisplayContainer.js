import AvailableColorsDisplay from '../components/availableColorsDisplay';
import { connect } from 'react-redux';
import { AVAILABLE_COLORS } from '../actions';

const mapStateToProps = ({game}) => {
	return {
		availableColors: game.availableColors	
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadAvailableColors: () => dispatch({
			type: AVAILABLE_COLORS
		})
	}
};

const AvailableColorsDisplayContainer = connect(
		mapStateToProps, mapDispatchToProps
)(AvailableColorsDisplay);

export default AvailableColorsDisplayContainer;

