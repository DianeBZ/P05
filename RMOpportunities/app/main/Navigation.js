//Basic file, we start from here. But in this file,
//we just create 1 navigator. The default page of the
//navigator is 'HomePage'(import HomePage from './HomePage';)
//It means that when we run our app, it will start from 'HomePage'.
//The navigator contains a navigationBar that will be rendered on every page called by the navigator
import {
   View,
   Navigator,
   Image,
   StyleSheet,
   Dimensions,
   TouchableHighlight,
   DeviceEventEmitter,
   BackAndroid,
} from 'react-native';
import React from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import HomePage from './HomePage';
import LogOutButton from './LogOutButton';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

global.connection = 0;//this is a global value which determines if the state is connected or not(0:not connected,1:connected).
global.lang = 'fr';//this is a global value which determines the language chosen('fr':french, 'en':english).

// In generation, you shouldn't change the contents which are under this comment.
export default class Navigation extends React.Component {
   componentWillUnmount(){
	   DeviceEventEmitter.remove();
   }// delete  DeviceEventEmitter

   componentDidMount(){
	   DeviceEventEmitter.addListener('nvBar',this.update);
   }// add a event listener which will execute this.update() function in order to
    // update the look of the page when receiving the signal'nvBar'.

   closeDrawer = () => {
       BackAndroid.removeEventListener('closeDrawer',this.closeDrawer);
      this._drawer.close()
   };

   openDrawer = () => {
       BackAndroid.addEventListener('closeDrawer', this.closeDrawer);
      this._drawer.open()
   };

   render() {
      let pic1 = require('../img/logo_rmo.png');
      let pic2 = require('../img/menuButton.png');
      let pic3 = require('../img/client.png')
      let defaultName = 'HomePage';
      let defaultComponent = HomePage;

      const drawerStyles = {
         drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
         main: {paddingLeft: 3},
      }

      return(
         <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<Menu closeDrawer={this.closeDrawer} navigator = {this}/>}
            tapToClose={true}

            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
               main: { opacity:(2-ratio)/2 }
            })}
         >
			{(() => {
				if (connection == 1)
					return (
						<Navigator
						   ref={"navigator"}
						   initialRoute = {{name: defaultName, component: defaultComponent}}
						   configureScene = {(route) => {
							  return Navigator.SceneConfigs.FadeAndroid;
						   }}
						   renderScene = {(route, navigator) =>{
							  let Component = route.component;
							  return <Component {...route.params} navigator = {navigator} />
						   }}

						   navigationBar={ <Navigator.NavigationBar routeMapper={{
							  LeftButton: (route, navigator, index, navState) => { return (
								 <TouchableHighlight underlayColor="#F2F2F2" onPress={()=>this.openDrawer()}>
									<Image source={pic2} style={styles.menu}/>
								 </TouchableHighlight>
							  ); },
							  RightButton: (route, navigator, index, navState) => { return (<LogOutButton/>);},
							  Title: (route, navigator, index, navState) => { return (  <TouchableHighlight underlayColor="#F2F2F2" onPress={()=>this.goToHomePage()}>
							  <Image source={pic1} style={styles.title}/>
						   </TouchableHighlight>); },
						   }}
						   style={{backgroundColor: '#F2F2F2', borderBottomWidth: 1, borderBottomColor: "#000000",width: width, height: height * 0.08,}}
						   />}
						/>
					);
				else
					return (
						<Navigator
						   ref={"navigator"}
						   initialRoute = {{name: defaultName, component: defaultComponent}}
						   configureScene = {(route) => {
							  return Navigator.SceneConfigs.FadeAndroid;
						   }}
						   renderScene = {(route, navigator) =>{
							  let Component = route.component;
							  return <Component {...route.params} navigator = {navigator} />
						   }}

						   navigationBar={ <Navigator.NavigationBar routeMapper={{
							  LeftButton: (route, navigator, index, navState) => { return (
								 <TouchableHighlight underlayColor="#F2F2F2" onPress={()=>this.openDrawer()}>
									<Image source={pic2} style={styles.menu}/>
								 </TouchableHighlight>
							  ); },
							  RightButton: (route, navigator, index, navState) => { return (<View/>);},
							  Title: (route, navigator, index, navState) => { return (  <TouchableHighlight underlayColor="#F2F2F2" onPress={()=>this.goToHomePage()}>
							  <Image source={pic1} style={styles.title}/>
						   </TouchableHighlight>); },
						   }}
						   style={{backgroundColor: '#F2F2F2', borderBottomWidth: 1, borderBottomColor: "#000000",width: width, height: height * 0.08,}}
						   />}
						/>
					);
			})()}
      </Drawer>
   );
}

	update = () => {
		this.forceUpdate();
	}

	goToHomePage = () => {
	   if (this.refs.navigator) {
		  this.refs.navigator.popToTop();
	   }
	};
}

const styles = StyleSheet.create({
   title: {
      marginTop: 17,
      width: width*0.6,
      height: height*0.05,

   },
   menu:{
      marginLeft:15,
	  marginTop:15,
      width: width*0.065,
      height: height*0.04,
   }
});
