import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  Dimensions, 
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  BackAndroid,
} from 'react-native';

import EnTete from './enTete';

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default class Connexion extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  connexion: true
	  }
  }
  
  _onPressButton() {
	  Alert.alert("You tapped the button!"); 
	}
	
  render() {
    BackAndroid.addEventListener('backToIndex', this.onBackAndroid);
	return (
      <View style={{flex:1}}>
          <EnTete/>
          <View style={styles.window}>
            <Text style={styles.titre}>
                Connectez-vous
            </Text>
            <View style={styles.mainWindow}>
                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Nom ou e-mail entreprise" />
                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Mot de passe" />
                <Text style={{color:'grey', marginTop:20}}>
                    Mot de passe oublié?
                </Text>
                <TouchableHighlight onPress={this._onPressButton} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                    <Text style={styles.buttonText}>Se connecter </Text>
                </TouchableHighlight>
                <Text style={{color:'grey', marginTop:20}}> OU </Text>
                <TouchableHighlight onPress={this._onPressButton} style={[styles.button, {width: width *0.65, backgroundColor:'rgb(0,160,220)'}]} underlayColor="rgb(0,140,201)">
                    <Text style={styles.buttonText}>Se connecter avec Linkedin </Text>
                </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
  
  onBackAndroid = () => {
		// this.props.getConnexion(true);
		// Uncomment the above line will change the value of 'connexion'
		// (Return 1 value to page 1)
		const { navigator } = this.props;
		if (navigator && navigator.getCurrentRoutes().length > 1) {
			BackAndroid.removeEventListener('backToIndex', this.onBackAndroid);
			navigator.pop();
			return true;
		} else {
			return false;
		}
  };
}

const styles = StyleSheet.create({
  // bleu : '#485FD1'
   window:{
       width: width,
       height: height*0.93,
       backgroundColor: '#F2F2F2',
       alignItems: 'center',
   },
   mainWindow:{
       width: width*0.9,
       height: height,
       backgroundColor: "#FFFFFF",
       alignItems: 'center',
   },
   titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
   },
   textToFill:{
       width: width*0.8,
       borderWidth: 1,
       borderColor: "#000000", 
       marginTop: 20,
       color: 'grey',
   },
    button:{
        height: width*0.08,
        marginTop: 20,
        justifyContent: 'center',
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }   
});

module.exports = Connexion;