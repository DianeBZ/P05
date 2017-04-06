import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';
import EnTete from './enTete';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Connexion from './connexion';
import inscription from './page3';

export default class AjouterDemandeConnexion extends Component {

  render() {
    return(
      <View>
        <EnTete/>
        <View style={styles.intro}>
          <Text style={styles.introTexte}>Ajouter une demande</Text>
        </View>

        <View style={styles.corps}>
          <Text style={styles.texte}>Veuillez vous connecter pour continuer</Text>
          <TouchableHighlight onPress={this.onPressConnexion} style={styles.button} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>Se connecter </Text>
          </TouchableHighlight>
          <Text style={styles.textePasCompte}> Pas de compte ? </Text>
          <Text style={styles.texteInscrivez}>  Inscrivez vous ! </Text>
          <TouchableHighlight onPress={this.onPressInscription} style={styles.buttonInscription} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>S&#39;inscrire </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  onPressConnexion = () => {
		// let _this = this;
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		// Create router and push page 'Connexion' into stack,
		// this will lead us to page 'Connexion'.
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Connexion',
				component: Connexion,
			})
		}
	};
  onPressInscription = () => {
    BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Inscription',
        component: inscription,
      })
    }
  };
}

const styles = StyleSheet.create({
  intro:{
    backgroundColor: '#F2F2F2',
    borderTopColor: '#000',
    borderTopWidth:1,

  },
  introTexte:{
    fontSize:25,
    textAlign:'center',
    margin: height*0.05,
  },
  corps:{
    alignItems:'center',
  },
  texte:{
    fontSize:20,
    textAlign:'center',
    marginTop: height*0.08,
    margin: height*0.05,
  },
  textePasCompte:{
    fontSize:20,
    textAlign:'center',
    marginTop: height*0.1,
  },
  texteInscrivez:{
    fontSize:20,
    textAlign:'center',
    margin: height*0.01,
    marginBottom: height*0.05,
  },
  button:{
    height: width*0.09,
    width: width *0.5,
    borderRadius:5,
    backgroundColor:'#A4D04A',
    justifyContent:'center',
  },
  buttonInscription:{
    height: width*0.09,
    width: width *0.5,
    borderRadius:5,
    backgroundColor:'#008CC9',
    justifyContent:'center',
  },
  buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
  },
});