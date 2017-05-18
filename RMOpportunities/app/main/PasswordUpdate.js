import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  Alert,
} from 'react-native';
import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var star = '*';

export default class PasswordUpdate extends Component{
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
	BackAndroid.addEventListener('Back',this.onBackAndroid);
    return(
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
        <View style={styles.containerMain}>
          <View style={styles.containerText}>
            <Text style={styles.title}>
              {Translation[lang].mdp}
            </Text>
            <Text style={styles.instructions}>
              {Translation[lang].text_mdp}
            </Text>
          </View>
          <View style={styles.containerBas}>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                {Translation[lang].mdp_act + star}
              </Text>
              <TextInput
              style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passAcien) => this.setState({passAcien})}
              />
            </View>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                {Translation[lang].mdp_nouveau + star}
              </Text>
              <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passChange)=>this.setState({passChange})}
              />
            </View>
            <View style={styles.containerItems}>
              <Text style={styles.titleAV}>
                {Translation[lang].mdp_nouveau2 + star}
              </Text>
              <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} secureTextEntry={true}
              onChange={(passChangeRepete)=>this.setState({passChangeRepete})}
              />
            </View>
            <TouchableHighlight style={styles.bouton} onPress={this.enregistrerPress.bind(this)}>
              <Text style={{fontSize:height*0.03,color:'white'}}>
				  {Translation[lang].enregistrer}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerMain: {
    backgroundColor: '#F2F2F2',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: width,
  height: height * 0.89,
  alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F2F2F2',
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: width,
  height: height * 0.28,
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
    width:width*0.8,
    height:height*0.05,
    padding:5,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#CCC',
  },
  bouton:{
    marginTop:20,
    width:width*0.7,
    height:height*0.08,
    backgroundColor:'#A4D04A',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  }
})