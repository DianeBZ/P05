import React, { Component } from 'react';
import {
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
  ScrollView,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var step1 = true;
var step2 = false;

class AjouterOffreEtapes extends Component{
    constructor(props){
        super(props);
        this.state = {
            numID:'',
            nom:'',
            numReach:'',
            nomenc:'',
            categorie:'',
            description:'',
            qte:'',
            unite:'',
            prixUnit:'',
            contenant:'',
            paysOrigine:'',
            paysStock:'',
            ville:'',
            jour:'',
            mois:'',
            year:'',
        }
    }
    
    render(){
        return(
        <View>
            {(()=>{
                if (step1){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>Etape 1: Informations produit</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>2</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Numéro d'identification*" onChangeText={(numID) => this.setState({numID})} value={this.state.numID}/>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Nom*" onChangeText={(nom) => this.setState({nom})} value={this.state.nom}/>
                                <TextInput style={[styles.textToFill, {width:width*0.35, marginLeft:width*0.05}]} underlineColorAndroid={'transparent'} placeholder="Numéro REACH" onChangeText={(numReach) => this.setState({numReach})} value={this.state.numReach}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder="Nomenclature douanière" onChangeText={(nomenc) => this.setState({nomenc})} value={this.state.nomenc}/>
                                <TextInput style={[styles.textToFill, {width:width*0.35, marginLeft:width*0.05}]} underlineColorAndroid={'transparent'} placeholder="Catégorie*" onChangeText={(categorie) => this.setState({categorie})} value={this.state.categorie}/>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>Suivant</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }else if (step2){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05, backgroundColor:"#F2F2F2"}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>1</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.05}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>Etape 2: Détails de l'annonce</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View>
                                <TextInput style={[styles.textToFill, {height:height*0.2}]} underlineColorAndroid={'transparent'} placeholder="Description: vous pouvez indiquer ici les volumes des contenants, les prix liés au transport, etc..." onChangeText={(description) => this.setState({description})} value={this.state.description}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.2}]} underlineColorAndroid={'transparent'} placeholder="Quantité*" onChangeText={(qte) => this.setState({qte})} value={this.state.qte}/>
                                <TextInput style={[styles.textToFill, {width:width*0.2}]} underlineColorAndroid={'transparent'} placeholder="Unité*" onChangeText={(unite) => this.setState({unite})} value={this.state.unite}/>                                
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:20}]} underlineColorAndroid={'transparent'} placeholder="Prix unitaire (€)*" onChangeText={(prixUnit) => this.setState({prixUnit})} value={this.state.prixUnit}/> 
                            </View>
                            <View><Text style={{fontSize:16, color:'#000000', marginTop:15}}>Date d'expiration (DLU/DLC)*</Text></View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.1}]} underlineColorAndroid={'transparent'} placeholder="1" onChangeText={(jour) => this.setState({jour})} value={this.state.jour}/>
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder="janvier" onChangeText={(mois) => this.setState({mois})} value={this.state.mois}/>
                                <TextInput style={[styles.textToFill, {width:width*0.2, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder="2017" onChangeText={(year) => this.setState({year})} value={this.state.year}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Contenant du produit*" onChangeText={(contenant) => this.setState({contenant})} value={this.state.contenant}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Pays d'origine du produit*" onChangeText={(paysOrigine) => this.setState({paysOrigine})} value={this.state.paysOrigine}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Pays de stockage actuel du produit*" onChangeText={(paysStock) => this.setState({paysStock})} value={this.state.paysStock}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder="Ville ou code postal*" onChangeText={(ville) => this.setState({ville})} value={this.state.ville}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.4, backgroundColor:'white', borderWidth:1, borderColor:'#A4D04A'}]}>
                                <Text style={{color:'#A4D04A', fontSize:20, textAlign:'center'}}>Précédent</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressSuivant2} style={[styles.button, {width: width *0.4, backgroundColor:'#A4D04A', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>Suivant</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }
            })()}
        </View>
        );
    }
    
    _changeStep = () =>{
        step1 = !step1;
        step2 = !step2;
        this.forceUpdate();
    };        
}

export default class AjouterOffre extends Component{
    render(){
        return(
        <ScrollView>
            <View style={{height: height * 0.08}}/>
            <View style={styles.window}>
                <Text style={styles.titre}>
                    Ajouter une offre
                </Text>
                <View style={styles.mainWindow}>
                    <AjouterOffreEtapes/>
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
       width: width*0.8,
       height: height*0.06,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       color: 'grey',
   },
});