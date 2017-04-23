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
  DeviceEventEmitter,
} from 'react-native';

import Trad from './traduction';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Connexion extends Component {
  constructor(props){
	  super(props);
  }

  _onPressButton= () => {
	connection=1;
	DeviceEventEmitter.emit('nvBar');
  // // emit the signal'nvBar' when the bouton is clicked.A listener in page1 will react
    const { navigator } = this.props;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      BackAndroid.removeEventListener('backToIndex', this.onBackAndroid);
      navigator.pop();
      return true;
    } else {
      return false;
    }
	}

  render() {
    BackAndroid.addEventListener('backToIndex', this.onBackAndroid);
	return (
      <View style={{flex:1}}>
          <View style={{height: height * 0.08}}/>
          <View style={styles.window}>
            <Text style={styles.titre}>
                {Trad[lang].connect}
            </Text>
            <View style={styles.mainWindow}>
                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].nom_mail} />
                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].mdp} />
                <Text style={{color:'grey', marginTop:20}}>
                    {Trad[lang].mdp_oublie}
                </Text>
                <TouchableHighlight onPress={this._onPressButton.bind(this)} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                    <Text style={styles.buttonText}>{Trad[lang].se_co}</Text>
                </TouchableHighlight>
                <Text style={{color:'grey', marginTop:20}}>{Trad[lang].ou}</Text>
                <TouchableHighlight onPress={this._onPressButton} style={[styles.button, {width: width *0.75, backgroundColor:'rgb(0,160,220)'}]} underlayColor="rgb(0,140,201)">
                    <Text style={styles.buttonText}>{Trad[lang].co_linkedin}</Text>
                </TouchableHighlight>
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
       width: width,
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
       height: height* 0.06,
       width: width*0.8,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 20,
       color: 'grey',
       borderRadius:3,
   },
    button:{
        height: height*0.05,
        marginTop: 20,
        borderRadius:5,
        justifyContent: 'center',
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }
});

module.exports = Connexion;
