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
  TouchableHighlight,
  BackAndroid,
  ToastAndroid,
  Navigator,
  ScrollView,
} from 'react-native';
import Connection from './Connection';
import SigningUp from './SigningUp';

import Translation from './Translation';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var selected = 'tlc';
var textInput = 'TextInput';

export default class HomePage extends Component {
	// Init this class and add 1 boolean value to check
	// if the user logined. We check this because when
	// users logined succesufully, two buttons should be hidden
	// in this page.
	constructor(props) {
		super(props);
	}

	// Picker: Users can choose many catagories here.
	// TextInput: Input Text, user input the key words that they want to search.
	// Button('Recherche'): Start search!
	render() {
		BackAndroid.addEventListener('Exit',this.onBackAndroid);
		return (
			<ScrollView>
				<View style={styles.container}>
					<Image source={require('../img/warehouse.jpg')} style={styles.imageBackground}>
						{(() => {
						// If user logined?
						if (connection == 1)
							return (
								<View style={styles.containerButton} />
							);
						else
							return (
								<View style={styles.containerButton}>
                                    <TouchableHighlight onPress={this.onPressConnexion} style={[styles.button, {width: width*0.5, backgroundColor:'#FFFFFF'}]} underlayColor="rgb(247,247,247)">
                                        <Text style={[styles.buttonText, {color:'black'}]}>{Translation[lang].connexion}</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={this.onPressInscription} style={[styles.button, {width: width*0.5, backgroundColor:'rgb(71,95,209)'}]} underlayColor="rgb(44,67,177)">
                                        <Text style={styles.buttonText}>{Translation[lang].inscription}</Text>
                                    </TouchableHighlight>
								</View>
							);
						})()}
						<View style={styles.mainContainer}>
							<View style={styles.containerPicker}>
								<Picker
									selectedValue={selected}
									onValueChange={this.onValueChange.bind(this,'value')}
									style={styles.picker} >
									<Picker.Item label={Translation[lang].ttes_cat} value="tlc" />
									<Picker.Item label={Translation[lang].cosm} value="Pcos" />
									<Picker.Item label={Translation[lang].solv} value="sol" />
									<Picker.Item label={Translation[lang].solv_reg} value="sol_r" />
									<Picker.Item label={Translation[lang].react} value="rea" />
									<Picker.Item label={Translation[lang].catal} value="cat" />
									<Picker.Item label={Translation[lang].spe_chi} value="spe" />
									<Picker.Item label={Translation[lang].interm} value="int" />
									<Picker.Item label={Translation[lang].interm_simple} value="int_s" />
									<Picker.Item label={Translation[lang].acides} value="aci" />
									<Picker.Item label={Translation[lang].bases} value="bas" />
									<Picker.Item label={Translation[lang].acid_ami} value="aci_a" />
									<Picker.Item label={Translation[lang].vit} value="vit" />
									<Picker.Item label={Translation[lang].autres} value="aut" />
								</Picker>
							</View>
							<View style={styles.contTexte}>

								<TextInput
									placeholder={Translation[lang].trouver_par}
									maxLength = {40}
									editable={true}
									style={styles.textInput}
									onChangeText={this.onResponderEndEditing}
								/>
							</View>
							<View style={styles.containerButtonR}>
								<TouchableHighlight onPress={this.onPressRecherche} style={{height: height*0.05, width: width*0.7, backgroundColor:'#A4D04A', justifyContent:'center'}} underlayColor="rgb(138,183,46)">
									<Text style={styles.buttonText}>{Translation[lang].recherche}</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Image>
				</View>
			</ScrollView>
		);
	}
    _onLangChange = (key: string, value: string) => {
        lang = value;
		this.forceUpdate();
    };
	//Get the key words from user's choice.(catagories)
	onValueChange = (key: string, value: string) => {
		// This value (selectedKey) is same as the catagorie selected.
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
		ToastAndroid.show('Cliquer deux fois pour quitter.',ToastAndroid.SHORT);
		return true;
	};

	onPressConnexion = () => {
		let _this = this;
		BackAndroid.removeEventListener('Exit',this.onBackAndroid);
		// Create router and push page 'Connexion' into stack,
		// this will lead us to page 'Connexion'.
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'Connection',
				component: Connection,
				params:{
      }
			})
		}
	};

  onPressInscription = () => {
    BackAndroid.removeEventListener('Exit',this.onBackAndroid);
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'SigningUp',
        component: SigningUp,
      })
    }
  };

  onPressRecherche = () => {
	  Alert.alert(textInput);
  };

  onResponderEndEditing = (text) => {
	textInput = text;
  };

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
	mainContainer:{
		flexDirection: 'column',
	},
	containerButtonR: {
			width: width*0.7,
			height:height*0.05,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			alignSelf: 'center',
	},
	containerPicker: {
		justifyContent: 'center',
		width: width*0.7,
		height:height*0.05,
		alignSelf: 'center',

	},
	contTexte:{
		justifyContent: 'center',
		flexDirection: 'column',
		width: width*0.7,
		height:height*0.07,
		alignSelf: 'center',
	},
	imageBackground: {
			width: width,
			height: height,
	},
	picker: {
			//flexBasis: 120,
			
		backgroundColor: '#FFFFFF',
		padding:5,
	},
	textInput: {
			//flexBasis: 215,
			backgroundColor: '#a9a9a9',
	},
    button:{
        height: height*0.05,
        marginTop: 20,
        justifyContent: 'center',
        borderRadius:5,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
});