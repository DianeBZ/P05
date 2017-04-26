import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var p = "!";

import Connexion from './connexion';
import inscription from './page3';
import Trad from './traduction';

export default class AjouterProduitConnexion extends Component {

  render() {
    return(
      <View>
        <View style={{height:height*0.08}}/>
        <View style={styles.intro}>
          <Text style={styles.titre}>{Trad[lang].aj_offre}</Text>
        </View>

        <View style={styles.corps}>
          <Text style={styles.texte}>{Trad[lang].pls_co}</Text>
          <TouchableHighlight onPress={this.onPressConnexion} style={styles.button} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>{Trad[lang].se_co}</Text>
          </TouchableHighlight>
          <Text style={styles.textePasCompte}>{Trad[lang].pas_compte}</Text>
          <Text style={styles.texteInscrivez}>{Trad[lang].inscript + p}</Text>
          <TouchableHighlight onPress={this.onPressInscription} style={styles.buttonInscription} underlayColor="rgb(44,67,177)">
              <Text style={styles.buttonText}>{Trad[lang].inscription}</Text>
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
  },
  titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
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
    backgroundColor:'rgb(71,95,209)',
    justifyContent:'center',
  },
  buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
  },
});
