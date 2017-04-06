import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';
import EnTete from './enTete';
import accueil from './page1';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class CreerAnnonceFin extends Component {

  render() {
	return(
		<View>
			<EnTete/>
			<View style={styles.corps}>
				<Text style={styles.merci}>Merci !</Text>
				<Image source={require('../img/merci.png')} style={styles.merciImage}/>
				<Text style={styles.merciTexte}>L&#39;annonce a bien été créée, elle sera contrôlée par notre équipe dans les plus brefs délais</Text>
				<TouchableHighlight onPress={this.onPressAccueil} style={styles.button} underlayColor="rgb(138,183,46)">
					<Text style={styles.buttonText}>Accueil </Text>
				</TouchableHighlight>
			</View>
		</View>
	);
  }
  onPressAccueil = () => {
    BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Accueil',
        component: accueil,
      })
    }
  };
}

const styles = StyleSheet.create({
	corps:{
		alignItems:'center',
		justifyContent: 'center',
		
	},
	merci:{
		fontSize:40,
		textAlign:'center',
		marginTop : width*0.19,
	},
	merciImage:{
		height: width*0.4,
		width: width *0.4,
		marginTop : width*0.15,
	},
	merciTexte:{
		marginTop : width*0.15,
		margin:width*0.05,
		fontSize:18,
	},
	button:{
		marginTop : width*0.10,
		height: width*0.09,
		width: width *0.5,
		borderRadius:5,
		backgroundColor:'#A4D04A',
		justifyContent:'center',
	},
	buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
	},
});