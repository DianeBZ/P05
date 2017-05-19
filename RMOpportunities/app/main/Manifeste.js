import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, BackAndroid, Navigator,} from 'react-native';

import Translation from './Translation';
import SigningUp from './SigningUp';
import LinearGradient from 'react-native-linear-gradient';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

// Page manifesteRegister
// You will see the main content in "ScrollView".
// _onPressRegister: go to the page of "SigningUp" 
// when you clicked "Registre".
export default class Manifeste extends Component{
   render(){
      BackAndroid.addEventListener('Back',this.onBackAndroid);
      return(
         <View style={styles.container}>
            <View style={styles.header} >
               <LinearGradient
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  locations={[0,1.0]}
                  colors={['#185177', '#F6D092']}
                  style={styles.gradient}>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/recycle.png')} style = {styles.logoLeft} />
                  </View>
                  <Text style={styles.title}>
                     {Translation[lang].manifeste}
                  </Text>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/sprout.png')} style = {styles.logoRight} />
                  </View>
               </LinearGradient>
            </View>
            <ScrollView>
                <View style={styles.containerMain}>
                    <Text style={styles.manifesteText}>{Translation[lang].manifesteText}</Text>
                    <TouchableHighlight style={{marginTop:20, marginBottom:20}} onPress={this._onPressRegister} underlayColor='#F2F2F2'>
                       <Text style={styles.manifesteRegister}>{Translation[lang].manifesteRegister}</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
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

   _onPressRegister = () => {
      BackAndroid.removeEventListener('Back', this.onBackAndroid);
      const { navigator } = this.props;
      if (navigator) {
         navigator.push({
            name: 'SigningUp',
            component: SigningUp,
         })
      }
   };
}

const styles = StyleSheet.create({
   container: {
      marginTop:height*0.08,
      flex:1,
   },
   gradient:{
      width: width,
      flexDirection:'row',
      paddingTop:15,
      paddingBottom:15
   },
   header: {
      alignItems: 'center',
      marginBottom:15,
   },
   headerIcon: {
      width:width/4,
      alignItems:'center',
      alignSelf:'center',
   },
   logoLeft:{
      transform: [{ rotate: '-25deg'}],
      width: 70,
      height: 70,
   },
   title: {
      width:width/2,
      fontSize: 30,
      textAlign: 'center',
      color: '#333333',
   },
   logoRight:{
      width: 70,
      height: 70,
   },
   containerMain: {
      width: width,
      justifyContent:'center',
      alignItems:'center',
      marginRight:5,
      marginBottom:15,
   },
   manifesteText:{
      textAlign:'center',
      color:"#000000"
   },
   manifesteRegister:{
      textAlign:'center',
      color: '#A4D04A',
      fontSize: 16,
   },
});
