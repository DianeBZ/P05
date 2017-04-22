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
import Trad from './traduction';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let pic=require('../img/client.png');
var selected='key0';

export default class EnTeteClient extends Component {

  render() {
      return (

				<View style={styles.viewContainer}>
				  <Image source={pic} style={styles.icone}>
					  <Picker
						mode={'dropdown'}
						style={styles.picker}
						onValueChange={this.onValueChange.bind(this,'value')}>
						<Picker.Item label={Trad[lang].compte} value="key1" />
						<Picker.Item label={Trad[lang].deco} value="key2" />
					  </Picker>
				  </Image>
				</View>
      );
    }

    onValueChange = (key: string, value: string) => {
      if(value==="key1")
        {
          Alert.alert('Mon compte');
        }
	  if(value==="key2")
	   {
		  connection=0;
		  DeviceEventEmitter.emit('nvBar');
      // emit the signal'nvBar' when the bouton is clicked.A listener in page1 will react
	   }
  	};
 }

  const styles = StyleSheet.create({
    viewContainer:{
      width:width*0.15,
	  height:height*0.08,
    },
    picker:{
      width:width*0.07,
    },
	icone:{
      marginTop: 5,
	  marginLeft: 10,
      width: width*0.11,
      height: height*0.06,
    },
});

module.exports=EnTeteClient;
