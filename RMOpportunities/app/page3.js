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
          <View style={styles.sContainerSpace}/>
          <View style={styles.sContainerBontons}>
            <TouchableHighlight style={styles.boutonLinkedin} onPress={this._onPressBouton} underlayColor="rgb(0,140,201)">
              <Text style={styles.textLinkedin}>
                  {Trad[lang].ins_linkedin}
              </Text>
            </TouchableHighlight>
            <Text style={{color:'grey', marginTop:20}}>
                {Trad[lang].ou}
            </Text>
            <TouchableHighlight style={styles.boutonDemarrage} onPress={this.onPressInscription} underlayColor="rgb(138,183,46)">
              <Text style={styles.textLinkedin}>
                  {Trad[lang].ins3etapes}
              </Text>
            </TouchableHighlight>
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
    //margin:10,
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  sContainerPre:{
    backgroundColor:'#A4D04A',
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
   titre:{
       fontSize: 32,
       textAlign: 'center',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
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
    backgroundColor:'rgb(0,160,220)',
    justifyContent:'center',
  },

  textLinkedin:{
      textAlign:'center',
      color:'white',
      fontSize:20,
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
