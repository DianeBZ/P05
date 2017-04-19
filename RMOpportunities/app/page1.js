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
} from 'react-native';
import EnTete from './enTete';
import Connexion from './connexion';
import inscription from './page3';
import FileSystem from 'react-native-filesystem';

import Trad from './traduction';
var lang = 'fr';
var selected2 = 'fr';
var selectedKey2 = 'Français';

var width_window = Dimensions.get('window').width;
var height_window = Dimensions.get('window').height;
var selected = 'tlc';
var selectedKey = 'Toutes les categories';
var textInput = 'TextInput';
var customData = require('./statusConnexion.json');

export default class Index extends Component {
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
			<View style={styles.container}>
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
									<TouchableHighlight>
										<View>
											<Button
												onPress={this.onPressConnexion}
												title={Trad[lang].connexion}
												style={{flexBasis: 70}}
											/>
										</View>
									</TouchableHighlight>
									<TouchableHighlight>
										<View>
											<Button
												onPress={this.onPressInscription}
												title={Trad[lang].inscription}
												color="#841584"
												style={{flexBasis: 70}}
											/>
										</View>
									</TouchableHighlight>
								</View>
							);
						})()}

						<View style={styles.containerPicker}>
							<Picker
								selectedValue={selected}
								onValueChange={this.onValueChange.bind(this,'value')}
								style={styles.picker} >
								<Picker.Item label={Trad[lang].ttes_cat} value="tlc" />
								<Picker.Item label={Trad[lang].cosm} value="Pcos" />
								<Picker.Item label={Trad[lang].solv} value="sol" />
								<Picker.Item label={Trad[lang].solv_reg} value="sol_r" />
								<Picker.Item label={Trad[lang].react} value="rea" />
								<Picker.Item label={Trad[lang].catal} value="cat" />
								<Picker.Item label={Trad[lang].spe_chi} value="spe" />
								<Picker.Item label={Trad[lang].interm} value="int" />
								<Picker.Item label={Trad[lang].interm_simple} value="int_s" />
								<Picker.Item label={Trad[lang].acides} value="aci" />
								<Picker.Item label={Trad[lang].bases} value="bas" />
								<Picker.Item label={Trad[lang].acid_ami} value="aci_a" />
								<Picker.Item label={Trad[lang].vit} value="vit" />
								<Picker.Item label={Trad[lang].autres} value="aut" />
							</Picker>

							<TextInput
								placeholder={Trad[lang].trouver_par}
								maxLength = {40}
								editable={true}
								style={styles.textInput}
								onChangeText={this.onResponderEndEditing}
							/>
						</View>

						<View style={styles.containerButtonR}>
							<TouchableHighlight>
							 <View>
								<Button
									onPress={this.onPressRecherche}
									title={Trad[lang].recherche}
									color="#64FE2E"
									style={{flexBasis: 70}}
								/>
							 </View>
							</TouchableHighlight>
						</View>
                        <View style={styles.containerPicker}>
                        <Picker
							selectedValue={lang}
							onValueChange={this._onLangChange.bind(this,'value')}
							style={styles.picker} >
							<Picker.Item label="Français" value='fr' />
							<Picker.Item label="English" value='en' />  
                        </Picker>
                        </View>
					</Image>
				</View>
			</View>
		);
	}
    _onLangChange = (key: string, value: string) => {
        lang = value;
        selectedKey2 = key;
		selected2 = value;
		this.forceUpdate();
    };
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
				name: 'Connexion',
				component: Connexion,
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
        name: 'Inscription',
        component: inscription,
      })
    }
  };

  onPressRecherche = () => {
  	  //customData = require('./statusConnexion.json');
	  Alert.alert(textInput);
	  /*if (!FileSystem.fileExists('./statusConnexion.json',"temporary"))
	  {
		d_s = FileSystem.delete('./statusConnexion.json',"temporary");
	  }
	  else
		  Alert.alert("Shit");
	  const fileContents = '{"connexion":0}';
	  w_s = FileSystem.writeToFile('./statusConnexion.json', fileContents, "temporary");
	  */
      //Alert.alert(textInput+d_s+w_s);
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
			height: height_window,
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
