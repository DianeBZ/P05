import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Image,
   View,
   Dimensions,
   ScrollView,
   TouchableHighlight,
   BackAndroid,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

var width= Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Translation from './Translation';

export default class Sell extends Component {
   constructor(props) {
		super(props);
	}
   render() {
       BackAndroid.addEventListener('Back',this.onBackAndroid);
      return (
	  <ScrollView>
         <View style={styles.container}>
            <View style={styles.header} >
               <LinearGradient
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  locations={[0,1.0]}
                  colors={['#185177', '#F6D092']}
                  style={styles.gradient}>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/News.png')} style = {styles.logoLeft} />
                  </View>
                  <Text style={styles.title}>
                     {Translation[lang].press_title}
                  </Text>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/TV.png')} style = {styles.logoRight} />
                  </View>
               </LinearGradient>
			</View>
			<View style={styles.containerV}>
				<View style={styles.element1}>
					<Image source={require('../img/info-chimie.png')} style = {styles.pictureI} />
				</View>
				<View style={styles.element2}>
					<Text style={styles.name}>Info chimie magazine </Text>
					<Text style={styles.teamText}>{Translation[lang].info_chimie}</Text>
				</View>
			</View>
			<View style={styles.containerV}>
				<View style={styles.element1}>
					<Image source={require('../img/eclaira.png')} style = {styles.pictureE} />
				</View>
				<View style={styles.element2}>
					<Text style={styles.name}>Eclaira  </Text>
					<Text style={styles.teamText}>{Translation[lang].eclaira}</Text>
				</View>
			</View>
			<View style={styles.containerV}>
				<View style={styles.element1}>
					<Image source={require('../img/cci-paris.png')} style = {styles.pictureC} />
				</View>
				<View style={styles.element2}>
					<Text style={styles.name}>CCI Paris Ile de France </Text>
					<Text style={styles.teamText}>{Translation[lang].cci_paris}</Text>
				</View>
			</View>
			<View style={styles.containerV}>
				<View style={styles.elementT}>
					<Image source={require('../img/telecom.png')} style = {styles.pictureT} />
				</View>
				<View style={styles.element2}>
					<Text style={styles.name}>Télécom Saint-Etienne  </Text>
					<Text style={styles.teamText}>{Translation[lang].telecom}</Text>
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
      marginTop:height*0.08,
      flex:1,
   },
   gradient:{
      width: width,
      flexDirection:'row',
      paddingTop:15,
      paddingBottom:15
   },
   header: {
      alignItems: 'center',
      marginBottom:15,
   },
   headerIcon: {
      width:width/4,
      alignItems:'center',
      alignSelf:'center',
   },
   logoLeft:{
      transform: [{ rotate: '-25deg'}],
      width: 70,
      height: 70,
   },
   title: {
      width:width/2,
      fontSize: 25,
      textAlign: 'center',
      color: '#333333',
   },
   logoRight:{
      width: 70,
      height: 70,
   },
   
   containerV:{
		flexDirection: 'column',
		marginLeft:width*0.03,
		marginRight:width*0.03,
		alignItems:'center',
		justifyContent: 'center',
   },
   element1:{
	   width: width*1,
		height:width*0.15,
		alignItems:'center',
		justifyContent: 'center',
   },
   element2:{
		width: width*0.6,
		height:width*0.2,
		margin:width*0.01,
   },
   elementT:{
		width: width*1,
		height:width*0.37,
		alignItems:'center',
		justifyContent: 'center',
   },
  pictureI:{
    width:width*0.6,
    height:width*0.13,
  },
  pictureE:{
    width:width*0.48,
    height:width*0.17,
  },
  pictureC:{
    width:width*0.45,
    height:width*0.15,
  },
  pictureT:{
    width:width*0.3,
    height:width*0.37,
  },
  name:{
	  textAlign:'center',
		fontWeight: "bold",	  
  },
  teamText:{
	textAlign:'center',  
  },

});