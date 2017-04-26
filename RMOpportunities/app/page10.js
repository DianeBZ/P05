import React, { Component } from 'react';
import { AppRegistry, Text, Image, View,ScrollView, StyleSheet, ViewPagerAndroid, Dimensions, TouchableHighlight, Alert, BackAndroid} from 'react-native';

import Trad from './traduction';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var valoriser = 'false';
var prix = 'false';
var temps = 'false';
var visibilite = 'false';
var environnement = 'false';


class BloqueFonction extends Component{

 render(){
     return(
       <View>
       {(() => {
           if (valoriser==='true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressValoriserStocks}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Trad[lang].text_val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(prix === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressValoriserStocks}>
                     <View style = {styles.cliqueDecoupageStatique}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Trad[lang].text_meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(temps === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressValoriserStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Trad[lang].text_gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.cliqueDecoupageStatique}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(visibilite === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressValoriserStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.cliqueDecoupage}>
                     <View style = {styles.cliqueTitre}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                     </View>
                     <Text style = {styles.cliqueTexte}>{Trad[lang].text_gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(environnement === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressValoriserStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {[styles.cliqueDecoupage, {marginBottom: width *0.1}]}>
                   <View style = {styles.cliqueTitre}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                   </View>
                   <Text style = {styles.cliqueTexte}>{Trad[lang].text_prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else{
               return(
                 <View style={styles.containerV}>
                   <View style={styles.containerH}>
                     <TouchableHighlight onPress={this._onPressValoriserStocks}>
                       <View style = {styles.decoupage}>
                           <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                           <Text style = {styles.texteCarreau}>{Trad[lang].val_stock}</Text>
                       </View>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].meill_prix}</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gagner_tps}</Text>
                     </View>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this._onPressVisibilite}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Trad[lang].gde_visib}</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <TouchableHighlight onPress={this._onPressEnvironnement}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Trad[lang].prot_env}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
               );
             }
       })()}
       </View>
     );
 }


_onPressValoriserStocks = () =>{
 if(valoriser === 'true'){
   valoriser = 'false';
 }else{
   valoriser ='true';
   prix = 'false';
   temps ='false';
   visibilite ='false';
   environnement = 'false';
 }
 this.forceUpdate();
};
_onPressPrix = () =>{
 if(prix === 'true'){
   prix = 'false';
 }else{
   valoriser ='false';
   prix = 'true';
   temps ='false';
   visibilite ='false';
   environnement = 'false';
 }
 this.forceUpdate();
};
_onPressTemps = () =>{
 if(temps === 'true'){
   temps = 'false';
 }else{
   valoriser ='false';
   prix = 'false';
   temps ='true';
   visibilite ='false';
   environnement = 'false';
 }
 this.forceUpdate();
};
_onPressVisibilite = () =>{
 if(visibilite === 'true'){
   visibilite = 'false';
 }else{
   valoriser ='false';
   prix = 'false';
   temps ='false';
   visibilite ='true';
   environnement = 'false';
 }
 this.forceUpdate();
};
_onPressEnvironnement = () =>{
 if(environnement === 'true'){
   environnement = 'false';
 }else{
   valoriser ='false';
   prix = 'false';
   temps ='false';
   visibilite ='false';
   environnement = 'true';
 }
 this.forceUpdate();
};
}


export default class BeneficesEntreprise extends Component {
  render() {
    BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <ScrollView>
       <View style={{height:height*0.08}}/>
       <Text style={styles.intro}>{Trad[lang].benef}</Text>
       <BloqueFonction/>
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

  intro:{
    textAlign:'center',
    fontSize:20,
    marginTop:height*0.07,
  },
  containerV: {
    alignItems:'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:width*0.06,
  },
  containerH: {
    flexDirection : 'row',
  },
  decoupage: {
    width: height*0.2,
    height:height*0.2,
    alignItems:'center',
    backgroundColor:'white',
    margin: width*0.05,
  },
  texteCarreau:{
    textAlign : 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop:10,

  },
  logoBloque:{
    width: 40,
    height: 40,
  },

  cliqueDecoupage: {
    width: height*0.38,
    height:height*0.27,
    borderWidth:1,
    borderColor: '#A4D04A',
    backgroundColor:'white',
    alignItems:'center',
  },

  cliqueDecoupageStatique: {
    width: height*0.2,
    height:height*0.2,
    backgroundColor:'white',
    alignItems:'center',
    marginTop:30,
  },

  cliqueTitre: {
    flexDirection : 'row',
    marginTop: 20,

  },
  cliqueTexte: {
    textAlign:'center',
    marginTop: 10,
    fontSize: 15,
  },

});

module.exports = BeneficesEntreprise;
