import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableHighlight, BackAndroid} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Offers from './Offers';

export default class OffersCategory extends Component {
  render() {
      BackAndroid.addEventListener('Back',this.onBackAndroid);
    return(
		<View style={{backgroundColor:"#F2F2F2", flex:1}}>
			<View style={{height:height*0.08}}/>
			<View style = {styles.tableau}>
				<TouchableHighlight onPress={this.onPressTTCategories} style={[styles.button, { backgroundColor:'#A4D04A', borderTopRightRadius:5, borderTopLeftRadius:5}]} underlayColor="rgb(138,183,46)" >
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
				<View style={[styles.button, {borderBottomWidth:1, borderBottomRightRadius:5, borderBottomLeftRadius:5}]}>
					<Text style={styles.buttonText}>Acides aminés</Text>
				</View>
			</View>
		</View>
	);
  }
  // function used to call 'Offers' page
  onPressTTCategories = () => {
	  BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
		  navigator.push({
			name: 'Offers',
			component: Offers,
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
	tableau:{
		marginTop: height*0.04,
		alignItems : 'center',
		justifyContent:'center',
	},
	button:{
    height: height*0.07,
    width: width *0.9,
	borderWidth: 0.5,
    borderLeftWidth:1,
    borderRightWidth:1,
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
