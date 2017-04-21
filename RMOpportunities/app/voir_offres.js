import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';
import EnTete from './enTete';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Connexion from './connexion';
import Offres from './offres';


export default class VoirOffres extends Component {

  render() {
    return(
		<View>
			<EnTete/>
			<View style = {styles.tableau}>
				<TouchableHighlight onPress={this.onPressTTCategories} style={[styles.button, { backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)" >
					<Text style={styles.buttonTextTTCategorie}>Toutes catégories </Text>
				</TouchableHighlight>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Produits pour la cosmétique, les arômes et parfums</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Slovants</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Slovants regénérés </Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Réactifs</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Catalyseurs</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Spécialités chimiques</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Intermédiaires simples</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Acides</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Bases</Text>
				</View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Acides aminés</Text>
				</View>
			</View>
		</View>
	);
  }
  onPressTTCategories = () => {
	  BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
		  navigator.push({
			name: 'Offres',
			component: Offres,
		  })
		}
  };
}



const styles = StyleSheet.create({
	tableau:{
		marginTop: width*0.1,
		alignItems : 'center',
		justifyContent:'center',
	},
	button:{
    height: width*0.11,
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
