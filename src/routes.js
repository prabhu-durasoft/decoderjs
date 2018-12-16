import React, { Component } from 'react';
import LevelSelectorContainer from './containers/levelSelectorContainer';
import AvailableColorsDisplayContainer from './containers/availableColorsDisplayContainer';
import GamePanel from './components/gamePanel';
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
						<Route exact path="/game" component={GamePanel}/>
					</div>
			</BrowserRouter>	
		);	
	}

}

export default MainRoutes;
