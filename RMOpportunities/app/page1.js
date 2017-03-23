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
} from 'react-native';

import EnTete from './enTete'

export default class AwesomeProject extends Component {
	state = { 
		selected1: 'java', 
		selected2: 'js',
		selected3: 'cpp',
	};
	
	render() {
		return (
			<View style={styles.container}>
			    <EnTete/>
				<View style={styles.container}>
					<Image source={require('../img/warehouse.jpg')} style={styles.image_background}>
						<View style={styles.container_button}>
							<Button onPress={onPressConnexion} title=" Connexion " style={{flexBasis: 70}} />
							<Button onPress={onPressInscription} title="Inscription" color="#485FD1" style={{flexBasis: 70}} />
						</View>
						
						
						<View style={styles.container_picker}>
							<Picker
								  selectedValue={this.state.selected1}
								  onValueChange={this.onValueChange.bind(this,'value')}
								  style={styles.picker} >
								  <Picker.Item label="Java" value="java" />
								  <Picker.Item label="JavaScript" value="js" />
								  <Picker.Item label="C++" value="cpp" />
							</Picker>
							<TextInput
								  defaultValue={"trouver par nom, n CAS"}
								  editable={true}
								  style={{flexBasis: 150,}}
							/>
						</View>
						
						<View style={styles.container_button_r}>
							<Button onPress={onPressRecherche} title="Recherche" color="#A4D04A" style={{flexBasis: 70}} />
						</View>
					</Image>
				</View>
			</View>
		);
	}
  
	onValueChange = (key: string, value: string) => {  
		const newState = {};
		newState[key] = value; 
		this.setState(newState);
		this.selectedValue = value;
	};
}

const onPressConnexion = () => {
  Alert.alert('Button has been pressed!');
};

const onPressInscription = () => {
  Alert.alert('Button has been pressed!');
};

const onPressRecherche = () => {
	Alert.alert('Button has been pressed!');
};

const styles = StyleSheet.create({
	  container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
			flexDirection: 'column',
	  },
	  container_button: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			height: 350,
			alignSelf: 'center',
	  },
	  container_button_r: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			alignSelf: 'center',
	  },
	  container_picker: {
			flexGrow: 0,
			flexShrink: 0,
			justifyContent: 'center',
			flexWrap: 'wrap',
			flexDirection: 'row',
			width: 300,
			height:50,
			alignSelf: 'center',
	  },
	  toolbar: {
			backgroundColor: '#FFFFFF',
			height: 50,
			width: 400,
	  },
	  image_background: {
			width: 400,
			height: 515,
	  },
	  picker: {
			flexBasis: 90,
			backgroundColor: '#FFFFFF',
			padding:5,
	  },
});