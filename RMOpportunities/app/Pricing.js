import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, BackAndroid, Navigator,} from 'react-native';

import Translation from './Translation';
import Contact from './Contact';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Pricing extends Component{
 render(){
		 BackAndroid.addEventListener('Back',this.onBackAndroid);
		 return(
				<ScrollView style={styles.scrollView}>
					<Text style={styles.titlePricing}>{Translation[lang].pricing}</Text>
					{(() => {
						if(lang=='fr')
							return(
									<Image source={require('../img/Pricing_fr.jpg')} style={styles.imagePricing} />
								  );
						else
							return(
									<Image source={require('../img/Pricing_en.jpg')} style={styles.imagePricing} />
								  );
					})()}
					<View style={styles.view}>
						<TouchableHighlight onPress={this._onPressContact} style={{width: width*0.5,backgroundColor:'#A4D04A', justifyContent:'center', borderRadius:5,}} underlayColor="rgb(138,183,46)">
							<Text style={styles.buttonText}>{Translation[lang].contactUs}</Text>
						</TouchableHighlight>
					</View>
					
					<Text />
					<Text />
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
 
  _onPressContact = () => {
	BackAndroid.removeEventListener('Back', this.onBackAndroid);
	const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Contact',
        component: Contact,
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
	view:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        margin: 10,
	},
	imagePricing:{
		height:1230,
		width:width,
	},
	buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
		alignItems: 'center',
		alignSelf: 'center',
    },
	titlePricing:{
		fontSize:32,
		marginTop:width*0.2,
		marginBottom:width*0.05,
		textAlign:'center',
       color: '#000000',
	},
});