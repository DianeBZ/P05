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
  Navigator,
  BackAndroid,
} from 'react-native';

import Empty from './empty';
import EnTete from './enTete';

function onButtonPress(){
        return(
            <Empty/>
        );
}

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default class Connexion extends Component {
  constructor(props){
	  super(props);
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
                <Button onPress={() => onButtonPress()} title="Se connecter" color="#A4D04A"/>
                <Button onPress={onButtonPress} title="Se connecter avec Linkedin" color="#008CC9"/>
            </View>
          </View>
      </View>
    );
  }
  
  onBackAndroid = () => {
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
   }       
});

module.exports = Connexion;