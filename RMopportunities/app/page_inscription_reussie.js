import React, { Component } from 'react';
import 
{
	StyleSheet,
	AppRegistry,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import EnTete from './enTete'


export default class EndRegistration extends Component {
  render() 
  {
    return (
      <View style={styles.container1}>
		<EnTete/>
        <Text style={styles.Inscription}>
			Inscription réussie !
		</Text>
		<View style={styles.subContainer}>
			<Text style={styles.Bienvenue}>
				Bienvenue sur RMOpportunities
			</Text>
			<View style={styles.sContainerPre}>
				<Text style={styles.Achetez}>
					Achetez et vendez des surplus de stocks de produits chimiques
				</Text>
			</View>
			<View style={styles.sContainerBonton}>
            <TouchableOpacity style={styles.BoutonAccueil} onPress={this._onPressBouton}>
              <Text style={styles.Accueil}>
				Accueil
              </Text>
            </TouchableOpacity>
          </View>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  
  Inscription: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  subContainer:{
    margin:10,
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  
  sContainerPre:{
	margin:0,
    backgroundColor:'#A4D04A',
    flex: 2,
  },
  
  sContainerBonton:{
    flex:3,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  Bienvenue: {
	color : '#A4D04A',
	fontWeight:'bold',
	textAlign:'center',
	fontSize: 25,
	margin:10,
  },
  Achetez:{
    marginTop:  50,
    textAlign: 'center',
    color:"black",
	fontWeight:'bold',
	fontSize: 20,
  },
  BoutonAccueil:{
	marginTop:20,
	height:40,
	width:75,
	borderRadius:5,
	backgroundColor:'#A4D04A',
	justifyContent:'center'
  },
  
  Accueil:{
    textAlign:'center',
    color:'white',
    },
});



