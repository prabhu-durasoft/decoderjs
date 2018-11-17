import React, { Component } from 'react';

class AvailableColorsDisplay  extends Component {
	componentDidMount() {
		let result = this.props.loadAvailableColors();
	}
	
	getColorsList() {
		let { colors } = this.props ;
		let colorsList = [];
		if(colors) {
			for(let key of Object.getOwnPropertySymbols(colors)) {
				colorsList.push(<p key={colors[key].id}>{colors[key].color}</p>);
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