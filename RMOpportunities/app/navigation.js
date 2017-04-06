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
   Dimensions,
   TouchableHighlight,
} from 'react-native';

// You change './app/page1' to look the pages that you wrote.
// For example, you want to look page 10, so you change the under
// string from './app/page1' to './app/page10'
import Drawer from 'react-native-drawer';
import ContenuMenu from './contenuMenu';
import React from 'react';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

// In generation, you shouldn't change the contents which are under this comment.
export default class Navigation extends React.Component {
   closeDrawer = () => {
      this._drawer.close()
   };

   openDrawer = () => {
      this._drawer.open()
   };
   render() {
      let pic1 = require('../img/logo_rmo.png');
      let pic2 = require('../img/menuButton.png');
      let pic3 = require('../img/client.png')
      let defaultName = 'Index';
      let defaultComponent = Index;

      const drawerStyles = {
         drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
         main: {paddingLeft: 3},
      }

      return(
         <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<ContenuMenu closeDrawer={this.closeDrawer} navigator = {this}/>}
            tapToClose={true}

            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
               main: { opacity:(2-ratio)/2 }
            })}
            >
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
                     <TouchableHighlight  onPress={()=>this.openDrawer()}>
                        <Image source={pic2} style={styles.menu}/>
                     </TouchableHighlight>
                  ); },
                  RightButton: (route, navigator, index, navState) => { return (<Image source={pic3} style={styles.icone}/>); },
                  Title: (route, navigator, index, navState) => { return (<Image source={pic1} style={styles.title}/>); },
               }}
               style={{backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: "#000000",width: width, height: height * 0.08,}}
               />}
               />
         </Drawer>
      );
   }
}

const styles = StyleSheet.create({
   title: {
      width: 220,
      height: 35,
      marginTop: 15,
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
