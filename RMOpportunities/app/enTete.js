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

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default class EnTete extends Component {
  render() {
      let pic1 = require('../img/logo_rmo.png');
      let pic2 = require('../img/menuButton.png');
      return (
        <View style={styles.enTete}>
            <Image source={pic2} style={styles.menu} />
            <Image source={pic1} style={styles.logo} />
        </View>
      );
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