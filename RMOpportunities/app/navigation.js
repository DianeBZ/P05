//Basic file, we start from here. But in this file,
//we just create 1 navigator. The default page of the
//navigator is 'Index'(import Index from './app/page1';)
//It means that when we run our app, it will strat from
//'Index'.

import {
    View,
    Navigator,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

// You change './app/page1' to look the pages that you wrote.
// For example, you want to look page 10, so you change the under
// string from './app/page1' to './app/page10'
import Index from './page1';
import React from 'react';

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

// In generation, you shouldn't change the contents which are under this comment.
export default class Navigation extends React.Component {
    render() {
        let pic1 = require('../img/logo_rmo.png');
        let pic2 = require('../img/menuButton.png');
        let pic3 = require('../img/client.png')
        let defaultName = 'Index';
		let defaultComponent = Index;
		return(
			<Navigator
				initialRoute = {{name: defaultName, component: defaultComponent}}
				configureScene = {(route) => {
					return Navigator.SceneConfigs.FloatFromRight;
				}}
				renderScene = {(route, navigator) =>{
					let Component = route.component;
					return <Component {...route.params} navigator = {navigator} />
				}}
                navigationBar={ <Navigator.NavigationBar routeMapper={{ 
                LeftButton: (route, navigator, index, navState) => { return (<Image source={pic2} style={styles.menu}/>); }, 
                RightButton: (route, navigator, index, navState) => { return (<Image source={pic3} style={styles.icone}/>); }, 
                Title: (route, navigator, index, navState) => { return (<Image source={pic1} style={styles.title}/>); }, 
                }} 
                style={{backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: "#000000",width: width, height: height * 0.08,}}
                />}
			/>
        );
    }
}

const styles = StyleSheet.create({
     title: {
        width: 220,
        height: 35,
        margin: 10,
     },
     menu:{
        width: 35,
        height: 35,
        margin: 10,
     },
     icone:{
         width: 35,
        height: 35,
        margin: 10
     }
});