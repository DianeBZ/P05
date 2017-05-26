import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableHighlight, BackAndroid} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import OfferInformation from './OfferInformation';

export default class Offers extends Component {

  render() {
      BackAndroid.addEventListener('Back',this.onBackAndroid);
    return(
		<View style={{backgroundColor:"#F2F2F2", flex:1}}>
			<View style={{height:height*0.08}}/>
			<View style={styles.titre}>
				<Text style={styles.textTitre}> Toutes catégories </Text>
			</View>
			<View style = {styles.tableau}>
				<TouchableHighlight underlayColor='#A4D04A' onPress={this.onPressOffreDetaillee} style={styles.button}>
					<View>
						<Text style={styles.buttonText}>Benzoate de sodium</Text>
						<Text style={styles.buttonText}>001-42-5</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.button}>
					<Text style={styles.buttonText}>1,4-butanediol</Text>
					<Text style={styles.buttonText}>110-64-4</Text>				
				</View>
			</View>
		</View>
  );
 }
 // function used to call 'OfferInformation' page
onPressOffreDetaillee = () => {
	  BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
		  navigator.push({
			name: 'OfferInformation',
			component: OfferInformation,
		  })
		}
  };
  
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
}


const styles = StyleSheet.create({
	titre:{
		height: width*0.15,
		width: width,
		backgroundColor:'#A4D04A',
		justifyContent:'center',
	},
	textTitre:{
		color: "white",
		textAlign: "center",
		fontSize: 25,
	},
	tableau:{
		marginTop: width*0.1,
		alignItems : 'center',
		justifyContent:'center',
	},
	button:{
		height: width*0.15,
		width: width *0.8,
		borderRadius:5,
		borderWidth: 0.5,
		borderColor:'#A4D04A',
		justifyContent:'center',
	  },
   buttonTextTTCategorie:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
  },
  buttonText:{
      textAlign: "center",
      fontSize: 20,
  },
});