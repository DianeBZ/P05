import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  BackAndroid
} from 'react-native';

import Translation from './Translation'
import SigningUpDone from './SigningUpDone'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var star = '*';
// Variables to display only one step at the same time
var step1 = 'false';
var step2 = 'false';

class SigningUpSteps extends Component{
    constructor(props){
        super(props);
        this.state = {
            companyName : '',
            companyAddr: '',
            AddInfoAddr: '',
            city: '',
            zipCode: '',
            country: '',
            VATnumber: '',
            contactName: '',
            mailAddr: '',
            phone: '',
            passwd: '',
        };
    }

    render(){
        return(
        <View>
            {(()=>{
                if(step1==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressStep1} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{width: width*0.95, alignItems:'center'}}>
                          <View style={{width: width*0.8, alignItems:'flex-start'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom + star} onChangeText={(companyName) => this.setState({companyName})} value={this.state.companyName}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].adr + star} onChangeText={(companyAddr) => this.setState({companyAddr})} value={this.state.companyAddr}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].compl_adr} onChangeText={(AddInfoAddr) => this.setState({AddInfoAddr})} value={this.state.AddInfoAddr}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].ville + star} onChangeText={(city) => this.setState({city})} value={this.state.city}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].code_post + star} onChangeText={(zipCode) => this.setState({zipCode})} value={this.state.zipCode}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].pays + star} onChangeText={(country) => this.setState({country})} value={this.state.country}/>
                            </View>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].tva} onChangeText={(VATnumber) => this.setState({VATnumber})} value={this.state.VATnumber}/>
                          </View>
                        </View>
                        <TouchableHighlight onPress={this._onPressStep2} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        </View>
                    );
                }else if (step2==='true'){
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressStep1}style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressStep2} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        <View style={{width: width*0.95, alignItems:'center'}}>
                          <View style={{width: width*0.8, alignItems:'flex-start'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom_contact + star} onChangeText={(contactName) => this.setState({contactName})} value={this.state.contactName}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].mail + star} onChangeText={(mailAddr) => this.setState({mailAddr})} value={this.state.mailAddr}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].tel + star} onChangeText={(phone) => this.setState({phone})} value={this.state.phone}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={styles.textToFill2} secureTextEntry={true} underlineColorAndroid={'transparent'} placeholder={Translation[lang].mdp + star} onChangeText={(passwd) => this.setState({passwd})} value={this.state.passwd}/>
                            </View>
                          </View>
                        </View>
                        </View>
                    );
                } else {
                    return(
                        <View>
                        <TouchableHighlight onPress={this._onPressStep1} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 1 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_entr}</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressStep2} style={styles.inscription} underlayColor='#FFFFFF'>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#A4D04A", fontWeight:'bold', fontSize:24}}> 2 </Text>
                            <Text style={{color:'#000000', fontSize:24}}>{Translation[lang].info_contact}</Text>
                        </View>
                        </TouchableHighlight>
                        </View>
                    );
                }
            })()}
        </View>
        );
    }
    
    _onPressStep1 = () =>{
    if(step1 === 'true'){
      step1 = 'false';
    }else{
      step1 = 'true';
      step2 = 'false';
    }
    this.forceUpdate();
  };
  
  _onPressStep2 = () =>{
    if(step2 === 'true'){
      step2 = 'false';
    }else{
      step2 = 'true';
      step1 = 'false';
    }
    this.forceUpdate();
  };
}

export default class SigningUpTwoSteps extends Component {
    render(){
        BackAndroid.addEventListener('Back',this.onBackAndroid);
        return(
        <View style={{flex:1}}>
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    {Translation[lang].inscript}
                </Text>
                <View style={styles.mainWindow}>
                    <SigningUpSteps/>
                    <TouchableHighlight onPress={this.onPressInscription} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A', marginBottom:20}]} underlayColor="rgb(138,183,46)">
                        <Text style={styles.buttonText}>{Translation[lang].sinscrire}</Text>
                    </TouchableHighlight>
                    <View style={{alignItems:'center', width:width*0.9}}>
                        <Text numberOfLines={4}>
                            <Text style={{color:'#000000'}}>{Translation[lang].texte_cgu1}</Text>
                            <Text style={{color:'#A4D04A'}}>{Translation[lang].texte_cgu2}</Text>
                            <Text style={{color:'#000000'}}>{Translation[lang].texte_cgu3}</Text>
                        </Text>
                    </View>
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
				name: 'SigningUpDone',
				component: SigningUpDone,
			})
		}
	};
    
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
