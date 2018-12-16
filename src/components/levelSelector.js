import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LevelSelector  extends Component {

	componentDidMount() {
		this.props.loadAvailableLevels();
	}
	
	levelSelected(levelId) {
		this.props.setLevelOfGame(levelId);
	}
	
	startGameClicked() {
		this.props.generateTargetColors();
	}
	
	displayLevels() {
		let { availableLevels } = this.props ;
		let levelsList = [];
		if(availableLevels) {
			for(let key of Object.getOwnPropertySymbols(availableLevels)) {
				let li = (<li key={availableLevels[key].id}>
						<input type="radio" onClick={this.levelSelected.bind(this, availableLevels[key].id)} name="level" value={availableLevels[key].name}></input>{availableLevels[key].name}
				</li>);
				levelsList.push(li);
			}
		}
		return <ul className="levels">{levelsList}</ul>;
	}

	render() {
		if(this.props.gameStarted && this.props.gameStarted === true) {
			return (<Redirect to="/game"/>);
		}
		
		return (<div className="level_selector">
				<h2>Select a Level</h2>
				{ this.displayLevels() }
				<button disabled={this.props.levelOfGame === '' ? 'disabled': ''} onClick={this.startGameClicked.bind(this)}>Start Game</button>
		</div>);		
	}

}

export default LevelSelector;