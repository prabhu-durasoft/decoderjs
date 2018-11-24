import LevelSelector from '../components/levelSelector';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		levels: state.availables.availableLevels
	};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadAvailableLevels: () => dispatch({
			type: "GET_AVAILABLE_LEVELS"
		})
	}
};

const LevelSelectorContainer = connect(
		mapStateToProps, mapDispatchToProps
)(LevelSelector);

export default LevelSelectorContainer;

