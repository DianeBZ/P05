import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet,Dimensions, Button, Alert,TouchableHighlight} from 'react-native';
import EnTete from './enTete';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class CreerAnnonce extends Component {

  render() {
    return(
      <View>
        <EnTete/>
        <View style={styles.intro}>
          <Text style={styles.introTexte}>Créer une annonce</Text>
        </View>
        <View>
          <Text style={styles.introCommencer}>Commencer à vendre vos produits</Text>
        </View>
        <View style={styles.depotAnnonce}>
          <Text style={styles.depotTitre}>Dépôt d&#39;annonce</Text>
          <Text style={styles.depotTexte}>Vous pouvez déposer une annonce pour des produits qui n&#39;ont jamais été utilisés et dont l&#39;emballage n&#39;a jamais été ouvert. Une fois le dépôt effectué, notre équipe va vérifier les informations avant de mettre en ligne le ou les produits. </Text>
        </View>
        <View style={styles.contH}>
          <View style={styles.contV}>
            <Image source={require('../img/ajouterDemande.png')} style={styles.ajouterImage}/>
            <TouchableHighlight onPress={this.onButtonPress} style={styles.button} underlayColor="rgb(138,183,46)">
                <Text style={styles.buttonText}>Ajouter une demande</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contV}>
            <Image source={require('../img/ajouterProduit.png')} style={styles.ajouterImage}/>
            <TouchableHighlight onPress={this.onButtonPress} style={styles.button} underlayColor="rgb(138,183,46)">
                <Text style={styles.buttonText}>Ajouter un produit </Text>
            </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }
  onButtonPress = () => {
     Alert.alert('Button has been pressed!'
   );
  };
}

const styles = StyleSheet.create({
  intro:{
    backgroundColor: '#F2F2F2',
    borderTopColor: '#000',
    borderTopWidth:1,

  },
  introTexte:{
    fontSize:25,
    textAlign:'center',
    margin: height*0.05,
  },
  introCommencer:{
    fontSize:20,
    textAlign:'center',
    margin: height*0.03,
  },
  depotAnnonce:{
    backgroundColor: '#A4D04A',
  },
  depotTitre:{
    fontSize:18,
    textAlign:'center',
    marginTop: height*0.01,
    fontWeight:'bold',
  },
  depotTexte:{
    margin: width*0.05,
  },
  contH: {
    alignItems:'center',
    flexDirection : 'row',
    justifyContent: 'center',

  },
  contV: {
    flexDirection : 'column',
    margin:width*0.07,
  },
  ajouterImage:{
    width: 70,
    height: 80,
    margin:width*0.05,
  },
  button:{
      height: width*0.15,
      width: width *0.3,
      justifyContent: 'center',
      backgroundColor:'#A4D04A',
      borderRadius:5,
  },
  buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 18,
  },
});
