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
      width: width*0.11,
      height: height*0.06,
    },
	touchableButton:{
	  marginTop: 5,
	  marginRight: 6,
      width: width*0.11,
      height: height*0.06,
	  backgroundColor: '#F2F2F2',
	}
});

