import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Dimensions,
   View,
   BackAndroid,
   TouchableHighlight,
   Picker,
   DeviceEventEmitter,
   ScrollView,
} from 'react-native';

import Translation from './Translation';
import Benefits from './Benefits';
import CreateClassified from './CreateClassified';
import OffersCategory from'./OffersCategory';
import Buy from'./Buy';
import Sell from'./Sell';
import Reuse from'./Reuse';

var width = Dimensions.get('window').width;

export default class ContenuMenu extends Component {
   render() {
      //BackAndroid.addEventListener('closeDrawer', this.onBackAndroid);
      return (
         <ScrollView style={{backgroundColor:'white'}}>
            {(() => {
               if (connection == 0)
               return (
                  // Non Connecté
                  <View>

                     <TouchableHighlight onPress={()=>this.navigate('Benefits')} >
                        <Text style={styles.titreMenu}>{Translation[lang].pk}</Text>
                     </TouchableHighlight>
                     <View style={styles.separation}></View>

                     <TouchableHighlight>
                        <Text style={styles.titreMenu}>{Translation[lang].annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={()=>this.navigate('OffersCategory')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_offres}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_demande}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={()=>this.navigate('CreateClassified')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].aj_annonce}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].conseils}</Text>
                     <TouchableHighlight  onPress={()=>this.navigate('Buy')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].acheter}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight  onPress={()=>this.navigate('Sell')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].vendre}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight  onPress={()=>this.navigate('Reuse')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].reutil}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].a_propos}</Text>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].equipe}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].soutiens}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].presse}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].blog}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].decouvrir}</Text>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].manifeste}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].tarifs}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].faq}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight >
                        <Text style={styles.titreMenu}>{Translation[lang].contact}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight >
                        <Text style={styles.titreMenu}>{Translation[lang].langue}</Text>
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
                        <Text style={styles.titreMenu}>{Translation[lang].compte}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].alertes}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].mes_annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].nego}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].mises_en_rel}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].factures}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].modif_compte}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>

                     <TouchableHighlight onPress={this._onPressBouton}>
                        <Text style={styles.titreMenu}>{Translation[lang].annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={()=>this.navigate('OffersCategory')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_offres}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_demande}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={()=>this.navigate('CreateClassified')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].aj_annonce}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].conseils}</Text>
                     <TouchableHighlight  onPress={()=>this.navigate('Buy')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].acheter}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight  onPress={()=>this.navigate('Sell')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].vendre}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight  onPress={()=>this.navigate('Reuse')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].reutil}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].decouvrir}</Text>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].manifeste}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].tarifs}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].faq}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight >
                        <Text style={styles.titreMenu}>{Translation[lang].langue}</Text>
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

   onBackAndroid = () => {
      BackAndroid.removeEventListener('closeDrawer', this.onBackAndroid);
      this.props.closeDrawer();
   };
   _onLangChange = (key: string, value: string) => {
      lang = value;
      this.props.closeDrawer();
      DeviceEventEmitter.emit('nvBar');
   };

   navigate(property) {
      this.props.closeDrawer();
      const { navigator } = this.props.navigator.refs;
      if (navigator) {
         if (property==='Benefits'){
            navigator.push({
               name: 'Benefits',
               component: Benefits,
            })
         }else if (property==='CreateClassified') {
            navigator.push({
               name: 'CreateClassified',
               component: CreateClassified,
            })
         }else if (property==='OffersCategory') {
            navigator.push({
               name: 'OffersCategory',
               component: OffersCategory,
            })
         }else if (property==='Buy') {
            navigator.push({
               name: 'Buy',
               component: Buy,
            })

         }else if (property==='Sell') {
            navigator.push({
               name: 'Sell',
               component: Sell,
            })

         }else if (property==='Reuse') {
            navigator.push({
               name: 'Reuse',
               component: Reuse,
            })
         }
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
      width: width,
      height:50,
      alignSelf: 'center',
   },
});
