import React, { Component } from 'react';
import { Text, Image, StyleSheet, View,ScrollView, Dimensions, TouchableHighlight, BackAndroid} from 'react-native';

import Translation from './Translation';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Company extends Component {
  render() {
    BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <ScrollView>
		<View style={styles.container}>
			<Text style={styles.title1}>{Translation[lang].confidence1}</Text>
			<Text style={styles.title2}>{Translation[lang].confidence2}</Text>
			<View style={styles.separation}></View>
			<View style={styles.containerH}>
				<View style = {styles.decoupage}>
					<Image source={require('../img/directchimie.png')} style = {styles.logoDC} />
					<Text style = {styles.texteCarreau}>Direct Chimie</Text>
				</View>
				<View style = {styles.decoupage}>
					<Image source={require('../img/basf.png')} style = {styles.logoBASF} />
					<Text style = {styles.texteCarreau}>BASF</Text>
				</View>
			</View>
			<View style = {styles.decoupage}>
				<Image source={require('../img/kimibiz.png')} style = {styles.logoKimibiz} />
				<Text style = {styles.texteCarreau}>Kimibiz</Text>
			</View>
			
			<Text style={styles.title1}>{Translation[lang].supporters1}</Text>
			<Text style={styles.title2}>{Translation[lang].supporters2}</Text>
			<View style={styles.separation}></View>
			<View style={styles.containerH}>
				<View style = {styles.decoupageS}>
					<Image source={require('../img/axelera.png')} style = {styles.logoAxe} />
					<Text style = {styles.titreCarreau}>Axelera</Text>
					<Text style = {styles.texteCarreau}>{Translation[lang].axelera}</Text>
				</View>
				<View style = {styles.decoupageS}>
					<Image source={require('../img/uic-idf.png')} style = {styles.logoUIC} />
					<Text style = {styles.titreCarreau}>UIC Ile-de-France </Text>
					<Text style = {styles.texteCarreau}>{Translation[lang].uic}</Text>
				</View>
			</View>
			<View style={styles.containerH}>
				<View style = {styles.decoupageS}>
					<Image source={require('../img/ufcc.png')} style = {styles.logoBASF} />
					<Text style = {styles.titreCarreau}>UFCC </Text>
					<Text style = {styles.texteCarreau}>{Translation[lang].ufcc}</Text>
				</View>
				<View style = {styles.decoupageS}>
					<Image source={require('../img/usein.png')} style = {styles.logoUse} />
					<Text style = {styles.titreCarreau}>Use'In </Text>
					<Text style = {styles.texteCarreau}>{Translation[lang].usein}</Text>
				</View>
			</View>
		</View>
     </ScrollView>
    );
  }
  onBackAndroid = () => {
		const { navigator } = this.props;
		if (navigator && navigator.getCurrentRoutes().length > 1) {
			BackAndroid.removeEventListener('Back', this.onBackAndroid);
			navigator.pop();
			return true;
		} else {
			return false;
		}
  };
}

const styles = StyleSheet.create({
	container: {
      marginTop:height*0.1,
      flex:1,
   },
   
   separation:{
      borderTopWidth: 2,
      marginTop:10,
      marginBottom:1,
      marginRight:20,
      marginLeft:20,
      borderTopColor:"#A4D04A",
   },
   title1:{
	   textAlign:'center',
	   fontSize:20,
   },
   
   title2:{
	   textAlign:'center',
	   fontSize:25,
   },
   containerH: {
    flexDirection : 'row',
    alignItems:'center',
    justifyContent: 'center',
	
  },
  decoupage: {
    //width: width*0.4,
    //height:height*0.17,
	justifyContent: 'center',
    alignItems:'center',
	margin:width*0.07,
  },
  
  logoBASF:{
    width: width*0.25,
    height: width*0.2,
  },
  logoDC:{
    width: width*0.3,
    height: width*0.25,
  },
  logoKimibiz:{
    width: width*0.30,
    height: width*0.10,
  },
  
  decoupageS: {
    width: width*0.5,
    height:height*0.3,
	justifyContent: 'center',
    alignItems:'center',
	marginTop:width*0.07,
  },
  logoAxe:{
    width: width*0.4,
    height: width*0.07,
  },
  logoUIC:{
    width: width*0.27,
    height: width*0.18,
  },
  logoUse:{
    width: width*0.39,
    height: width*0.15,
  },
  texteCarreau:{
	  margin:width*0.02,
	  textAlign:'center',
  },
  titreCarreau:{
	  marginTop:width*0.05,
	  textAlign:'center',
	  fontWeight: "bold",	  
  },
});