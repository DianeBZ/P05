import React, { Component } from 'react';
import { Text, Image, StyleSheet, View,ScrollView, Dimensions, TouchableHighlight, BackAndroid} from 'react-native';

import Translation from './Translation';

// Variable used to decide which information is rendered
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

// Variable used to decide which information is rendered
// if about is true, we display company information
// if about is false, we display team information
var about = 'false';

class BlockFunction extends Component{
 render(){
     return(
       <View>
       {(() => {
           if (about==='true'){
             return(
			 <View>
				<Text style={styles.titleCompany2}>{Translation[lang].lentreprise}</Text>
				<TouchableHighlight onPress={this._onPressAbout}>
					<View style={styles.titleStyle}>
						<Text style={styles.title}>{Translation[lang].a_propos}</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.separation}></View>
				<View style={styles.about}>
					<Text style={styles.aboutText}>{Translation[lang].a_propos1}</Text>

					<Text style={styles.aboutText}>{Translation[lang].a_propos2}</Text>

					<Text style={styles.aboutText}>{Translation[lang].a_propos3}</Text>

					<Text style={styles.aboutText}>{Translation[lang].a_propos4}</Text>
				</View>
				<TouchableHighlight onPress={this._onPressAbout}>
					<View style={styles.titleStyle}>
						<Text style={styles.title}>{Translation[lang].equipe}</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.separation}></View>
			</View>
			 );
			}else{
             return(
			 <View>
				<Text style={styles.titleCompany2}>{Translation[lang].lentreprise}</Text>
				<TouchableHighlight onPress={this._onPressAbout}>
					<View style={styles.titleStyle}>
						<Text style={styles.title}>{Translation[lang].a_propos}</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.separation}></View>
				<TouchableHighlight onPress={this._onPressAbout}>
					<View style={styles.titleStyle}>
						<Text style={styles.title}>{Translation[lang].equipe}</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.separation}></View>
				<View style={styles.containerV}>
					<View style={styles.element1}>
						<Image source={require('../img/Gregoire.jpg')} style = {styles.picture} />
					</View>
					<View style={styles.element2}>
						<Text style={styles.name}>Grégoire Willmann</Text>
						<Text style={styles.teamText}> {Translation[lang].statutG}</Text>
						<Text style={styles.teamText}>{Translation[lang].diplome}</Text>
					</View>
				</View>
				<View style={styles.containerV}>
					
					<View style={styles.element2}>
						<Text style={styles.name}>Gabriel Calmels</Text>
						<Text style={styles.teamText}> {Translation[lang].statutGa}</Text>
						<Text style={styles.teamText}>{Translation[lang].diplome}</Text>
					</View>
					<View style={styles.element1}>
						<Image source={require('../img/Gabriel.jpg')} style = {styles.picture} />
					</View>
				</View>
				<View style={styles.containerV}>
					<View style={styles.element1}>
						<Image source={require('../img/Christian.png')} style = {styles.picture} />
					</View>
					<View style={styles.element2}>
						<Text style={styles.name}>Christian Rodié</Text>
						<Text style={styles.teamText}>{Translation[lang].statutC}</Text>
						<Text style={styles.teamText}>{Translation[lang].exPoste}</Text>
					</View>
				</View>
				</View>
			 );
			}
		})()}
   </View>
 );
 }
 // function used to change value of variables (touching title)
_onPressAbout = () =>{
 if(about === 'true'){
   about = 'false';
 }else{
   about ='true';
 }
 this.forceUpdate();
};

}
export default class Company extends Component {
  render() {
    BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <ScrollView>
		
		<BlockFunction/>
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
	titleCompany:{
		fontSize:30,
		margin:width*0.2,
		textAlign:'center',
	},
	titleCompany2:{
		fontSize:30,
		marginTop:width*0.2,
		marginBottom:width*0.05,
		textAlign:'center',
	},
	titleStyle:{
	},
	title:{
		color:'#A4D04A',
		marginLeft:width*0.05,
		fontSize:22,
		fontStyle:'italic',
		fontWeight: 'bold',
	},
	about:{
		margin:width*0.03,
	},
	aboutText:{
		fontSize:17,
		marginBottom:width*0.03,
	},
	
	separation:{
      borderTopWidth: 2,
      marginTop:10,
      marginBottom:30,
      marginRight:width*0.05,
      marginLeft:width*0.05,
      borderTopColor:"#A4D04A",
   },
   containerV:{
		flexDirection: 'row',
		marginLeft:width*0.03,
		marginRight:width*0.03,
   },
   element1:{
	   width: width*0.3,
		height:width*0.3,
   },
   element2:{
		width: width*0.6,
		height:width*0.3,
		margin:width*0.01,
		alignItems:'center',
		justifyContent: 'center',
   },
  picture:{
    width: width*0.3,
    height: width*0.3,
  },
  name:{
	  textAlign:'center',
		fontWeight: "bold",	  
  },
  teamText:{
	textAlign:'center',  
  },
});