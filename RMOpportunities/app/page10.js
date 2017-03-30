import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,ViewPagerAndroid, Dimensions, TouchableHighlight, Alert} from 'react-native';
import EnTete from './enTete';

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
                         <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>Vendez vos stocks dormants, stocks morts, surstocks, stocks sans emploi, slow moving stocks. Libérez de la trésorerie et faites de la place dans vos entrepôts</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
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
                         <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>Trouvez des produits chimiques de qualité, de base ou de spécialité, encore dans leur emballage d&#39;origine. Comparez de nombreux stocks ni entamés ni utilisés</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
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
                         <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.cliqueDecoupage}>
                       <View style = {styles.cliqueTitre}>
                         <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                       </View>
                       <Text style = {styles.cliqueTexte}>RMOpportunities est la référence en terme de valorisation en Europe. Ne cherchez plus vos acheteurs, mettez vos stocks en ligne simplement et gratuitement</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.cliqueDecoupageStatique}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
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
                         <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.cliqueDecoupageStatique}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.cliqueDecoupage}>
                     <View style = {styles.cliqueTitre}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                     </View>
                     <Text style = {styles.cliqueTexte}>Chimie fine, pharma, biocide, peinture, cosmétique... tous les acteurs de la chimie sont présents. Vos stocks sont visibles par des centaines d&#39;entreprises de façon anonyme</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.decoupage}>
                   <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                   <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
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
                         <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                         <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                         <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                     </View>
                   </TouchableHighlight>
                 </View>
                 <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                     </View>
                   </TouchableHighlight>
                   <TouchableHighlight onPress={this._onPressVisibilite}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                   </View>
                   </TouchableHighlight>
                 </View>
                 <TouchableHighlight onPress={this._onPressEnvironnement}>
                 <View style = {styles.cliqueDecoupage}>
                   <View style = {styles.cliqueTitre}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
                   </View>
                   <Text style = {styles.cliqueTexte}>Réduisez votre empreinte carbone en trouvant des stocks proches de chez vous. Participez à une économie moins consommatrice en ressources et donc plus circulaire</Text>
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
                           <Text style = {styles.texteCarreau}>Valoriser vos stocks</Text>
                       </View>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this._onPressPrix}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/prix.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Achetez aux meilleurs prix</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <View style={styles.containerH}>
                   <TouchableHighlight onPress={this._onPressTemps}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/temps.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
                     </View>
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this._onPressVisibilite}>
                     <View style = {styles.decoupage}>
                       <Image source={require('../img/visibilite.png')} style = {styles.logoBloque} />
                       <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
                     </View>
                     </TouchableHighlight>
                   </View>
                   <TouchableHighlight onPress={this._onPressEnvironnement}>
                   <View style = {styles.decoupage}>
                     <Image source={require('../img/environnement.png')} style = {styles.logoBloque} />
                     <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
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
   let pic = {
     uri:'https://www.rmopportunities.eu/assets/img/rmopportunities_logo.png'
   };
   let pic2 = {
     uri:'http://1.bp.blogspot.com/-1RVv5r7RPUo/Vo0gNtlp6LI/AAAAAAAAAgk/jbj0epxy654/s200/menu-alt-512.png'
   };

    return (
      <View>
       <EnTete/>
       <Text style={styles.intro}>Les bénéfices pour votre entreprises :</Text>
       <BloqueFonction/>
     </View>
    );
  }
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
    height:height*0.3,
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
