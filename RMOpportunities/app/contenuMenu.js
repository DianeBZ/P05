import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   Dimensions,
   View,
   Alert,
   BackAndroid,
   TouchableHighlight,
   Navigator,
   Picker,
   DeviceEventEmitter,
} from 'react-native';
var width_window = Dimensions.get('window').width;
import Index from './page1';

import BeneficesEntreprise from './page10';
import CreerAnnonce from './creer_annonce';
import VoirOffres from'./voir_offres';
var selectedKey;

export default class ContenuMenu extends Component {
   render() {
      return (
		<View style={{flex:1, backgroundColor: '#fff'}}>
		{(() => {
			if (connection == 0)
				return (
					 // Non Connecté
					 <View>

						<TouchableHighlight onPress={()=>this.navigate('BeneficesEntreprise')} >
						   <Text style={styles.titreMenu}>Pourquoi RMOpportunities ?</Text>
						</TouchableHighlight>
						<View style={styles.separation}></View>

						<TouchableHighlight >
						   <Text style={styles.titreMenu}>Offres</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={()=>this.navigate('VoirOffres')}>
						   <Text style={styles.sousTitreMenu}>Voir les offres</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={()=>this.navigate('CreerAnnonce')}>
						   <Text style={styles.sousTitreMenu}>Proposer une offre</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>Conseils</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Acheter</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Vendre</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Réutiliser</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>A Propos</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>L'équipe</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Nos Soutiens</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Presse</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Blog</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>Découvrir</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Notre manifeste</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>Nos tarifs</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>FAQ</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<TouchableHighlight >
						   <Text style={styles.titreMenu}>Contact</Text>
						</TouchableHighlight>

                        <View>
                        <Picker
							selectedValue={lang}
							onValueChange={this._onLangChange.bind(this,'value')}
							style={styles.picker} >
							<Picker.Item label="Français" value='fr' />
							<Picker.Item label="English" value='en' />
                        </Picker>
                        </View>
					 </View>
					);
			else
				return(

					 // Connecté
					 <View>

						 <TouchableHighlight onPress={this.onPressInscription} >
						 <Text style={styles.titreMenu}>Mon Compte</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Mes alertes produits</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Mes annonces</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Mes négociations</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Mes mises en relation</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Mes factures</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Modifier mon compte</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>

						 <TouchableHighlight onPress={this._onPressBouton}>
						 <Text style={styles.titreMenu}>Offres</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Voir les offres</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Proposer une offre</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>
						 <Text style={styles.titreMenu}>Conseils</Text>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Acheter</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Vendre</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Réutiliser</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>
						 <Text style={styles.titreMenu}>Découvrir</Text>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>Nos tarifs</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>FAQ</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>
						 <Text style={styles.titreMenu}>A Propos</Text>

						 <View style={styles.separation}></View>
						 <TouchableHighlight >
						 <Text style={styles.titreMenu}>Contact</Text>
						 </TouchableHighlight>

                         <View>
                        <Picker
							selectedValue={lang}
							onValueChange={this._onLangChange.bind(this,'value')}
							style={styles.picker} >
							<Picker.Item label="Français" value='fr' />
							<Picker.Item label="English" value='en' />
                        </Picker>
                        </View>
					 </View>
				);
		 })()}
		 </View>
      );
   }
    _onLangChange = (key: string, value: string) => {
        lang = value;
        selectedKey = key;
		    this.forceUpdate();
        this.props.closeDrawer();
        DeviceEventEmitter.emit('nvBar');
    };
   navigate(property) {
      console.log(property)
      this.props.closeDrawer();
      const { navigator } = this.props.navigator.refs;

      if (navigator) {
         //console.log('Je suis dans la condition');
         if (property==='BeneficesEntreprise'){
            navigator.push({
               name: 'BeneficesEntreprise',
               component: BeneficesEntreprise,
            })
         }else if (property==='CreerAnnonce') {
            navigator.push({
               name: 'CreerAnnonce',
               component: CreerAnnonce,
            })
         }else if (property==='VoirOffres') {
            navigator.push({
               name: 'VoirOffres',
               component: VoirOffres,
            })
		 }else {
            {
                  console.log('Je suis pas rentré dans la condition');

            }
         }
      }else{
         console.log('Je suis pas rentré');
      }


   };

}



const styles = StyleSheet.create({

   titreMenu:{
      marginTop: 2,
      marginBottom:1,
      color:"#A4D04A",
      fontWeight:'bold' ,
      fontSize: 20,
      textAlign: 'center',
   },
   sousTitreMenu:{
      margin: 2,
      fontSize: 15,
      textAlign: 'left',
   },
   separation:{
      borderTopWidth: 2,
      marginTop:10,
      marginBottom:1,
      marginRight:20,
      marginLeft:20,
      borderTopColor:"#A4D04A",
   },
   	containerPicker: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			flexWrap: 'wrap',
			flexDirection: 'row',
			width: width_window,
			height:50,
			alignSelf: 'center',
	},
});
