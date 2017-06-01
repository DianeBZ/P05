import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Picker,
  Alert,
  DeviceEventEmitter,
} from 'react-native';

import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let pic=require('../img/deconnexion.png');
//Button appearing in the navigationBar when logged in
export default class LogOutButton extends Component {

  render() {
      return (
				<View>
					<TouchableHighlight underlayColor="#F2F2F2" style={styles.touchableButton}onPress={this.onPressDeconnexion}>
						<Image source={pic} style={styles.icone}/>
					</TouchableHighlight>
				</View>
      );
    }

	// a pop up appears when the user wants to log out from his account asking him if he is sure
    onPressDeconnexion = () => {
		Alert.alert(
		Translation[lang].deconnexion,
			Translation[lang].deconnexion_text,
			[
				{text:Translation[lang].oui,onPress: () => {connection=0;DeviceEventEmitter.emit('nvBar');}},
				{text:Translation[lang].non,onPress: () => {}},
			],
			)
  	};
 }

  const styles = StyleSheet.create({
    viewContainer:{
      width:width*0.15,
	  height:height*0.08,
    },
    picker:{
      width:width*0.07,
    },
	icone:{
      width: width*0.08,
      height: height*0.045,
    },
	touchableButton:{
	  marginTop: 9,
	  marginRight: 5,
      width: width*0.11,
      height: height*0.06,
	  
	}
});
