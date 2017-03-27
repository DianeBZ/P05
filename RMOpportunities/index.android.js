import {AppRegistry} from 'react-native';
import {
    View,
    Navigator
} from 'react-native';
import Index from './app/page10'
import React from 'react';

export default class RMOpportunities extends React.Component {
    render() {
        let defaultName = 'Index';
		let defaultComponent = Index;
		return(
			<Navigator
				initialRoute = {{name: defaultName, component: defaultComponent}}
				configureScene = {(route) => {
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}}
				renderScene = {(route, navigator) =>{
					let Component = route.component;
					return <Component {...route.params} navigator = {navigator} />
				}} 
			/>
        );
    }
} 
	
AppRegistry.registerComponent('RMOpportunities', () => Index);