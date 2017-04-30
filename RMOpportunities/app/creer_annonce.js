import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight,BackAndroid,ToastAndroid,Navigator} from 'react-native';
import connexion_produit from './ajouter_produit_connexion';
import connexion_demande from './ajouter_demande_connexion';
import ajouter_offre from './ajouterOffre';
import ajouter_demande from './deposer_une_annonce';
import Trad from './traduction'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class CreerAnnonce extends Component {

  render() {
      BackAndroid.addEventListener('Back',this.onBackAndroid);
        return(
        <View>
            <View style = {{height : height*0.08}}/>
            <View style={styles.intro}>
              <Text style={styles.titre}>{Trad[lang].creer_ann}</Text>
            </View>
            <View>
              <Text style={styles.introCommencer}>{Trad[lang].commencer}</Text>
            </View>
            <View style={styles.depotAnnonce}>
              <Text style={styles.presentation}>{Trad[lang].texte_depot} </Text>
            </View>
            <View style={styles.contH}>
              <View style={styles.contV}>
                <Image source={require('../img/ajouterDemande.png')} style={styles.ajouterImage}/>
                <TouchableHighlight onPress={this.onButtonPressDemande} style={styles.button} underlayColor="rgb(138,183,46)">
                    <Text style={styles.buttonText}>{Trad[lang].aj_demande}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.contV}>
                <Image source={require('../img/ajouterProduit.png')} style={styles.ajouterImage}/>
                <TouchableHighlight onPress={this.onButtonPressProduit} style={styles.button} underlayColor="rgb(138,183,46)">
                    <Text style={styles.buttonText}>{Trad[lang].aj_offre} </Text>
                </TouchableHighlight>
                </View>
            </View>
        </View>
    );
  }
	onButtonPressDemande = () => {
	 BackAndroid.removeEventListener('Exit',this.onBackAndroid);
	const { navigator } = this.props;
	if (navigator) {
        if (connection===0){
            navigator.push({
                name: 'Connexion pour demande',
                component: connexion_demande,
            })
        }else if (connection===1){
            navigator.push({
                name: 'Deposer demande',
                component: ajouter_demande,
            })
        }
	}
  };
  onButtonPressProduit = () => {
     BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
        if (connection===0){
            navigator.push({
                name: 'Connexion pour offre',
                component: connexion_produit,
            })
        }else if (connection===1){
            navigator.push({
                name: 'Deposer offre',
                component: ajouter_offre,
            })
        }
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
  intro:{
    backgroundColor: '#F2F2F2'
  },
  titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
   },
  introCommencer:{
    fontSize:20,
    textAlign:'center',
    margin: height*0.03,
  },
  depotAnnonce:{
    backgroundColor: '#A4D04A',
  },
  presentation: {
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
    color:"black",
    fontSize: 18,
  },
  contH: {
    alignItems:'center',
    flexDirection : 'row',
    justifyContent: 'center',

  },
  contV: {
    flexDirection : 'column',
    margin:width*0.07,
  },
  ajouterImage:{
    width: 70,
    height: 80,
    margin:width*0.05,
  },
  button:{
      height: height*0.1,
      width: width *0.3,
      justifyContent: 'center',
      backgroundColor:'#A4D04A',
      borderRadius:5,
  },
  buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 18,
  },
});
