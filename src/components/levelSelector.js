import React, { Component } from 'react';

class LevelSelector  extends Component {
	componentDidMount() {
		let result = this.props.loadAvailableLevels();
	}
	
	displayLevels() {
		let { levels } = this.props ;
		let levelsList = [];
		if(levels) {
			for(let key of Object.getOwnPropertySymbols(levels)) {
				let li = (<li key={levels[key].id}>
						<input type="radio" name="level" value={levels[key].name}></input>{levels[key].name}
				</li>);
				levelsList.push(li);
			}
		}
		return <ul className="levels">{levelsList}</ul>;
	}
	render() {
		return (<div className="level_selector">
			<h2>Select a Level</h2>
			{ this.displayLevels() }
			<button>Start</button>
		</div>);	
	}
}

export default LevelSelector;