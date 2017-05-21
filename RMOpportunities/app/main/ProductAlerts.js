import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  BackAndroid,
} from 'react-native';

import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ProductAlerts extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }// 'text' is the content(registry number) inputed by the user
    search= () =>{
      alert(this.state.text+ Translation[lang].bien_ajouté);
    }// inform the user that the alert is added successfully
  render(){
	BackAndroid.addEventListener('Back',this.onBackAndroid);
    return(
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
        <View style={styles.containerMain}>
          <View style = {styles.containerText}>
            <Text style = {styles.title}>
				{Translation[lang].al_prod}
            </Text>
            <Text style = {styles.instructions}>
			  {Translation[lang].al_prod_text}
            </Text>
          </View>
          <View style={styles.containerAjouteAlerte}>
            <TextInput style={styles.textToFill} underlineColorAndroid={'transparent'}
            placeholder={Translation[lang].num_id}
            onChangeText={(text) => this.setState({text})}
            />
            <TouchableHighlight style={styles.bouton}>
              <Text style={{fontSize:height*0.03,color:'white'}} onPress={this.search.bind(this)}>
				  {Translation[lang].aj}
              </Text>
            </TouchableHighlight>
          </View>
          <View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start',marginLeft:5}}>
            <Text style = {styles.titleAV}>
                {Translation[lang].al_def}
            </Text>
          </View>
          <View style = {styles.header}>
            <View style = {styles.listHeaderFirst}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
                {Translation[lang].num_id}
              </Text>
            </View>
            <View style = {styles.listHeader}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
				  {Translation[lang].activer}
              </Text>
            </View>
            <View style = {styles.listHeader}>
              <Text style = {{textAlign: 'center',fontSize:10,}}>
				  {Translation[lang].supprimer}
              </Text>
            </View>
          </View>
          <View style={styles.containerContenu}>

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
  containerAjouteAlerte:{
    margin:10,
    flexDirection:'row',
  },
  textToFill:{
    width:width*0.6,
    height:height*0.05,
    fontSize:11,
    padding:5,
    borderWidth:1,
    borderColor:'#CCC',
  },
  bouton:{
    width:width*0.2,
    height:height*0.05,
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
  width: width,
  //height: height * 0.12,
  //alignItems: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'center',
  },
  listHeader: {
  justifyContent: 'center',
  alignSelf: 'center',
    padding: 5,
    width: 0.16 * width,
    height: height * 0.05,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',

  },
  listHeaderFirst:{
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    width: 0.4 * width,
    height: height * 0.05,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  containerContenu: {
  width: width*0.72,
  flexDirection:'row',
  height: height * 0.23,
  backgroundColor: '#F2F2F2',
  padding: 5,
  borderWidth: 1,
  borderRadius: 5,
  margin: 5,
  borderColor: '#CCC',
  },
});
