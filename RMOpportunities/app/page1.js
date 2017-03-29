import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Picker,
  TextInput,
  Dimensions,
  TouchableOpacity,
  BackAndroid,
  ToastAndroid,
  Navigator,
} from 'react-native';
import EnTete from './enTete';
import Connexion from './connexion';
import inscription from './page3';

var width_window = Dimensions.get('window').width;
var height_window = Dimensions.get('window').height;
var selected = 'tlc';
var selectedKey = 'Toutes les categories';
var textInput = 'TextInput';

export default class Index extends Component {
	// Init this class and add 1 boolean value to check 
	// if the user logined. We check this because when 
	// users logined succesufully, two buttons should be hidden 
	// in this page.
	constructor(props) {
		super(props);
		this.state = {
			connexion: false
		}
	}
	
	render() {
		BackAndroid.addEventListener('Exit',this.onBackAndroid);
		return (
			<View style={styles.container}>
			    <EnTete />
				<View style={styles.container}>
					<Image source={require('../img/warehouse.jpg')} style={styles.imageBackground}>
						{(() => {
						//If user logined?
						if (connexion)
							return (
								<View style={styles.containerButton} />
							);
						else
							return (
								<View style={styles.containerButton}>
									<TouchableOpacity>
										<Button
											onPress={this.onPressConnexion}
											title=" Connexion "
											style={{flexBasis: 70}}
										/>
									</TouchableOpacity>
									<TouchableOpacity>
										<Button
											onPress={this.onPressInscription}
											title="Inscription"
											color="#841584"
											style={{flexBasis: 70}}
										/>
									</TouchableOpacity>
								</View>
							);
						})()}

						<View style={styles.containerPicker}>
							//Users can choose many catagories here.
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
							// Input Text, user input the key words that they want to search.  
							<TextInput
								defaultValue={"trouver par nom, n CAS"}
								maxLength = {40}
								editable={true}
								style={styles.textInput}
								onChangeText={this.onResponderEndEditing}
							/>
						</View>

						<View style={styles.containerButtonR}>
							//Start search!
							<TouchableOpacity>
								<Button
									onPress={onPressRecherche}
									title="Recherche"
									color="#64FE2E"
									style={{flexBasis: 70}}
								/>
							</TouchableOpacity>
						</View>
					</Image>
				</View>
			</View>
		);
	}
	
	//Get the key words from user's choice.(catagories)
	onValueChange = (key: string, value: string) => {
		// This value (selectedKey) is same as the catagorie selected.
		selectedKey = key;
		selected = value;
		this.forceUpdate();
	};

	onBackAndroid = () => {
		//If user touch the button back 2 times in 2s, he/she will quit our app
		if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now())
		{
			BackAndroid.removeEventListener('Exit',this.onBackAndroid);
			return false;
		}
		this.lastBackPressed = Date.now();
		ToastAndroid.show('Cliquer encore fois pour quitter.',ToastAndroid.SHORT);
		return true;
	};

	onPressConnexion = () => {
		// let _this = this;
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		// Create router and push page 'Connexion' into stack,
		// this will lead us to page 'Connexion'.
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Connexion',
				component: Connexion,
				/*
				getConnexion: function(connexion) {
					_this.setState({
						connexion: connexion
					})
				}
				*/
			})
		}
	};

	onPressInscription = () => {
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		// Create router and push page...
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Inscription',
				component: inscription,
			})
		}
	};
	
	// Get the key words from user's input. (key words of search)
	onResponderEndEditing = (text) => {
		textInput = text;
	};
}



const onPressRecherche = () => {
	Alert.alert(textInput);
};

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
			width: width_window,
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
			flexBasis: 215,
			backgroundColor: '#a9a9a9',
	  }
});

module.exports = Index;
