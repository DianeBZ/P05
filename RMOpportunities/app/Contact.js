import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, BackAndroid, Navigator,Linking} from 'react-native';

import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var mailTo = 'mailto:contact@rmopportunities.eu';
var LinkLinkedIn = 'https://linkedin.com/company/rmopportunities';
var LinkFacebook = 'https://facebook.com/rmopportunities';
var LinkTwitter = 'https://twitter.com/rmopportunities';
var telePhone = 'tel:+33764087304';

export default class Contact extends Component{
 render(){
		 BackAndroid.addEventListener('Back',this.onBackAndroid);
		 return(
				<View style={styles.container}>
					<View style={styles.containerButton}>
						<TouchableHighlight onPress={this._onPressMail}>
							<Image source={require('../img/mail.png')} style={styles.imageButton} />
						</TouchableHighlight>
						
						<TouchableHighlight onPress={this._onPressTwitter}>
							<Image source={require('../img/twitter.png')} style={styles.imageButton} />
						</TouchableHighlight>
						
						<TouchableHighlight onPress={this._onPressFacebook}>
							<Image source={require('../img/facebook.png')} style={styles.imageButton} />
						</TouchableHighlight>
						
						<TouchableHighlight onPress={this._onPressLinkedin}>
							<Image source={require('../img/linkedin.png')} style={styles.imageButton} />
						</TouchableHighlight>
					</View>
					
					<TouchableHighlight onPress={this._onPressTel}>
						<Text>+33 (0) 7 64 08 73 04</Text>
					</TouchableHighlight>
				</View>
				);
		}
		
 onBackAndroid = () => {
	const { navigator } = this.props;
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		BackAndroid.removeEventListener('Back', this.onBackAndroid);
		navigator.pop();
		return true;
	} else {
		return false;
	}
 };
 
 _onPressMail = () => {
	Linking.openURL(mailTo).catch(err => console.error('First of all, please configure your mail client', err));
 };
 
  _onPressTwitter = () => {
	Linking.openURL(LinkTwitter).catch(err => console.error('An error occurred', err));
 };
 
  _onPressFacebook = () => {
	Linking.openURL(LinkFacebook).catch(err => console.error('An error occurred', err));
 };
 
  _onPressLinkedin = () => {
	Linking.openURL(LinkLinkedIn).catch(err => console.error('An error occurred', err));
 };
 
  _onPressTel = () => {
	Linking.openURL(telePhone).catch(err => console.error('An error occurred', err));
 };
}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
	},
	containerButton: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			height: 40,
			width:width,
			alignSelf: 'center',
	},
	imageButton:{
			height:40,
			width:40,
    },
});