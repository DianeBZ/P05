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
   ScrollView,
} from 'react-native';
var width_window = Dimensions.get('window').width;
import Trad from './traduction';
import Index from './page1';
import BeneficesEntreprise from './page10';
import CreerAnnonce from './creer_annonce';
import VoirOffres from'./voir_offres';
var selectedKey;

export default class ContenuMenu extends Component {
   render() {
      return (
		<ScrollView style={{backgroundColor:'white'}}>
		{(() => {
			if (connection == 0)
				return (
					 // Non Connecté
					 <View>

						<TouchableHighlight onPress={()=>this.navigate('BeneficesEntreprise')} >
						   <Text style={styles.titreMenu}>{Trad[lang].pk}</Text>
						</TouchableHighlight>
						<View style={styles.separation}></View>

						<TouchableHighlight>
						   <Text style={styles.titreMenu}>{Trad[lang].annonces}</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={()=>this.navigate('VoirOffres')}>
						   <Text style={styles.sousTitreMenu}>{Trad[lang].voir_offres}</Text>
						</TouchableHighlight>
                        <TouchableHighlight>
						   <Text style={styles.sousTitreMenu}>{Trad[lang].voir_demande}</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={()=>this.navigate('CreerAnnonce')}>
						   <Text style={styles.sousTitreMenu}>{Trad[lang].aj_annonce}</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>{Trad[lang].conseils}</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].acheter}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].vendre}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].reutil}</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>{Trad[lang].a_propos}</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].equipe}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].soutiens}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].presse}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].blog}</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<Text style={styles.titreMenu}>{Trad[lang].decouvrir}</Text>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].manifeste}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].tarifs}</Text>
						</TouchableHighlight>
						<TouchableHighlight >
						   <Text style={styles.sousTitreMenu}>{Trad[lang].faq}</Text>
						</TouchableHighlight>

						<View style={styles.separation}></View>
						<TouchableHighlight >
						   <Text style={styles.titreMenu}>{Trad[lang].contact}</Text>
						</TouchableHighlight>
                        
                        <View style={styles.separation}></View>
						<TouchableHighlight >
						<Text style={styles.titreMenu}>{Trad[lang].langue}</Text>
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
                         <View style={styles.separation}></View>
						 <TouchableHighlight onPress={this.onPressInscription} >
						 <Text style={styles.titreMenu}>{Trad[lang].compte}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].alertes}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].mes_annonces}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].nego}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].mises_en_rel}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].factures}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].modif_compte}</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>

						 <TouchableHighlight onPress={this._onPressBouton}>
						 <Text style={styles.titreMenu}>{Trad[lang].annonces}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight onPress={()=>this.navigate('VoirOffres')}>
						 <Text style={styles.sousTitreMenu}>{Trad[lang].voir_offres}</Text>
						 </TouchableHighlight>
                         <TouchableHighlight>
						   <Text style={styles.sousTitreMenu}>{Trad[lang].voir_demande}</Text>
						</TouchableHighlight>
						 <TouchableHighlight onPress={()=>this.navigate('CreerAnnonce')}>
						 <Text style={styles.sousTitreMenu}>{Trad[lang].aj_annonce}</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>
						 <Text style={styles.titreMenu}>{Trad[lang].conseils}</Text>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].acheter}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].vendre}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].reutil}</Text>
						 </TouchableHighlight>

						 <View style={styles.separation}></View>
						 <Text style={styles.titreMenu}>{Trad[lang].decouvrir}</Text>
                         <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].manifeste}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].tarifs}</Text>
						 </TouchableHighlight>
						 <TouchableHighlight >
						 <Text style={styles.sousTitreMenu}>{Trad[lang].faq}</Text>
						 </TouchableHighlight>

                         <View style={styles.separation}></View>
						 <TouchableHighlight >
						 <Text style={styles.titreMenu}>{Trad[lang].langue}</Text>
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
		 </ScrollView>
      );
   }
    _onLangChange = (key: string, value: string) => {
        lang = value;
        selectedKey = key;
        this.props.closeDrawer();
        DeviceEventEmitter.emit('nvBar');
    };
   navigate(property) {
      console.log(property)
      this.props.closeDrawer();
      const { navigator } = this.props.navigator.refs;
      if (navigator) {
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
