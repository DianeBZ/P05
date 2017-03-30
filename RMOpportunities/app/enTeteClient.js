import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Picker,
  Alert,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let pic=require('../img/client.png');
var selected='key0';
var selectedKey='P05';

export default class EnTeteClient extends Component {

  static props={
    deconnexionCallback:null,
  }
  render() {
      return (
            <View style={styles.viewContainer}>
              <Picker
                mode={'dropdown'}
                style={styles.picker}
                selectedValue={"key0"}
								onValueChange={this.onValueChange.bind(this,'value')}>
                <Picker.Item label='P05' value="key0" />
                <Picker.Item label='Mon compte' value="key1" />
                <Picker.Item label='deconnexion' value="key2" />
              </Picker>
            </View>
      );
    }

    onValueChange = (key: string, value: string) => {
  		//selectedKey = key;
  		//selected = value;
  		//this.forceUpdate();
      if(value=="key1")
        {
          Alert.alert('Mon compte');
        }
      else
      {
        //Alert.alert('deconnexion');
        if(this.props.deconnexionCallback==null)return;
        this.props.deconnexionCallback(1);
      }
  	};
 }

  const styles = StyleSheet.create({
    viewContainer:{
      margin:5,
      justifyContent:'flex-start',
      alignItems:'flex-end',
    },
    picker:{
      width:100,
    },
});

module.exports=EnTeteClient;
