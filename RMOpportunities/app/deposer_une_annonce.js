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
  BackAndroid,
  ScrollView
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var Etape1 = true;
var Etape2 = false;

class MenuDepotAnnonce extends Component
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
                if (Etape1){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>Etape 1: Informations produit</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>2</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Numéro d'identification*" onChangeText={(numID) => this.setState({numID})} value={this.state.numID}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Nom*" onChangeText={(nom) => this.setState({nom})} value={this.state.nom}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="Numéro REACH" onChangeText={(numReach) => this.setState({numReach})} value={this.state.numReach}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Nomenclature douanière" onChangeText={(nomenc) => this.setState({nomenc})} value={this.state.nomenc}/>
                                <TextInput style={styles.textToFill2} underlineColorAndroid={'transparent'} placeholder="Catégorie*" onChangeText={(categorie) => this.setState({categorie})} value={this.state.categorie}/>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>Suivant</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }else if (Etape2){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>1</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>Etape 2: Détails de l'annonce</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
						<Text style={[styles.sousTitre, {marginLeft:12}]}>
							Description*
						</Text>
						<View style={{alignItems:'center'}}>
                            <TextInput style={styles.textToFill3} underlineColorAndroid={'transparent'} placeholder="Vous pouvez indiquer ici les volumes des contenants, les prix liés au transport..." onChangeText={(description) => this.setState({description})} value={this.state.description}/>
                        <Text numberOfLines={3}>
							{this.state.description}
						</Text>
						</View>
						
						<Text style={[styles.sousTitre, {marginLeft:12}]}>
							Quantité souhaitée*
						</Text>
						<View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill2, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Quantité" onChangeText={(qtteSouhaitee) => this.setState({qtteSouhaitee})} value={this.state.qtteSouhaitee}/>                                
                        </View>
                       
						<View style={{alignItems:'center'}}>
						<Text numberOfLines={4}>
                            <Text style={{color:'#000000'}}>Je confirme avoir lu et accepté les </Text>
							<Text selectable={true} style={{color:'#A4D04A'}}>Conditions d&#39;utilisation de RMOpportunities</Text>
							<Text style={{color:'#000000'}}>, que mes informations sont correctes et que je les maintiendrai à jour.</Text>
						</Text>
                        </View>
						
						<View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.27, backgroundColor:'white', borderWidth:1, borderColor:'#A4D04A'}]}>
                                <Text style={{color:'#A4D04A', fontSize:20, textAlign:'center'}}>Précédent</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressSuivant2} style={[styles.button, {width: width *0.27, backgroundColor:'#A4D04A', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>Terminer</Text>
                            </TouchableHighlight>
							<TouchableHighlight onPress={this._onPressAnnuler} style={[styles.button, {width: width *0.27, backgroundColor:'red', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>Annuler</Text>
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
        Etape1 = !Etape1;
        Etape2 = !Etape2;
        this.forceUpdate();
    };
}
	
export default class DeposerUneAnnonce extends Component
{
    render()
	{
        return(
        <ScrollView>
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    Déposer une annonce
                </Text>
                <View style={styles.mainWindow}>
                    <MenuDepotAnnonce/>
                </View>
            </View>
        </ScrollView>);
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
	