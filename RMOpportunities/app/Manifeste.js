import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, BackAndroid, Navigator,} from 'react-native';

import Translation from './Translation';
import SigningUp from './SigningUp';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Manifeste extends Component{
 render(){
		 BackAndroid.addEventListener('Back',this.onBackAndroid);
		 return(
				<ScrollView style={styles.scrollView}>
					<Text style={styles.titleManifeste}>{Translation[lang].manifeste}</Text>
					<Text style={styles.manifesteText}>{Translation[lang].manifesteText}</Text>
					<TouchableHighlight style={{marginTop:20, marginBottom:20}} onPress={this._onPressRegister} underlayColor='#F2F2F2'>
						<Text style={styles.manifesteRegister}>{Translation[lang].manifesteRegister}</Text>
					</TouchableHighlight>
				</ScrollView>
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
 
  _onPressRegister = () => {
	BackAndroid.removeEventListener('Back', this.onBackAndroid);
	const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'SigningUp',
        component: SigningUp,
      })
    }
 };
}

const styles = StyleSheet.create({
	scrollView:{
		height:height,
		width:width,
        backgroundColor:'#f2f2f2',
	},
	titleManifeste:{
		fontSize:32,
		marginTop:width*0.2,
		marginBottom:width*0.05,
		textAlign:'center',
        color:"#000000"
	},
	manifesteText:{
		textAlign:'center',
        color:"#000000"
	},
	manifesteRegister:{
		textAlign:'center',
		color: '#A4D04A',
        fontSize: 16,
	},
});