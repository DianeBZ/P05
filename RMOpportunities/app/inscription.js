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
  TouchableHighlight
} from 'react-native';

import EnTete from './enTete'

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

export default class Inscription extends Component {
    render(){
        return(
        <View style={{flex:1}}>
            <EnTete/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    Inscrivez-vous
                </Text>
                <View style={styles.mainWindow}>
                </View>
            </View>
        </View>    
        );
    }
}

const styles = StyleSheet.create({
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
});