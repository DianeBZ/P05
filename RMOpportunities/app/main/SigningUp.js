import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  BackAndroid,
  Dimensions,
} from 'react-native';
import Translation from './Translation';
import SigningUpTwoSteps from './SigningUpTwoSteps';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// this page is used to let user to sign up by his Linkedin account or directly
export default class SigningUp extends Component {
  // this function will be called when pressing the button sign up with Linkedin
  _onPressBouton(){
    console.log('press Linkedin');
  }

  render() {
    BackAndroid.addEventListener('backToIndex', this.onBackAndroid);
    return (
      <View style={styles.container1}>
        <View style={{height: height * 0.08}}/>
        <Text style={styles.titre}>
            {Translation[lang].inscript}
        </Text>
        <View style={styles.subContainer}>
          <View style={styles.sContainerPre}>
            <Text style={styles.presentation}>
                {Translation[lang].text_ins}
            </Text>
          </View>
          <View style={styles.sContainerBoutons}>
            <TouchableHighlight style={[styles.button, {width: width *0.85, backgroundColor:'rgb(0,160,220)'}]} onPress={this._onPressBouton} underlayColor="rgb(0,140,201)">
              <Text style={styles.buttonText}>
                  {Translation[lang].ins_linkedin}
              </Text>
            </TouchableHighlight>
            <Text style={{color:'grey', marginTop:20}}>
                {Translation[lang].ou}
            </Text>
            <TouchableHighlight style={[styles.button, {width: width *0.85, backgroundColor:'#A4D04A'}]} onPress={this.onPressInscription} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>
                  {Translation[lang].ins2etapes}
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
// this function will be called when pressing 'Sign Up in 2 Steps' and the current page will be 'SigningUpTwoSteps'.

  onPressInscription = () => {
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'SigningUpTwoSteps',
				component: SigningUpTwoSteps,
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
    justifyContent: 'center',
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
