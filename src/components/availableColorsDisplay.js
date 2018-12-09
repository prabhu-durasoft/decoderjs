import React, { Component } from 'react';

class AvailableColorsDisplay  extends Component {

	componentDidMount() {
		this.props.loadAvailableColors();
	}
	
	getColorsList() {
		let { availableColors } = this.props ;
		let colorsList = [];
		if(availableColors) {
			for(let key of Object.getOwnPropertySymbols(availableColors)) {
				colorsList.push(<span className="colorBox" key={availableColors[key].id} style={{backgroundColor: `${availableColors[key].color}`}}>&nbsp;</span>);
			}
		}
		return colorsList;
	}

	render() {
		return (<div>
			<h3>Here&apos;s the list of available colors</h3>
			{ this.getColorsList() }
		</div>);	
	}

}

export default AvailableColorsDisplay;