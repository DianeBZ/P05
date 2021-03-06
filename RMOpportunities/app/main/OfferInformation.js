import React, { Component } from 'react';
import {Text, Image, View, StyleSheet, Dimensions, TouchableHighlight, BackAndroid, ScrollView} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Connection from './Connection';

// Variable used to decide which information is rendered
var product = 'false';
var info = 'false';
var description = 'false';

export default class OfferInformation extends Component {
  render() {
      BackAndroid.addEventListener('Back',this.onBackAndroid);
    return(
		<ScrollView style={{backgroundColor:'#F2F2F2'}}>
			<View style={{height:height*0.08}}/>
			<View style={styles.corps}>
				<Text style={styles.titre}>Benzoate de sodium</Text>
				<Text style={styles.depot}>Déposée le : 2nov.2016</Text>
				<Image source={require('../img/depot_annonce.jpg')} style = {styles.img} />
				<Text>Note du créateur : 4.5/5 (2notes)</Text>
			</View>
			<View>
       {(() => {
           if (product==='true'){
             return(
				<View>
					<View>
						<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressProduit}>
							<Text style={styles.sousTitre2}>Produit</Text>
						</TouchableHighlight>
						<View style={styles.separation}></View>
						<View style={styles.containerH}>
							<View style={styles.containerVST}>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Categorie</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Numero</Text>
								</View>
							</View>
							<View style={styles.containerV}>
								<View style={styles.largeur}>
									<Text style={styles.info}>Produits pour la cosmétique, les arômes et parfums</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.info}></Text>
								</View>
							</View>
						</View>
					</View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressInfo}>
						<Text style={styles.sousTitre2}>Informations complémentaires </Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressDescription}>
						<Text style={styles.sousTitre2}>Description</Text>
					</TouchableHighlight>	
					<View style={styles.separation}></View>
				</View>
				
             );
           }else if(info === 'true'){
             return(
			 <View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressProduit}>
						<Text style={styles.sousTitre2}>Produit</Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressInfo}>
						<Text style={styles.sousTitre2}>Informations complémentaires </Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<View style={styles.containerH}>
							<View style={styles.containerVST}>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Quantité</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Prix unitaire</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Date d'expiration (DLU/DLC)</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Contenant</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Payes de stockage</Text>
								</View>
								<View style={styles.largeur}>
									<Text style={styles.nomInfo}>Pays d'origine du produit</Text>
								</View>
							</View>
							<View style={styles.containerV}>
								<View style={styles.largeur}>
									<Text style={styles.info}>70m3</Text>
								</View>
								
								<View style={styles.largeur}>
								{(() => {
									if (connection === 0)
										return (
											<TouchableHighlight underlayColor="rgb(138,183,46)" onPress={this._onPressNC}>
												<Text style={[styles.info, {color:'#A4D04A'}]}>Se connecter</Text>
											</TouchableHighlight>
										);
									else
										return(
											<Text style={styles.info}>35euro</Text>
										);
								})()}		
								</View>
								<View style={styles.largeur}>	
									<Text style={styles.info}>1 janv. 2019</Text>
								</View>
								<View style={styles.largeur}>	
									<Text style={styles.info}>IBC/GRV</Text>
								</View>
								<View style={styles.largeur}>	
									<Text style={styles.info}>France</Text>
								</View>
								<View style={styles.largeur}>	
									<Text style={styles.info}>Allemagne</Text>
								</View>
							</View>
						</View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressDescription}>
						<Text style={styles.sousTitre2}>Description</Text>
					</TouchableHighlight>	
					<View style={styles.separation}></View>
				</View>
             );
           }else if(description === 'true'){
             return(
				<View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressProduit}>
						<Text style={styles.sousTitre2}>Produit</Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressInfo}>
						<Text style={styles.sousTitre2}>Informations complémentaires </Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressDescription}>
						<Text style={styles.sousTitre2}>Description</Text>
					</TouchableHighlight>	
					<View style={styles.separation}></View>
					<Text style={styles.info}> blablablabla .... </Text>
				</View>
             );
           }else{
               return(
				<View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressProduit}>
						<Text style={styles.sousTitre}>Produit</Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressInfo}>
						<Text style={styles.sousTitre}>Informations complémentaires </Text>
					</TouchableHighlight>
					<View style={styles.separation}></View>
					<TouchableHighlight underlayColor="#F2F2F2" onPress={this._onPressDescription}>
						<Text style={styles.sousTitre}>Description</Text>
					</TouchableHighlight>	
					<View style={styles.separation}></View>
				</View>
               );
             }
       })()}
       </View>
			{(() => {
			if (connection === 0)
				return (
					<View style={styles.containerButton}>
					<TouchableHighlight onPress={this._onPressNC} style={[styles.button, {backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
							<Text style={styles.buttonText}>Plus d information </Text>
					</TouchableHighlight>
					<View style={styles.espace}></View>
					<TouchableHighlight onPress={this._onPressNC} style={[styles.button, {backgroundColor:'rgb(0,160,220)'}]} underlayColor="rgb(0,140,201)">
							<Text style={styles.buttonText}>Commencer les négociations</Text>
					</TouchableHighlight>
			</View>
				);
			else
				return(
					<View style={styles.containerButton}>
					<TouchableHighlight style={[styles.button, {backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
							<Text style={styles.buttonText}>Plus d information </Text>
					</TouchableHighlight>
					<View style={styles.espace}></View>
					<TouchableHighlight style={[styles.button, {backgroundColor:'rgb(0,160,220)'}]} underlayColor="rgb(0,140,201)">
							<Text style={styles.buttonText}>Commencer les négociations</Text>
					</TouchableHighlight>
			</View>
			);
			})()}
		</ScrollView>
	);
  }
 // function used to call 'connection', to enable user to sign in
_onPressNC = () => {
	BackAndroid.removeEventListener('Exit',this.onBackAndroid);
	const { navigator } = this.props;
	if (navigator) {
		navigator.push({
			name: 'Connection',
			component: Connection,
		})
	}
};

 // function used to change value of variables (touching title)
_onPressProduit = () =>{
 if(product === 'true'){
   product = 'false';
 }else{
   product ='true';
   info = 'false';
   description ='false';
 }
 this.forceUpdate();
};
_onPressInfo = () =>{
 if(info === 'true'){
   info = 'false';
 }else{
   product ='false';
   info = 'true';
   description ='false';
 }
 this.forceUpdate();
};
_onPressDescription = () =>{
 if(description === 'true'){
   description = 'false';
 }else{
   product ='false';
   info = 'false';
   description ='true';
 }
 this.forceUpdate();
};

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
	button:{
		height: width*0.10,
		width: width *0.5,
		borderRadius:5,
		justifyContent:'center',
		marginBottom:width*0.05,
	},
	 buttonText:{
		color: "white",
		textAlign: "center",
		fontSize: 15,
	},
	containerButton: {
		marginTop:width*0.1,
		flexDirection : 'column',
		alignItems:'center',
	},
	containerV: {
		flexDirection: 'column',
		marginTop:width*0.06,
		width:width*0.65,
	},
	containerVST: {
		flexDirection: 'column',
		marginTop:width*0.06,
		width:width*0.35,
		
	},
	largeur:{
		height:width*0.15,
	},
	containerH: {
		flexDirection : 'row',
	},
	sousTitre:{
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft:20,
		marginTop:width*0.1,
	},
	titre:{
		textAlign: "center",
		fontSize: 25,
	},
	depot:{
		color:'#D3D3D3',
	},
	corps:{
		alignItems:'center',
		justifyContent:'center',
	},
	img:{
		alignItems:'center',
		width:width*0.7,
		height:width*0.35,
	},
	separation:{
      borderTopWidth: 2,
      marginTop:10,
      marginBottom:1,
      marginRight:20,
      marginLeft:20,
      borderTopColor:"#A4D04A",
   },
   sousTitre2:{
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft:20,
		marginTop:width*0.03,
	},
   nomInfo:{
	   fontSize:18,
	   marginLeft:5,
   },
   info:{
	   marginLeft:10,
	   marginRight:5,
   }
});