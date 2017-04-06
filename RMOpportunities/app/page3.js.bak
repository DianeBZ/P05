import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackAndroid,
} from 'react-native';
import EnTete from './enTete';
import Inscription from './inscription';
//var connexion = flase;

export default class inscription extends Component {
  /*
  constructor(props) {
	  super(props);
  }
  */

  _onPressBouton(){
    console.log('press Linkedin');
  }

  render() {
    BackAndroid.addEventListener('backToIndex', this.onBackAndroid);
    return (
      <View style={styles.container1}>
        <EnTete/>
        <Text style={styles.inscrire}>
          Inscrivez-vous
        </Text>
        <View style={styles.subContainer}>
          <View style={styles.sContainerPre}>
            <Text style={styles.presentation}>
              L{'\''}inscription de votre société
              sur RMOpportunities est
              simple,rapide et gratuite.
            </Text>
          </View>
          <View style={styles.sContainerSpace}/>
          <View style={styles.sContainerBontons}>
            <TouchableOpacity style={styles.boutonLinkedin} onPress={this._onPressBouton}>
              <Text style={styles.textLinkedin}>
              S{'\''}inscrire avec Linkedin
              </Text>
            </TouchableOpacity>
            <Text style={styles.textOu}>
            ou
            </Text>
            <TouchableOpacity style={styles.boutonDemarrage} onPress={this.onPressInscription}>
              <Text style={styles.textLinkedin}>
              Démarrer l{'\''}inscription en 3 étapes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onBackAndroid = () => {
    //this.props.getConnexion(connexion);
	const { navigator } = this.props;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      BackAndroid.removeEventListener('backToIndex', this.onBackAndroid);
      navigator.pop();
      return true;
    } else {
      return false;
    }
  };

  onPressInscription = () => {
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Inscription',
				component: Inscription,
			})
		}
	};
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  subContainer:{
    margin:10,
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  sContainerPre:{
    backgroundColor:'#D3E9A5',
    flex: 2,
  },
  sContainerSpace:{
    flex:1,
  },
  sContainerBontons:{
    flex:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inscrire: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  presentation: {
    marginTop:  50,
    textAlign: 'center',
    color:"black",
  },

  boutonLinkedin:{
    height:40,
    width:300,
    borderRadius:5,
    backgroundColor:'#008CC9',
    justifyContent:'center',
  },

  textLinkedin:{
      textAlign:'center',
      color:'white',
      fontSize:20,
    },
  textOu:{
    textAlign:"center",
    color:'black',
    fontSize:15,
    marginTop:20,
  },

  boutonDemarrage:{
    marginTop:20,
    height:40,
    width:300,
    borderRadius:5,
    backgroundColor:'#A4D04A',
    justifyContent:'center',
  },
});
