import React, { Component } from 'react';
import ColorSelector from './colorSelector';

class GamePanel  extends Component {

	render() {
		return (<div>
			Game starts now
			<div style={{display: "flex", justifyContent: "center"}}>	
			<ColorSelector availableColors={this.props.availableColors}/>
			<ColorSelector availableColors={this.props.availableColors}/>
			<ColorSelector availableColors={this.props.availableColors}/>
			<ColorSelector availableColors={this.props.availableColors}/>
			<ColorSelector availableColors={this.props.availableColors}/>	
			</div>
		</div>);	
	}

}

export default GamePanel;