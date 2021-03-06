import React, { Component } from 'react';
import { Text, Image, StyleSheet, View,ScrollView, Dimensions, TouchableHighlight, BackAndroid} from 'react-native';

import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

// Variable used to decide which information is rendered
var valorize = 'false';
var price = 'false';
var time = 'false';
var visibility = 'false';
var environment = 'false';

// function used to manage dispaying of information 
class BlockFunction extends Component{
 render(){
     return(
       <View>
       {(() => {
           if (valorize==='true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Translation[lang].text_val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(price === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                     <View style = {styles.cliqueDecoupageStatique}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Translation[lang].text_meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(time === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>{Translation[lang].text_gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                   <View style = {styles.cliqueDecoupageStatique}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(visibility === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                   <View style = {styles.cliqueDecoupage}>
                     <View style = {styles.cliqueTitre}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                     </View>
                     <Text style = {styles.cliqueTexte}>{Translation[lang].text_gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else if(environment === 'true'){
             return(
               <View style={styles.containerV}>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                 <View style = {[styles.cliqueDecoupage, {marginBottom: width *0.1}]}>
                   <View style = {styles.cliqueTitre}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                   </View>
                   <Text style = {styles.cliqueTexte}>{Translation[lang].text_prot_env}</Text>
                 </View>
                 </TouchableHighlight>
               </View>
             );
           }else{
               return(
                 <View style={styles.containerV}>
                   <View style={styles.containerH}>
                     <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressValueStocks}>
                       <View style = {styles.decoupage}>
                           <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                           <Text style = {styles.texteCarreau}>{Translation[lang].val_stock}</Text>
                       </View>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressRates}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].meill_prix}</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <View style={styles.containerH}>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressTime}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gagner_tps}</Text>
                     </View>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressVisibility}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>{Translation[lang].gde_visib}</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <TouchableHighlight underlayColor='#A4D04A' onPress={this._onPressEnvironment}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>{Translation[lang].prot_env}</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
               );
             }
       })()}
       </View>
     );
 }

// function used to change value of variables (touching title/square)
_onPressValueStocks = () =>{
 if(valorize === 'true'){
   valorize = 'false';
 }else{
   valorize ='true';
   price = 'false';
   time ='false';
   visibility ='false';
   environment = 'false';
 }
 this.forceUpdate();
};
_onPressRates = () =>{
 if(price === 'true'){
   price = 'false';
 }else{
   valorize ='false';
   price = 'true';
   time ='false';
   visibility ='false';
   environment = 'false';
 }
 this.forceUpdate();
};
_onPressTime = () =>{
 if(time === 'true'){
   time = 'false';
 }else{
   valorize ='false';
   price = 'false';
   time ='true';
   visibility ='false';
   environment = 'false';
 }
 this.forceUpdate();
};
_onPressVisibility = () =>{
 if(visibility === 'true'){
   visibility = 'false';
 }else{
   valorize ='false';
   price = 'false';
   time ='false';
   visibility ='true';
   environment = 'false';
 }
 this.forceUpdate();
};
_onPressEnvironment = () =>{
 if(environment === 'true'){
   environment = 'false';
 }else{
   valorize ='false';
   price = 'false';
   time ='false';
   visibility ='false';
   environment = 'true';
 }
 this.forceUpdate();
};
}


export default class Benefits extends Component {
  render() {
    BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <ScrollView>
       <View style={{height:height*0.08}}/>
       <Text style={styles.intro}>{Translation[lang].benef}</Text>
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