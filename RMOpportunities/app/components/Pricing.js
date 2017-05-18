import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight, BackAndroid, Navigator,} from 'react-native';

import Translation from './Translation';
import Contact from './Contact';
import LinearGradient from 'react-native-linear-gradient';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Pricing extends Component{
   render(){
      BackAndroid.addEventListener('Back',this.onBackAndroid);
      return(
         <View style={styles.container}>
            <View style={styles.header}>
               <LinearGradient
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  locations={[0,1.0]}
                  colors={['#185177', '#F6D092']}
                  style={styles.gradient}>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/invoice.png')} style = {styles.logoLeft} />
                  </View>
                  <Text style={styles.title}>
                     {Translation[lang].pricing}
                  </Text>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/medal.png')} style = {styles.logoRight} />
                  </View>
               </LinearGradient>
            </View>
            <ScrollView >
               <View style={styles.containerMain}>


                  {(() => {
                     if(lang==='fr')
                     return(
                        <View style={styles.containerMain}>
                           <Image source={require('../img/Pricing_fr.jpg')} style={styles.imagePricing} />
                        </View>
                     );
                     else
                     return(
                        <View style={styles.containerMain}>
                           <Image source={require('../img/Pricing_en.jpg')} style={styles.imagePricing} />
                        </View>
                     );
                  })()}

                  <TouchableHighlight onPress={this._onPressContact} style={{width: width*0.5,backgroundColor:'#A4D04A', justifyContent:'center', borderRadius:5,}} underlayColor="rgb(138,183,46)">
                     <Text style={styles.buttonText}>{Translation[lang].contactUs}</Text>
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

   _onPressContact = () => {
      BackAndroid.removeEventListener('Back', this.onBackAndroid);
      const { navigator } = this.props;
      if (navigator) {
         navigator.push({
            name: 'Contact',
            component: Contact,
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
      marginTop:15,
   },
   logoRight:{
      width: 70,
      height: 70,
   },
   containerMain: {
      width: width,
      justifyContent:'center',
      alignItems:'center',
      marginRight:10,
      marginBottom:15,
   },
   imagePricing:{
      height:1230,
      width:width,
   },
   buttonText:{
      color: "white",
      textAlign: "center",
      fontSize: 20,
      alignItems: 'center',
      alignSelf: 'center',
   },

});
