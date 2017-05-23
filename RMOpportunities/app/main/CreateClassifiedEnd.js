import React, { Component } from 'react';
import { Text, Image, View, StyleSheet,Dimensions,TouchableHighlight,BackAndroid,Navigator} from 'react-native';

import HomePage from './HomePage';
import Translation from './Translation';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class CreateClassifiedEnd extends Component {

  render() {
	return(
		<View>
			<View style={{height:height*0.08}}/>
			<View style={styles.corps}>
				<Text style={styles.merci}>{Translation[lang].merci}</Text>
				<Image source={require('../img/merci.png')} style={styles.merciImage}/>
				<Text style={styles.merciTexte}>{Translation[lang].mess_merci}</Text>
				<TouchableHighlight onPress={this.onPressAccueil} style={styles.button} underlayColor="rgb(138,183,46)">
					<Text style={styles.buttonText}>{Translation[lang].retour_acc}</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
  }
  // function used to call home page
  onPressAccueil = () => {
    BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'HomePage',
        component: HomePage,
      })
    }
  };
}

const styles = StyleSheet.create({
	corps:{
		backgroundColor:"#F2F2F2",
		alignItems:'center',
		justifyContent: 'center',
		
	},
	merci:{
		color:"black",
		fontSize:40,
		textAlign:'center',
		marginTop : width*0.15,
	},
	merciImage:{
		height: width*0.4,
		width: width *0.4,
		marginTop : width*0.15,
	},
	merciTexte:{
		color:"black",
		marginTop : width*0.1,
		margin:width*0.05,
		fontSize:18,
	},
	button:{
		marginTop : 5,
		height: width*0.09,
		width: width *0.5,
		borderRadius:5,
		backgroundColor:'#A4D04A',
		justifyContent:'center',
	},
	buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
	},
});