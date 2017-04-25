import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Connexion from './connexion';
import OffreDetaillee from './offre_detaillee';

export default class Offres extends Component {

  render() {
    return(
		<View>
			<View style={{height:height*0.08}}/>
			<View style={styles.titre}>
				<Text style={styles.textTitre}> Toutes catégories </Text>
			</View>
			<View style = {styles.tableau}>
				<TouchableHighlight onPress={this.onPressOffreDetaillee} style={styles.button}>
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
onPressOffreDetaillee = () => {
	  BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
		  navigator.push({
			name: 'OffreDetaillee',
			component: OffreDetaillee,
		  })
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