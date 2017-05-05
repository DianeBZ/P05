import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Translation from './Translation';
import DemandConnection from './AddDemandConnection';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var Step1 = true;
var Step2 = false;

var star = "*";

class MenuAddDemand extends Component
{
    constructor(props)
	{
        super(props);
        this.state = 
		{
            numIdentification : '',
            nom: '',
            numReach: '',
            categorie: '',
            description: '',
            qtteSouhaitee: '',
        };
    }

	render(){
        return(
        <ScrollView>
            {(()=>{
                if (Step1){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Translation[lang].etape1}</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>2</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].num_id + star} onChangeText={(numID) => this.setState({numID})} value={this.state.numID}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom_prod + star}  onChangeText={(nom) => this.setState({nom})} value={this.state.nom}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].num_reach} onChangeText={(numReach) => this.setState({numReach})} value={this.state.numReach}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom_douane} onChangeText={(nomenc) => this.setState({nomenc})} value={this.state.nomenc}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder={Translation[lang].categorie + star} onChangeText={(categorie) => this.setState({categorie})} value={this.state.categorie}/>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Translation[lang].suivant}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }else if (Step2){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>1</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Translation[lang].etape2}</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
						<Text style={[styles.sousTitre, {marginLeft:12}]}>
							{Translation[lang].description + star}
						</Text>
						<View style={{alignItems:'center'}}>
                            <TextInput style={styles.textToFill3} underlineColorAndroid={'transparent'} placeholder={Translation[lang].det_desc} onChangeText={(description) => this.setState({description})} value={this.state.description}/>
                        <Text numberOfLines={3}>
							{this.state.description}
						</Text>
						</View>
						
						<Text style={[styles.sousTitre, {marginLeft:12}]}>
							{Translation[lang].qtte_souh + star}
						</Text>
						<View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].qtte} onChangeText={(qtteSouhaitee) => this.setState({qtteSouhaitee})} value={this.state.qtteSouhaitee}/>                                
                        </View>
                       
						<View style={{alignItems:'center'}}>
						<Text numberOfLines={4}>
                            <Text style={{color:'#000000'}}>{Translation[lang].texte_cgu1} </Text>
							<Text selectable={true} style={{color:'#A4D04A'}}>{Translation[lang].texte_cgu2}</Text>
							<Text style={{color:'#000000'}}>{Translation[lang].texte_cgu3}</Text>
						</Text>
                        </View>
						
						<View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.27, backgroundColor:'white', borderWidth:1, borderColor:'#A4D04A'}]}>
                                <Text style={{color:'#A4D04A', fontSize:20, textAlign:'center'}}>{Translation[lang].precedent}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressSuivant2} style={[styles.button, {width: width *0.27, backgroundColor:'#A4D04A', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Translation[lang].terminer}</Text>
                            </TouchableHighlight>
							<TouchableHighlight onPress={this._onPressAnnuler} style={[styles.button, {width: width *0.27, backgroundColor:'red', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Translation[lang].annuler}</Text>
                            </TouchableHighlight>
						</View>
                        
                    </View>
                    );
                }
            })()}
        </ScrollView>
        );
    }
	
	_changeStep = () =>
	{
        Step1 = !Step1;
        Step2 = !Step2;
        this.forceUpdate();
    };
}
	
export default class AddDemand extends Component{
    
    componentWillUpdate(){
        if (connection===0){
            const {navigator} = this.props;
            var i = 0;
            while(navigator.getCurrentRoutes()[i].name != 'AddDemand'){
                i=i+1;
            }
            if (navigator){
                navigator.replaceAtIndex({
                    name: 'DemandConnection',
                    component: DemandConnection,
                }, i)
            }
        }
    }
    
    render(){
        return(
        <ScrollView>
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    {Translation[lang].aj_demande}
                </Text>
                <View style={styles.mainWindow}>
                    <MenuAddDemand/>
                </View>
            </View>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
   window:{
       width: width,
	   //height: height*0.93,
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
   sousTitre:{
       fontSize: 20,
       textAlign: 'left',
       color: '#000000',
       marginTop: 15,
       marginBottom: 10
   },
   button:{
        height: width*0.09,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius:5,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    textToFill:{
       width: width*0.85,
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
	   marginLeft: width*0.05,
       color: 'grey',
   },
      textToFill3:{
       width: width*0.9,
       height: height*0.2,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       marginRight: width*0.05,
	   marginLeft: width*0.05,
       color: 'grey',
   },
});
	