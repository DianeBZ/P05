import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import EnTete from './enTete';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

export default class MotPasse extends Component{
  constructor(props) {
    super(props);
    this.state = {passAcien: '',passChange:'',passChangeRepete:''};
  }
  enregistrerPress=()=>{
    if(this.state.passAcien==''||this.state.passChange==''||this.state.passChangeRepete=='')
      Alert.alert('Veuillez remplir toutes les cases');
    else if (this.state.passChange!=this.state.passChangeRepete) {
      Alert.alert('verifiez si votre nouveau mot de passe est même que celui répété');
    }
    else {
      Alert.alert('le mot de passe a été bien modifié');
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <EnTete />
        <View style={styles.containerMain}>
          <View style={styles.containerText}>
            <Text style={styles.title}>
              Mot de passe
            </Text>
            <Text style={styles.instructions}>
              modifier votre mot de passe
            </Text>
          </View>
          <View style={styles.containerBas}>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                Mot de passe actuel*
              </Text>
              <TextInput
              style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passAcien) => this.setState({passAcien})}
              />
            </View>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                Nouveau mot de passe*
              </Text>
              <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passChange)=>this.setState({passChange})}
              />
            </View>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                Répéter le nouveau mot de passe*
              </Text>
              <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passChangeRepete)=>this.setState({passChangeRepete})}
              />
            </View>
            <TouchableHighlight style={styles.bouton} onPress={this.enregistrerPress.bind(this)}>
              <Text style={{fontSize:heightWindow*0.03,color:'white'}}>
                Enregistrer les modifications
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerMain: {
    backgroundColor: '#F5FCFF',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: widthWindow,
  height: heightWindow * 0.89,
  alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F5FCFF',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: widthWindow,
  height: heightWindow * 0.28,
  alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  color: '#333333',
  },
  instructions: {
    fontSize: 15,
  textAlign: 'center',
    marginBottom:5,
  },
  containerBas:
  {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  containerItems:
  {
    alignItems:'flex-start',
    marginTop:10,
  },
  titleAV: {
  fontSize: 15,
  color: '#333333',
  textAlign: 'left',
  },
  textToFill:{
    marginTop:5,
    width:widthWindow*0.8,
    height:heightWindow*0.05,
    padding:5,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#CCC',
  },
  bouton:{
    marginTop:20,
    width:widthWindow*0.7,
    height:heightWindow*0.08,
    backgroundColor:'#A4D04A',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  }
})
module.exports = MotPasse;
