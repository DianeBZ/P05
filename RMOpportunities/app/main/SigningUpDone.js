import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
    Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Translation from './Translation';

export default class SigningUpDone extends Component {
  render() 
  {
    return (
      <View style={styles.container1}>
		<View style={{height:height*0.08}}/>
        <Text style={styles.titre}>
			{Translation[lang].inscription_réussie}
		</Text>
		<View style={styles.subContainer}>
			<Text style={styles.bienvenue}>
				{Translation[lang].bienvenue_RMO}
			</Text>
			<View style={styles.sContainerPre}>
				<Text style={styles.presentation}>
					{Translation[lang].achetez_vendez}
				</Text>
			</View>
			<View style={styles.sContainerBouton}>
            <TouchableHighlight style={[styles.button, {width: width *0.25, backgroundColor:'#A4D04A'}]} onPress={this._onPressBouton} underlayColor="rgb(138,183,46)">
              <Text style={styles.buttonText}>
				  {Translation[lang].accueil}
              </Text>
            </TouchableHighlight>
          </View>
		</View>
      </View>
    );
  }
  //Navigation for this page
  _onPressBouton = () => {
      const { navigator } = this.props;
        if (navigator) {
            navigator.popToTop(); // Pop to the first scene in the stack, unmounting every other scene
        }
  }
}

const styles = StyleSheet.create({
	
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 15
   },
  subContainer:{
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  sContainerPre:{
    backgroundColor:'#A4D04A',
    height: height*0.16,
    justifyContent:'center',
  },
  sContainerBouton:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  bienvenue: {
	color : '#A4D04A',
	fontWeight:'bold',
	textAlign:'center',
	fontSize: 25,
	margin:10,
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
        fontSize: 18,
    }
});