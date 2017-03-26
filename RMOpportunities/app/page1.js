import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ToolbarAndroid,
  Picker,
  TextInput,
  Dimensions,
} from 'react-native';
import EnTete from './enTete';

var width_window = Dimensions.get('window').width; 
var height_window = Dimensions.get('window').height;
var selected = 'tlc';
var textInput = 'TextInput';

export default class AwesomeProject extends Component {
	render() {
		return (
			<View style={styles.container}>
			    <EnTete/>
				<View style={styles.container}>
					<Image source={require('../img/warehouse.jpg')} style={styles.imageBackground}>
						<View style={styles.containerButton}>
							<Button 
								onPress={onPressConnexion} 
								title=" Connexion " 
								style={{flexBasis: 70}} 
							/>
							<Button 
								onPress={onPressInscription} 
								title="Inscription" 
								color="#841584" 
								style={{flexBasis: 70}} 
							/>
						</View>
						
						
						<View style={styles.containerPicker}>
							<Picker
								selectedValue={selected}
								onValueChange={this.onValueChange.bind(this,'value')}
								style={styles.picker} >
								<Picker.Item label="Toutes les categories" value="tlc" />
								<Picker.Item label="Produits pour la cosmetique, les aromes et parfums" value="Pcos" />
								<Picker.Item label="Solvants" value="sol" />
								<Picker.Item label="Solvants regeneres" value="sol_r" />
								<Picker.Item label="Reactifs" value="rea" />
								<Picker.Item label="Catalyseurs" value="cat" />
								<Picker.Item label="Specialites chimiques" value="spe" />
								<Picker.Item label="Intermediaires" value="int" />
								<Picker.Item label="Intermediaires simples" value="int_s" />
								<Picker.Item label="Acides" value="aci" />
								<Picker.Item label="Bases" value="bas" />
								<Picker.Item label="Acides amines" value="aci_a" />
								<Picker.Item label="Vitamines" value="vit" />
								<Picker.Item label="Autres" value="aut" />
							</Picker>
							<TextInput
								defaultValue={"trouver par nom, n CAS"}
								maxLength = {40}
								editable={true}
								style={styles.textInput}
								onChangeText={onResponderEndEditing}
							/>
						</View>
						
						<View style={styles.containerButtonR}>
							<Button
								onPress={onPressRecherche} 
								title="Recherche" 
								color="#64FE2E" 
								style={{flexBasis: 70}} 
							/>
						</View>
					</Image>
				</View>
			</View>
		);
	}
  
	onValueChange = (key: string, value: string) => {  
		selected = value; 
		this.forceUpdate();
	};
}

const onPressConnexion = () => {
	Alert.alert('Button has been pressed!');
};

const onPressInscription = () => {
	Alert.alert('Button has been pressed!');
};

const onPressRecherche = () => {
	Alert.alert(textInput);
};

const onResponderEndEditing = (text) => {
	textInput = text;
}

const styles = StyleSheet.create({
	  container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
			flexDirection: 'column',
	  },
	  containerButton: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			height: 350,
			alignSelf: 'center',
	  },
	  containerButtonR: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			alignSelf: 'center',
	  },
	  containerPicker: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			flexWrap: 'wrap',
			flexDirection: 'row',
			width: 300,
			height:50,
			alignSelf: 'center',
	  },
	  imageBackground: {
			width: width_window,
			height: height_window*0.92,
	  },
	  picker: {
			flexBasis: 120,
			backgroundColor: '#FFFFFF',
			padding:5,
	  },
	  textInput: {
			flexBasis: 150,
			backgroundColor: '#a9a9a9',
	  }
});