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
} from 'react-native';
import EnTeteClient from './enTeteClient';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class EnTete extends Component {
  static props={
    deconnexionCallbackEntete:null,
  }
  render() {
      let pic1 = require('../img/logo_rmo.png');
      let pic2 = require('../img/menuButton.png');
      let pic3=require('../img/client.png')
      return (
        <View style={styles.enTete}>
            <Image source={pic2} style={styles.menu} />
            <Image source={pic1} style={styles.logo} />
            <EnTeteClient deconnexionCallback={(data)=>{this.deconnexionEntete(data)}}/>
        </View>
      );
    }
    deconnexionEntete(data)
    {
      if(this.props.deconnexionEntete==null)
      {
        return;
      }
      this.props.deconnexionEntete(data);
    }
 }

 const styles = StyleSheet.create({
     enTete:{
         width: width,
         height: height * 0.08,
         flexDirection : 'row',
         backgroundColor: '#F2F2F2',
     },
     logo: {
        width: 220,
        height: 35,
        margin: 10,
     },
     menu:{
        width: 35,
        height: 35,
        margin: 10,
     },

 });

 module.exports = EnTete;
