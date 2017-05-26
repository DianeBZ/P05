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
   Navigator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Company from './Company';
import Pricing from './Pricing';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

import Translation from './Translation';

let answerOpen=['false','false','false','false','false','false','false','false'
,'false','false','false','false','false','false','false'];
// when an answer appears below its question,the corresponding element of answerOpen turns to be 'true'
let changeRow=0;


export default class FAQ extends Component {

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
          <ScrollView>
             <View style={styles.containerTitle}>
                <View style={styles.separation}>
                </View>
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(0)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question1}
                   </Text>
                </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if (answerOpen[0]==='true'){
                         return(
                           <View style={styles.containerMain}>
                              <View style={styles.lineWithButton}>
                                <Text style={styles.textLineWithButton}>
                                    {Translation[lang].q1_answer_1}
                                </Text>
                                <TouchableHighlight underlayColor="#F2F2F2" onPress={this._goToAbout}>
                                  <Text style={styles.textButton}>
                                      {Translation[lang].q1_answer_2}
                                  </Text>
                                </TouchableHighlight>
                                <Text style={styles.textLineWithButton}>
                                    {Translation[lang].q1_answer_3}
                                </Text>
                              </View>
                              <Text style={styles.instructions}>
                                  {Translation[lang].q1_answer_4}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(1)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question2}
                   </Text>
                </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[1] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q2_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(2)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question3}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[2] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q3_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(3)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question4}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[3] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q4_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(4)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question5}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[4] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q5_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(5)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question6}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[5] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q6_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(6)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question7}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[6] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q7_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(7)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question8}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[7] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q8_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(8)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question9}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[8] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q9_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(9)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question10}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[9] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q10_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(10)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question11}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[10] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q11_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(11)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question12}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[11] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q12_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(12)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question13}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[12] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q13_answer_1}
                               </Text>
                               <View style={styles.lineWithButton}>
                                 <Text style={styles.textLineWithButton}>
                                     {Translation[lang].q13_answer_2}
                                 </Text>
                                 <TouchableHighlight underlayColor="F2F2F2" onPress={this._goToPricing}>
                                   <Text style={styles.textButton}>
                                       {Translation[lang].q13_answer_3}
                                   </Text>
                                 </TouchableHighlight>
                               </View>
                            </View>

                         );
                      }
                   })()}
                </View>
             </View>

             <View style={styles.containerTitle}>
                <View style={styles.separation}>
                </View>
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(13)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question14}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[13] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q14_answer}
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
                <TouchableHighlight underlayColor='#F2F2F2' onPress={()=>this._onPressQuestion(14)}>
                   <Text style={styles.stepTitle}>
                      {Translation[lang].question15}
                   </Text>
                 </TouchableHighlight>
             </View>
             <View style={styles.containerStep}>
                <View style={styles.separation}>
                </View>
                <View style={styles.containerMain}>
                   {(() =>{
                      if(answerOpen[14] === 'true'){
                         return(
                            <View style={styles.containerMain}>
                               <Text style={styles.instructions}>
                                  {Translation[lang].q15_answer}
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
 _onPressQuestion=(index)=>{
     if (answerOpen[index]==='true'){
         answerOpen[index]='false';
     }else{
        answerOpen[changeRow]='false';
        answerOpen[index]='true';
     }
    this.forceUpdate();
    changeRow=index;
    //answerOpen[index]='false';
 };// close the answer which was opened ,open the answer whose question is clicked
 _goToAbout=()=>{
   BackAndroid.removeEventListener('Back', this.onBackAndroid);
 	const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name: 'Company',
         component: Company,
       })
     }
 };// a link to the page company when clicking the green word 'about'.

 _goToPricing=()=>{
   BackAndroid.removeEventListener('Back', this.onBackAndroid);
   const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name: 'Pricing',
         component: Pricing,
       })
     }
 };// a link to the page pricing when clicking the green word 'pricing'
}

const styles = StyleSheet.create({
   container: {
      marginTop:heightWindow*0.08,
      flex:1,
      backgroundColor:"#F2F2F2",
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
      marginRight:10,
      fontSize: 15,
      fontWeight:'bold',
      color: '#000000',
   },
   separation:{
      marginLeft:15,
      width: 5,
      backgroundColor: '#185177',
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
      paddingRight:10,
   },
   lineWithButton:{
     width:widthWindow*9/10,
     flexDirection:'row',

   },
   textLineWithButton:{
     color:'#000000',
     fontSize:15,
   },
   textButton:{
     color:'#A4D04A',
     fontSize:15,
   },
});