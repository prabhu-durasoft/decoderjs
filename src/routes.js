import React, { Component } from 'react';
import LevelSelectorContainer from './containers/levelSelectorContainer';
import AvailableColorsDisplayContainer from './containers/availableColorsDisplayContainer';
import GamePanelContainer from './containers/gamePanelContainer';
import { BrowserRouter, Route } from 'react-router-dom';


class MainRoutes extends Component {

	render() {
		return ( 
			<BrowserRouter>   
					<div>
						<Route exact path="/" render={props => (
							<div>
								 <AvailableColorsDisplayContainer/>
								 <hr/>
								 <LevelSelectorContainer/> 
							</div>
						)}/>
						<Route exact path="/game" component={GamePanelContainer}/>
					</div>
			</BrowserRouter>	
		);	
	}

}

export default MainRoutes;
