import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Picker
} from 'react-native';

import Translation from './Translation';
import ProductConnection from './AddProductConnection';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var star = '*';
//Variables used to decide which step is rendered
var step1 = true;
var step2 = false;
//Variables used to decide which value is selected in pickers
var selected_cat = 'choose';
var selected_cont = 'cont';
var selected_unit = 'unit';

class AddOfferSteps extends Component{
    constructor(props){
        super(props);
        //States that will receive the value entered in textinput
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
    //Function controlling the category picker
    onCatChange = (key: string, value: string) => {
		selected_cat = value;
        this.state.categorie = value;
		this.forceUpdate();
	};
    //Function controlling the container picker
    onContChange = (key: string, value: string) => {
		selected_cont = value;
        this.state.contenant = value;
		this.forceUpdate();
	};
    //Function controlling the unity picker
    onUnitChange = (key: string, value: string) => {
		selected_unit = value;
        this.state.unite = value;
		this.forceUpdate();
	};
    
    render(){
        return(
        <View>
            {(()=>{
                if (step1){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.9, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Translation[lang].etape1}</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, backgroundColor:"#F2F2F2", width:width*0.1, alignItems:'center', justifyContent:'center'}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, color:"#000000"}}>2</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'flex-start'}}>
                            <TextInput style={[styles.textToFill, {marginLeft:width*0.1}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].num_id + star} onChangeText={(numID) => this.setState({numID})} value={this.state.numID}/>
                            <View style={{flexDirection:'row', marginLeft:width*0.1}}>
                                <TextInput style={[styles.textToFill, {width:width*0.4}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom_prod + star} onChangeText={(nom) => this.setState({nom})} value={this.state.nom}/>
                                <TextInput style={[styles.textToFill, {width:width*0.35, marginLeft:width*0.05}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].num_reach} onChangeText={(numReach) => this.setState({numReach})} value={this.state.numReach}/>
                            </View>
                            <View>
                                <TextInput style={[styles.textToFill, {width:width*0.5, marginLeft:width*0.1}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].nom_douane} onChangeText={(nomenc) => this.setState({nomenc})} value={this.state.nomenc}/>
                            </View>
                            <View>
                                <View style={[styles.viewPicker, {width:width*0.8, marginLeft:width*0.1}]}>     
                                    <Picker style={{color:'grey', marginTop:0}} selectedValue={selected_cat} onValueChange={this.onCatChange.bind(this,'value')}> 
                                        <Picker.Item label={Translation[lang].choix_cat} value='choose' /> 
                                        <Picker.Item label={Translation[lang].cosm} value={Translation[lang].cosm} />
                                        <Picker.Item label={Translation[lang].solv} value={Translation[lang].solv} />
                                        <Picker.Item label={Translation[lang].solv_reg} value={Translation[lang].solv_reg} />
                                        <Picker.Item label={Translation[lang].react} value={Translation[lang].react} />
                                        <Picker.Item label={Translation[lang].catal} value={Translation[lang].catal} />
                                        <Picker.Item label={Translation[lang].spe_chi} value={Translation[lang].spe_chi} />
                                        <Picker.Item label={Translation[lang].interm} value={Translation[lang].interm} />
                                        <Picker.Item label={Translation[lang].interm_simple} value={Translation[lang].interm_simple} />
                                        <Picker.Item label={Translation[lang].acides} value={Translation[lang].acides} />
                                        <Picker.Item label={Translation[lang].bases} value={Translation[lang].bases} />
                                        <Picker.Item label={Translation[lang].acid_ami} value={Translation[lang].acid_ami} />
                                        <Picker.Item label={Translation[lang].vit} value={Translation[lang].vit} />
                                        <Picker.Item label={Translation[lang].autres} value={Translation[lang].autres} /> 
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems:'center', marginBottom: height*0.3}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.5, backgroundColor:'#A4D04A'}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Translation[lang].suivant}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }else if (step2){
                    return(
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', width:width}}>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.1, alignItems:'center', backgroundColor:"#F2F2F2", justifyContent:'center'}}>
                                <Text onPress={this._changeStep} style={{fontSize:22, color:"#000000"}}>1</Text>
                            </View>
                            <View style={{borderWidth:1, borderColor:'#A4D04A', height:height*0.06, width:width*0.9, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:22, marginLeft:15, marginRight:15, color:"#000000"}}>{Translation[lang].etape2}</Text>
                            </View>
                            <View style={{flex:1, backgroundColor:'#F2F2F2'}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View>
                                <TextInput style={[styles.textToFill, {height:height*0.2}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].description2} onChangeText={(description) => this.setState({description})} value={this.state.description}/>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.2}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].qtte + star} onChangeText={(qte) => this.setState({qte})} value={this.state.qte}/>
                                <View style={[styles.viewPicker, {width:width*0.35}]}>     
                                    <Picker style={{color:'grey', marginTop:0}} selectedValue={selected_unit} onValueChange={this.onUnitChange.bind(this,'value')}> 
                                        <Picker.Item label={Translation[lang].unite + star} value='unit' /> 
                                        <Picker.Item label="L" value="L" />
                                        <Picker.Item label="m3" value="m3" />
                                        <Picker.Item label="mL" value="mL" />
                                        <Picker.Item label="cL" value="cL" />
                                        <Picker.Item label="gal" value="gal" />
                                        <Picker.Item label="fl oz" value="fl oz" />
                                        <Picker.Item label="in3" value="in3" />
                                        <Picker.Item label="t" value="t" />
                                        <Picker.Item label="kg" value="kg" />
                                        <Picker.Item label="g" value="g" />
                                        <Picker.Item label="cg" value="cg" />
                                        <Picker.Item label="mg" value="mg" />
                                        <Picker.Item label="oz" value="oz" /> 
                                        <Picker.Item label="lb" value="lb" /> 
                                    </Picker>
                                </View>                                
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:20}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].prix_unit + star} onChangeText={(prixUnit) => this.setState({prixUnit})} value={this.state.prixUnit}/> 
                            </View>
                            <View><Text style={{fontSize:16, color:'#000000', marginTop:15}}>{Translation[lang].date_exp}</Text></View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[styles.textToFill, {width:width*0.1}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].day + star} onChangeText={(jour) => this.setState({jour})} value={this.state.jour}/>
                                <TextInput style={[styles.textToFill, {width:width*0.3, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].month + star} onChangeText={(mois) => this.setState({mois})} value={this.state.mois}/>
                                <TextInput style={[styles.textToFill, {width:width*0.2, marginLeft:10}]} underlineColorAndroid={'transparent'} placeholder={Translation[lang].year + star} onChangeText={(year) => this.setState({year})} value={this.state.year}/>
                            </View>
                            <View>
                                <View style={[styles.viewPicker, {width:width*0.8}]}>     
                                    <Picker style={{color:'grey', marginTop:0}} selectedValue={selected_cont} onValueChange={this.onContChange.bind(this,'value')}> 
                                        <Picker.Item label={Translation[lang].cont_prod + star} value='cont' /> 
                                        <Picker.Item label={Translation[lang].ibc} value={Translation[lang].ibc} />
                                        <Picker.Item label={Translation[lang].ibc_flex} value={Translation[lang].ibc_flex} />
                                        <Picker.Item label={Translation[lang].conteneur} value={Translation[lang].conteneur} />
                                        <Picker.Item label={Translation[lang].tank_cont} value={Translation[lang].tank_cont} />
                                        <Picker.Item label={Translation[lang].palette} value={Translation[lang].palette} />
                                        <Picker.Item label={Translation[lang].bigbag} value={Translation[lang].bigbag} />
                                        <Picker.Item label={Translation[lang].plast} value={Translation[lang].plast} />
                                        <Picker.Item label={Translation[lang].metal} value={Translation[lang].metal} />
                                    </Picker>
                                </View>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].origine_prod + star} onChangeText={(paysOrigine) => this.setState({paysOrigine})} value={this.state.paysOrigine}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].stock_prod + star} onChangeText={(paysStock) => this.setState({paysStock})} value={this.state.paysStock}/>
                            </View>
                            <View>
                                <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'} placeholder={Translation[lang].ville_codep + star} onChangeText={(ville) => this.setState({ville})} value={this.state.ville}/>
                            </View>
                        </View>
                        <View style={{alignItems:'center', marginLeft:10, marginRight:10, marginTop:20}}>
						<Text numberOfLines={4}>
                            <Text style={{color:'#000000'}}>{Translation[lang].texte_cgu1}</Text>
							<Text selectable={true} style={{color:'#A4D04A'}}>{Translation[lang].texte_cgu2}</Text>
							<Text style={{color:'#000000'}}>{Translation[lang].texte_cgu3}</Text>
						</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
                            <TouchableHighlight onPress={this._changeStep} style={[styles.button, {width: width *0.27, backgroundColor:'white', borderWidth:1, borderColor:'#A4D04A'}]} underlayColor="#FFFFFF">
                                <Text style={{color:'#A4D04A', fontSize:20, textAlign:'center'}}>{Translation[lang].precedent}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressEnd} style={[styles.button, {width: width *0.27, backgroundColor:'#A4D04A', marginLeft:10}]} underlayColor="rgb(138,183,46)">
                                <Text style={styles.buttonText}>{Translation[lang].terminer}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressCancel} style={[styles.button, {width: width *0.27, backgroundColor:"rgb(223,83,79)", marginLeft:10}]} underlayColor="rgb(172,41,37)">
                                <Text style={styles.buttonText}>{Translation[lang].annuler}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    );
                }
            })()}
        </View>
        );
    }
    //Function used when changing step (touching numbers or pressing next/previous)
    _changeStep = () =>{
        step1 = !step1;
        step2 = !step2;
        this.forceUpdate();
    }; 
    //Function used when pressing cancel. Going back to step1 and erase every value entered
    _onPressCancel = () =>
    {
        step1 = !step1;
        step2 = !step2;
        this.setState({
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
        });
        selected_cat = 'choose';
        selected_cont = 'cont';
        selected_unit = 'unit';
        this.forceUpdate();
    }
}

export default class AddOffer extends Component{
    //Function called when the component is updating. If the user logs out, the page rendered will be 'ProductConnection'
    componentWillUpdate(){
        if (connection===0){
            const {navigator} = this.props;
            var i = 0;
            while(navigator.getCurrentRoutes()[i].name != 'AddOffer'){
                i=i+1;
            }
            if (navigator){
                navigator.replaceAtIndex({
                    name: 'ProductConnection',
                    component: ProductConnection,
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
                    {Translation[lang].aj_offre}
                </Text>
                <View style={styles.mainWindow}>
                    <AddOfferSteps/>
                </View>
            </View>
        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
   window:{
       width: width,
       backgroundColor: '#F2F2F2',
       alignItems: 'center',
   },
   mainWindow:{
       width: width,
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
    textToFill:{
       width: width*0.8,
       height: height* 0.08,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       color: 'grey',
       borderRadius: 3,
   },
   viewPicker:{
       width: width*0.8,
       height: height* 0.08,
       borderWidth: 1,
       borderColor: "#000000",
       marginTop: 15,
       borderRadius: 3,
   },
});