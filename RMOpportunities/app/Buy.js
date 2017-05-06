import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Image,
   View,
   Dimensions,
   ScrollView,
   TouchableHighlight,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

import Translation from './Translation';
let step1='false';
let step2='false';
let step3='false';


export default class Buy extends Component {
   constructor(props) {
		super(props);
	}
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header} >
               <LinearGradient
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  locations={[0,1.0]}
                  colors={['#185177', '#F6D092']}
                  style={styles.gradient}>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/buy.png')} style = {styles.logoLeft} />
                  </View>
                  <Text style={styles.title}>
                     {Translation[lang].buy_title}
                  </Text>
                  <View style={styles.headerIcon}>
                     <Image source={require('../img/checklist.png')} style = {styles.logoRight} />
                  </View>
               </LinearGradient>
            </View>
            <ScrollView>
               <View style={styles.containerTitle}>
                  <View style={styles.separation}>
                  </View>
                  <TouchableHighlight onPress={this._onPressStep1}>
                     <Text style={styles.stepTitle}>
                        {Translation[lang].step} 1 : {Translation[lang].buy_step1_title}
                     </Text>
                  </TouchableHighlight>
               </View>
               <View style={styles.containerStep}>
                  <View style={styles.separation}>
                  </View>
                  <View style={styles.containerMain}>
                     {(() =>{
                        if (step1==='true'){
                           return(
                              <View style={styles.containerMain}>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step1_1}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step1_2}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step1_3}
                                 </Text>
                              </View>
                           );
                        }
                     })()}
                  </View>
               </View>
               <View style={styles.containerTitle}>
                  <View style={styles.separation}>
                  </View>
                  <TouchableHighlight onPress={this._onPressStep2}>
                     <Text style={styles.stepTitle}>
                        {Translation[lang].step} 2 : {Translation[lang].buy_step2_title}
                     </Text>
                  </TouchableHighlight>
               </View>
               <View style={styles.containerStep}>
                  <View style={styles.separation}>
                  </View>
                  <View style={styles.containerMain}>
                     {(() =>{
                        if(step2 === 'true'){
                           return(
                              <View style={styles.containerMain}>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step2_1}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step2_2}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step2_3}
                                 </Text>
                              </View>
                           );
                        }
                     })()}
                  </View>
               </View>
               <View style={styles.containerTitle}>
                  <View style={styles.separation}>
                  </View>
                  <TouchableHighlight onPress={this._onPressStep3}>
                     <Text style={styles.stepTitle}>
                        {Translation[lang].step} 3 : {Translation[lang].buy_step3_title}
                     </Text>
                  </TouchableHighlight>
               </View>
               <View style={styles.containerStep}>
                  <View style={styles.separation}>
                  </View>
                  <View style={styles.containerMain}>
                     {(() =>{
                        if(step3 === 'true'){
                           return(
                              <View style={styles.containerMain}>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step3_1}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step3_2}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step3_3}
                                 </Text>
                                 <Text style={styles.instructions}>
                                    {Translation[lang].buy_step3_4}
                                 </Text>
                              </View>
                           );
                        }
                     })()}
                  </View>
               </View>
            </ScrollView>
         </View>

      );
   }


   _onPressStep1 = () =>{
      if(step1 === 'true'){
         step1 = 'false';
      }else{
         step1 ='true';
         step2 = 'false';
         step3 ='false';
      }
      this.forceUpdate();
   };
   _onPressStep2 = () =>{
      if(step2 === 'true'){
         step2 = 'false';
      }else{
         step2 ='true';
         step1 = 'false';
         step3 ='false';
      }
      this.forceUpdate();
   };
   _onPressStep3 = () =>{
      if(step3 === 'true'){
         step3 = 'false';
      }else{
         step3 ='true';
         step1 = 'false';
         step2 ='false';
      }
      this.forceUpdate();
   };
   _onLangChange = (key: string, value: string) => {
      lang = value;
     this.forceUpdate();
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
   containerMain: {
      width: widthWindow,
      justifyContent:'center',
      alignItems:'center',
      marginRight:5,
      marginBottom:15,
   },
   stepTitle: {
      marginLeft:10,
      fontSize: 15,
      fontWeight:'bold',
      color: '#000000',
   },
   instructions: {
      width:widthWindow*9/10,
      fontSize: 15,
      color: '#000000',
      marginBottom: 5,
   },
   containerStep: {
      width:widthWindow,
      flexDirection:'row',
   },
   containerTitle: {
      width:widthWindow,
      flexDirection:'row',
      minHeight:30,
   },
   separation:{
      marginLeft:15,
      width: 5,
      backgroundColor: '#185177',
   },

});

module.exports = Buy;
