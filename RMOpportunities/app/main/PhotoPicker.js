import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import pick from './picker';


export default class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         avatarSource: null,
         data: null
      }
   }
   //avatarSource is the image took from the PhotoPicker
   render(){
      let img = this.state.avatarSource == null? null:
      <Image
         source={this.state.avatarSource}
         style={{height: 200, width: 200}}
         />
      return (
         <View style={{marginTop:100}}>
            <Text>Hello React Native</Text>
            <TouchableOpacity onPress={this.show.bind(this)}>
               <Text>Show Image Picker</Text>
            </TouchableOpacity>

            {img}
         </View>
      )
   }
   show(){
      pick((source, data) => this.setState({avatarSource: source, data: data}));
   }

}
