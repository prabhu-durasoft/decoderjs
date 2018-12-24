import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ColorSelector  extends Component {

	
	getColorsOptions() {
		let { availableColors } = this.props ;
		let colorsList = [];
		if(availableColors) {
			for(let key of Object.getOwnPropertySymbols(availableColors)) {
				let option = (<MenuItem key={availableColors[key].id}>
						<span className="colorSelectorBox" style={{backgroundColor: `${availableColors[key].color}`}}>&nbsp;</span>
					</MenuItem>);
				colorsList.push(option);
			}
		}
		return colorsList;
	}

	render() {
		return (<div className="colorSelectorDropdown">
			<DropdownButton id="dropdown"
				title="Select">
				{this.getColorsOptions()}
			</DropdownButton>
		</div>);
	}

}

export default ColorSelector;