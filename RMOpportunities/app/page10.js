 import React, { Component } from 'react';
 import { AppRegistry, Text, Image, View, StyleSheet,ViewPagerAndroid, Dimensions, TouchableHighlight, Alert} from 'react-native';
 import EnTete from './enTete';

 var width = Dimensions.get('window').width;
 var height = Dimensions.get('window').height;

var compt = 'true';
class ValoriserStocksFonction extends Component{

  render(){
      return(
        <TouchableHighlight onPress={this._onPressValoriserStocks}>
          {(() => {
            switch(compt){
              case 'true' : return(
                <View style = {styles.decoupage}>
                  <Image source={require('../img/valoriser.png')} style = {styles.logoBloque} />
                  <Text style = {styles.texteCarreau}> Valoriser vos stocks</Text>
                </View>);
              case 'false': return <Text>cest faux</Text>;
            }
          })()}
        </TouchableHighlight>
      );
  }
  _onPressValoriserStocks = () =>{
    if(compt === 'true'){
      compt = 'false';
    }else{
      compt ='true';
    }
    Alert.alert(compt);
    this.setState();
  };
}

export default class hello_word extends Component {
   render() {
     return (
       <View>
        <EnTete/>
        <View style={styles.containerV}>
          <View style={styles.containerH}>
              <ValoriserStocksFonction/>
            <View style = {styles.decoupage}>
              <Image source={require('../img/prix.png')} style={styles.logoBloque} />
              <Text style = {styles.texteCarreau} >Achetez aux meilleurs prix</Text>
            </View>
          </View>
          <View style={styles.containerH}>
            <View style = {styles.decoupage}>
              <Image source={require('../img/temps.png')} style={styles.logoBloque} />
              <Text style = {styles.texteCarreau}>Gagnez du temps</Text>
            </View>
            <View style = {styles.decoupage}>
              <Image source={require('../img/visibilite.png')} style={styles.logoBloque} />
              <Text style = {styles.texteCarreau}>Profitez d&#39;une grande visibilité</Text>
            </View>
          </View>
          <View style = {styles.decoupage}>
            <Image source={require('../img/environnement.png')} style={styles.logoBloque} />
            <Text style = {styles.texteCarreau}>Protégez l&#39;environnement</Text>
          </View>
        </View>
      </View>
     );
   }
 }
 const styles = StyleSheet.create({
   containerV: {
     alignItems:'center',
     flexDirection: 'column',
     justifyContent: 'center',
     marginTop:width*0.1,
     backgroundColor: '#F2F2F2',
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
   },
   logoBloque:{
     width: 40,
     height: 40,
     marginTop: 10,
   },
 });