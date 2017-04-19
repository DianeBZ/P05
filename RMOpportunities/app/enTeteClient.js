import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Picker,
  Alert,
  DeviceEventEmitter,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let pic=require('../img/client.png');
var selected='key0';
var selectedKey='P05';

export default class EnTeteClient extends Component {

  render() {
      return (
            
				<View style={styles.viewContainer}>
				  <Image source={pic} style={styles.icone}>
					  <Picker
						mode={'dropdown'}
						style={styles.picker}
						onValueChange={this.onValueChange.bind(this,'value')}>
						<Picker.Item label='Mon compte' value="key1" />
						<Picker.Item label='deconnexion' value="key2" />
					  </Picker>
				  </Image>
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
	  if(value=="key2")
	   {
		  connection=0;
		  DeviceEventEmitter.emit('nvBar');
	   }
  	};
 }

  const styles = StyleSheet.create({
    viewContainer:{
      width:width*0.07,
	  height:height*0.08,
    },
    picker:{
      width:width*0.07,
    },
	icone:{
	  marginTop: height*0.01,
	  marginBottom: height*0.01,
	  width: width*0.07,
      height: height*0.06,
    },
});

module.exports=EnTeteClient;
