import React, { Component } from 'react';
import {
  AppRegistry,
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
import Trad from './traduction';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let pic=require('../img/deconnexion.png');

export default class EnTeteClient extends Component {

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
			'Deconnexion',
			'Voulez-vous vraiment deconnecter?',
			[
				{text:'Oui',onPress: () => {connection=0;DeviceEventEmitter.emit('nvBar');}},
				{text:'Non',onPress: () => {}},
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
	  marginRight: 10,
      width: width*0.11,
      height: height*0.06,
	  backgroundColor: '#F2F2F2',
	}
});

module.exports=EnTeteClient;
