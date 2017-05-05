import React, { Component } from 'react';
import Translation from './Translation';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;


//We change this and add some foncs to realise
//the display of the list of factures when we need.
var dataSource = null;

export default class EditAccount extends Component{

  render(){
    return(
      <View style={styles.container}>
        <View style={{height:heightWindow*0.08}}/>
          <View style={styles.containerMain}>
            <View style = {styles.containerText}>
              <Text style = {styles.title}>
                {Translation[lang].modif_compte}
              </Text>
              <Text style = {styles.instructions}>
                {Translation[lang].modif_infos}
              </Text>
            </View>
            <View>
              <Text style = {styles.titleAV}>
                  {Translation[lang].contact_text}
              </Text>
            </View>
            <TouchableHighlight style={{marginTop:10}}>
              <Text style={{fontSize:20,color:'#A4D04A'}} onPress={this.contactPress.bind(this)}>
                {Translation[lang].mail_contact}
              </Text>
            </TouchableHighlight>
          </View>
      </View>
    )
  }


    contactPress=()=>{

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
  titleAV: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
  },
  });
