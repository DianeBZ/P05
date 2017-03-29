import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  Dimensions, 
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  BackAndroid
} from 'react-native';

import EnTete from './enTete'
import InscriptionReussie from './page_inscription_reussie'

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

var clickedOn1 = 'false';
var clickedOn2 = 'false';
var clickedOn3 = 'false';

class MenuInscription extends Component{
    constructor(props){
        super(props);
        this.state = { 
            nomEntreprise : '',
            adrEntreprise: '',
            complAdr: '',
            ville: '',
            codePostal: '',
            pays: '',
            numTVA: '',
            nomContact: '',
            adrMail: '',
            numTel: '',
            motDePasse: '',
        };
    }
    
    render(){
        return(
        <View>
            {(()=>{
                if(clickedOn1==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations entreprise</Text>
                        </View>
                        </TouchableHighlight>
                        <View>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Nom entreprise*" onChangeText={(nomEntreprise) => this.setState({nomEntreprise})} value={this.state.nomEntreprise}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Adresse entreprise*" onChangeText={(adrEntreprise) => this.setState({adrEntreprise})} value={this.state.adrEntreprise}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="Complément d'adresse" onChangeText={(complAdr) => this.setState({complAdr})} value={this.state.complAdr}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Ville*" onChangeText={(ville) => this.setState({ville})} value={this.state.ville}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="Code postal*" onChangeText={(codePostal) => this.setState({codePostal})} value={this.state.codePostal}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="Pays*" onChangeText={(pays) => this.setState({pays})} value={this.state.pays}/>
                            </View>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="N° TVA intracommunautaire" onChangeText={(numTVA) => this.setState({numTVA})} value={this.state.numTVA}/>
                        </View>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations contact</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Conditions d'utilisation</Text>
                        </View>
                    </TouchableHighlight>
                        </View>);
                }else if (clickedOn2==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise}style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations entreprise</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations contact</Text>
                        </View>
                        </TouchableHighlight>
                        <View>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Nom et prénom contact*" onChangeText={(nomContact) => this.setState({nomContact})} value={this.state.nomContact}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Adresse email contact*" onChangeText={(adrMail) => this.setState({adrMail})} value={this.state.adrMail}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="N° de téléphone*" onChangeText={(numTel) => this.setState({numTel})} value={this.state.numTel}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder="Mot de passe*" onChangeText={(motDePasse) => this.setState({motDePasse})} value={this.state.motDePasse}/>
                            </View>
                        </View>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Conditions d'utilisation</Text>
                        </View>
                        </TouchableHighlight>
                        </View>
                    );
                }else if (clickedOn3==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations entreprise</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations contact</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Conditions d'utilisation</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{/*flexDirection:'row',*/ width:width*0.8}}>
                            <Text style={{color:'#000000'}}>Je confirme avoir lu et accepté les </Text>
                            <Text style={{color:'#A4D04A'}}>Conditions d'utilisation de RMOpportunities </Text>
                            <Text style={{color:'#000000'}}>, que mes informations sont correctes et que je les maintiendrai à jour. </Text>
                        </View>
                        </View>
                    );
                } else {
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations entreprise</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Informations contact</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>Conditions d'utilisation</Text>
                        </View>
                        </TouchableHighlight>
                        </View>
                    );
                }
            })()}
        </View>
        );
    }
    _onPressInfoEntreprise = () =>{
    if(clickedOn1 === 'true'){
      clickedOn1 = 'false';
    }else{
      clickedOn1 = 'true';
      clickedOn2 = 'false';
      clickedOn3 = 'false';
    }
    this.forceUpdate();
  };
  _onPressInfoContact = () =>{
    if(clickedOn2 === 'true'){
      clickedOn2 = 'false';
    }else{
      clickedOn2 = 'true';
      clickedOn1 = 'false';
      clickedOn3 = 'false';
    }
    this.forceUpdate();
  };
  _onPressCondit = () =>{
    if(clickedOn3 === 'true'){
      clickedOn3 = 'false';
    }else{
      clickedOn3 = 'true';
      clickedOn2 = 'false';
      clickedOn1 = 'false';
    }
    this.forceUpdate();
  };
}

export default class Inscription extends Component {
    render(){
        return(
        <View style={{flex:1}}>
            <EnTete/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    Inscrivez-vous
                </Text>
                <View style={styles.mainWindow}>
                    <MenuInscription/>
                    <TouchableHighlight onPress={this.onPressInscription} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                        <Text style={styles.buttonText}>S'inscrire </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>    
        );
    }
    
    onPressInscription = () => {
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Inscription Réussie',
				component: InscriptionReussie,
			})
		}
	};
}

const styles = StyleSheet.create({
    window:{
        width: width,
        height: height*0.93,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
    mainWindow:{
        width: width/**0.9*/,
        height: height,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
    },
    titre:{
        fontSize: 32,
        textAlign: 'center',
        color: '#000000',
        marginTop: 15,
        marginBottom: 10
    },
    button:{
        height: width*0.08,
        marginTop: 20,
        justifyContent: 'center',
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    inscription:{
        backgroundColor:'#FFFFFF', 
        width:width*0.8, 
        alignItems:'flex-start', 
        marginTop:20
    },
    textToFill:{
       width: width*0.8,
       height: width*0.1,
       borderWidth: 1,
       borderColor: "#000000", 
       marginTop: 15,
       color: 'grey',
   },
   textToFill2:{
       width: width*0.35,
       height: width*0.1,
       borderWidth: 1,
       borderColor: "#000000", 
       marginTop: 15,
       marginRight: width*0.05,
       color: 'grey',
   },
});