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

import Trad from './traduction'
import InscriptionReussie from './page_inscription_reussie'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var star = '*';
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
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{width: width*0.95, alignItems:'center'}}>
                          <View style={{width: width*0.8, alignItems:'flex-start'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].nom + star} onChangeText={(nomEntreprise) => this.setState({nomEntreprise})} value={this.state.nomEntreprise}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].adr + star} onChangeText={(adrEntreprise) => this.setState({adrEntreprise})} value={this.state.adrEntreprise}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Trad[lang].compl_adr} onChangeText={(complAdr) => this.setState({complAdr})} value={this.state.complAdr}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].ville + star} onChangeText={(ville) => this.setState({ville})} value={this.state.ville}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Trad[lang].code_post + star} onChangeText={(codePostal) => this.setState({codePostal})} value={this.state.codePostal}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Trad[lang].pays + star} onChangeText={(pays) => this.setState({pays})} value={this.state.pays}/>
                            </View>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].tva} onChangeText={(numTVA) => this.setState({numTVA})} value={this.state.numTVA}/>
                          </View>
                        </View>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].cgu}</Text>
                        </View>
                    </TouchableHighlight>
                        </View>);
                }else if (clickedOn2==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise}style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{width: width*0.95, alignItems:'center'}}>
                          <View style={{width: width*0.8, alignItems:'flex-start'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Trad[lang].nom_contact + star} onChangeText={(nomContact) => this.setState({nomContact})} value={this.state.nomContact}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Trad[lang].mail + star} onChangeText={(adrMail) => this.setState({adrMail})} value={this.state.adrMail}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Trad[lang].tel + star} onChangeText={(numTel) => this.setState({numTel})} value={this.state.numTel}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder={Trad[lang].mdp + star} onChangeText={(motDePasse) => this.setState({motDePasse})} value={this.state.motDePasse}/>
                            </View>
                          </View>
                        </View>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].cgu}</Text>
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
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].cgu}</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{alignItems:'center', width:width*0.9}}>
                        <Text numberOfLines={4}>
                            <Text style={{color:'#000000'}}>{Trad[lang].texte_cgu1}</Text>
                            <Text style={{color:'#A4D04A'}}>{Trad[lang].texte_cgu2}</Text>
                            <Text style={{color:'#000000'}}>{Trad[lang].texte_cgu3}</Text>
                        </Text>
                        </View>
                        </View>
                    );
                } else {
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressInfoEntreprise} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressInfoContact} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressCondit} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 3 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Trad[lang].cgu}</Text>
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
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    {Trad[lang].inscript}
                </Text>
                <View style={styles.mainWindow}>
                    <MenuInscription/>
                    <TouchableHighlight onPress={this.onPressInscription} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                        <Text style={styles.buttonText}>{Trad[lang].sinscrire}</Text>
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
        width: width,
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
        height: height*0.05,
        marginTop: 20,
        borderRadius:5,
        justifyContent: 'center',
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    inscription:{
        backgroundColor:'#FFFFFF',
        width:width*0.95,
        alignItems:'flex-start',
        marginTop:20
    },
    textToFill:{
       width: width*0.8,
       height: height* 0.06,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       color: 'grey',
       borderRadius: 3,
   },
   textToFill2:{
       width: width*0.35,
       height: height* 0.06,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       marginRight: width*0.05,
       color: 'grey',
       borderRadius: 3,
   },
});
