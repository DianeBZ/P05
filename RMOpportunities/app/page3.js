import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  BackAndroid,
  Dimensions,
} from 'react-native';
import Trad from './traduction';
import Inscription from './inscription';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class inscription extends Component {

  _onPressBouton(){
    console.log('press Linkedin');
  }

  render() {
    BackAndroid.addEventListener('backToIndex', this.onBackAndroid);
    return (
      <View style={styles.container1}>
        <View style={{height: height * 0.08}}/>
        <Text style={styles.titre}>
            {Trad[lang].inscript}
        </Text>
        <View style={styles.subContainer}>
          <View style={styles.sContainerPre}>
            <Text style={styles.presentation}>
                {Trad[lang].text_ins}
            </Text>
          </View>
          <View style={styles.sContainerBoutons}>
            <TouchableHighlight style={[styles.button, {width: width *0.85, backgroundColor:'rgb(0,160,220)'}]} onPress={this._onPressBouton} underlayColor="rgb(0,140,201)">
              <Text style={styles.buttonText}>
                  {Trad[lang].ins_linkedin}
              </Text>
            </TouchableHighlight>
            <Text style={{color:'grey', marginTop:20}}>
                {Trad[lang].ou}
            </Text>
            <TouchableHighlight style={[styles.button, {width: width *0.85, backgroundColor:'#A4D04A'}]} onPress={this.onPressInscription} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>
                  {Trad[lang].ins3etapes}
              </Text>
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
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  sContainerPre:{
    backgroundColor:'#A4D04A',
    height: height*0.16,
  },
  sContainerBoutons:{
    marginTop: height*0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
   titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 15
   },
  presentation: {
    marginTop: 20,
    textAlign: 'center',
    color:"black",
    fontSize: 20,
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
