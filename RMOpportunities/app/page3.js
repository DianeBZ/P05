import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
 import EnTete from './enTete';
 
export default class inscription extends Component {
  _onPressBouton(){
    console.log('press Linkedin');
  }
  render() {
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
            <TouchableOpacity style={styles.boutonDemarrage}>
              <Text style={styles.textLinkedin}>
              Démarrer l{'\''}inscription en 3 étapes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
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