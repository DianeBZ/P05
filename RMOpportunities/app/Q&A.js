import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Image,
   View,
   Dimensions,
   ScrollView,
   TouchableHighlight,
   BackAndroid,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

import Translation from './Translation';

let q1='false';
let q2='false';
let q3='false';
let q4='false';
let q5='false';
let q6='false';
let q7='false';
let q8='false';
let q9='false';
let q10='false';
let q11='false';
let q12='false';
let q13='false';
let q14='false';
let q15='false';

export default class Qa extends Component {

  constructor(props) {
   super(props);
 }

  render() {
     BackAndroid.addEventListener('Back',this.onBackAndroid);
     return (
       <View style={styles.container}>
          <View style={styles.header} >
             <LinearGradient
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0,1.0]}
                colors={['#19547b', '#ffd89b']}
                style={styles.gradient}>
                <View style={styles.headerIcon}>
                   <Image source={require('../img/help.png')} style = {styles.logoLeft} />
                </View>
                <Text style={styles.title}>
                   {Translation[lang].qa_title}
                </Text>
                <View style={styles.headerIcon}>
                   <Image source={require('../img/qa.png')} style = {styles.logoRight} />
                </View>
             </LinearGradient>
          </View>
        </View>
     );
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
      marginTop:heightWindow*0.08,
      flex:1,
   },
   gradient:{
      width: widthWindow,
      flexDirection:'row',
      paddingTop:15,
      paddingBottom:15
   },
   header: {
      alignItems: 'center',
      marginBottom:15,
   },
   headerIcon: {
      width:widthWindow/4,
      alignItems:'center',
      alignSelf:'center',
   },
   logoLeft:{
      transform: [{ rotate: '-25deg'}],
      width: 70,
      height: 70,
   },
   title: {
      width:widthWindow/2,
      fontSize: 25,
      textAlign: 'center',
      color: '#333333',
   },
   logoRight:{
      width: 70,
      height: 70,
   },
});

module.exports = Qa;
