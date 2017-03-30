//Basic file, we start from here. But in this file,
//we just create 1 navigator. The default page of the
//navigator is 'Index'(import Index from './app/page1';)
//It means that when we run our app, it will strat from
//'Index'.

import {AppRegistry} from 'react-native';
import {
    View,
    Navigator
} from 'react-native';

// You change './app/page1' to look the pages that you wrote.
// For example, you want to look page 10, so you change the under
// string from './app/page1' to './app/page10'
import Index from './app/page10';
import React from 'react';

// In generation, you shouldn't change the contents which are under this comment.
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

AppRegistry.registerComponent('RMOpportunities', () => RMOpportunities);
