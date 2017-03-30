 import React, { Component } from 'react';
 import { AppRegistry, Text, Image, View, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
 import EnTete from './enTete';

 var width = Dimensions.get('window').width;
 var height = Dimensions.get('window').height;

var comptValoriserStocks = 'true';

class BloqueFonction extends Component{
  render(){
      return(
        <TouchableHighlight onPress={this._onPressValoriserStocks}>
          {(() => {
            switch(comptValoriserStocks){
              case 'true' : return(
                <View style = {styles.decoupage}>
                  <Image source={this.props.source} style = {styles.logoBloque} />
                  <Text style = {styles.texteCarreau}>{this.props.titre}</Text>
                </View>);
              case 'false': return(
                <View style = {styles.cliqueDecoupage}>
                  <View style = {styles.cliqueTitre}>
                    <Image source={this.props.source} style = {styles.logoBloque} />
                    <Text style = {styles.texteCarreau}>{this.props.titre}</Text>
                  </View>
                  <Text style = {styles.cliqueTexte}>{this.props.texte}</Text>

                </View>);
            }
          })()}
        </TouchableHighlight>
      );
  }
  _onPressValoriserStocks = () =>{
    if(comptValoriserStocks === 'true'){
      comptValoriserStocks = 'false';
    }else{
      comptValoriserStocks ='true';
    }
    this.forceUpdate();
  };
}


export default class Benefices extends Component {
   render() {
     return (
       <View>
        <EnTete/>
        <Text style={styles.intro}>Les bénéfices pour votre entreprises :</Text>
        <View style={styles.containerV}>
          <View style={styles.containerH}>
              <BloqueFonction source = {require('../img/valoriser.png')} titre=' Valoriser vos stocks' texte='Vendez vos stocks dormants, stocks morts, surstocks, stocks sans emploi, slow moving stocks. Libérez de la trésorerie et faites de la place dans vos entrepôts'/>
              <BloqueFonction source = {require('../img/prix.png')} titre=' Achetez aux meilleurs prix' texte='Trouvez des produits chimiques de qualité, de base ou de spécialité, encore dans leur emballage d&#39;origine. Comparez de nombreux stocks ni entamés ni utilisés '/>
          </View>
          <View style={styles.containerH}>
            <BloqueFonction source = {require('../img/temps.png')} titre=' Gagnez du temps' texte='RMOpportunities est la référence en terme de valorisation en Europe. Ne cherchez plus vos acheteurs, mettez vos stocks en ligne simplement et gratuitement '/>
            <BloqueFonction source = {require('../img/visibilite.png')} titre='Profitez d&#39;une grande visibilité' texte='Chimie fine, pharma, biocide, peinture, cosmétique... tous les acteurs de la chimie sont présents. Vos stocks sont visibles par des centaines d&#39;entreprises de façon anonyme'/>
          </View>
            <BloqueFonction source = {require('../img/environnement.png')} titre='Protégez l&#39;environnement' texte='Réduisez votre empreinte carbone en trouvant des stocks proches de chez vous. Participez à une économie moins consommatrice en ressources et donc plus circulaire '/>
          </View>
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
     margin:10,

   },
   logoBloque:{
     width: 40,
     height: 40,
   },

   cliqueDecoupage: {
     width: height*0.3,
     height:height*0.3,
     borderWidth:1,
     borderColor: '#A4D04A',
     backgroundColor:'white',
     alignItems:'center',
   },

   cliqueTitre: {
     flexDirection : 'row',
     marginTop: 20,
   },
   cliqueTexte: {
     textAlign:'center',
     marginTop: 10,
   }

 });
 
 module.exports = Benefices;