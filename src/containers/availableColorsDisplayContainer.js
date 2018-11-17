import AvailableColorsDisplay from '../components/availableColorsDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		colors: state.availables.availableColors
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadAvailableColors: () => dispatch({
			type: "GET_AVAILABLE_COLORS"
		})
	}
};

const AvailableColorsDisplayContainer = connect(
		mapStateToProps, mapDispatchToProps
)(AvailableColorsDisplay);

export default AvailableColorsDisplayContainer;

