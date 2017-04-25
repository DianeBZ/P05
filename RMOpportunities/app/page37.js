import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

export default class AlertProduits extends Component{

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    search= () =>{
      alert(this.state.text+' a été bien ajouté');
    }
  render(){
    return(
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
        <View style={styles.containerMain}>
          <View style = {styles.containerText}>
            <Text style = {styles.title}>
              Alertes produits
            </Text>
            <Text style = {styles.instructions}>
              ajouter une alerte avec un numéro {'\n'}
              d{'\''}indentification afin d{'\''}être notifié dès la{'\n'}
              mise en ligne d'un produit spécifique
            </Text>
          </View>
          <View style={styles.containerAjouteAlerte}>
            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'}
            placeholder="Numéro d'indentification (CAS ou EINECS)"
            onChangeText={(text) => this.setState({text})}
            />
            <TouchableHighlight style={styles.bouton}>
              <Text style={{fontSize:heightWindow*0.03,color:'white'}} onPress={this.search.bind(this)}>
                ajouter
              </Text>
            </TouchableHighlight>
          </View>
          <View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start',marginLeft:5}}>
            <Text style = {styles.titleAV}>
                Alertes définies
            </Text>
          </View>
          <View style = {styles.header}>
            <View style = {styles.listHeaderFirst}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
                Numéro d{'\''}indentification {'\n'}(CAS ou EINECS)
              </Text>
            </View>
            <View style = {styles.listHeader}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
                Activer
              </Text>
            </View>
            <View style = {styles.listHeader}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
                Supprimer
              </Text>
            </View>
          </View>
          <View style={styles.containerContenu}>

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
  containerAjouteAlerte:{
    margin:10,
    flexDirection:'row',
  },
  textToFill:{
    width:widthWindow*0.6,
    height:heightWindow*0.05,
    fontSize:11,
    padding:5,
    borderWidth:1,
    borderColor:'#CCC',
  },
  bouton:{
    width:widthWindow*0.2,
    height:heightWindow*0.05,
    backgroundColor:'#A4D04A',
    alignItems:'center',
    justifyContent:'center',
  },
  titleAV: {
  fontSize: 20,
  color: '#333333',
  textAlign: 'left',
  },
  header: {
  width: widthWindow,
  //height: heightWindow * 0.12,
  //alignItems: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'center',
  },
  listHeader: {
  justifyContent: 'center',
  alignSelf: 'center',
    padding: 5,
    width: 0.16 * widthWindow,
    height: heightWindow * 0.05,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',

  },
  listHeaderFirst:{
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    width: 0.4 * widthWindow,
    height: heightWindow * 0.05,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  containerContenu: {
  width: widthWindow*0.72,
  flexDirection:'row',
  height: heightWindow * 0.23,
  backgroundColor: '#F5FCFF',
  padding: 5,
  borderWidth: 1,
  borderRadius: 5,
  margin: 5,
  borderColor: '#CCC',
  },
});
