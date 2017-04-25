import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
} from 'react-native';

var widthWindow = Dimensions.get('window').width;
var heightWindow = Dimensions.get('window').height;

//We change this and add some foncs to realise
//the display of the list of factures when we need.
var dataSourceVp = null;
var dataSourceAp = null;

export default class MesAnnonces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					Négociations
				</Text>
				<Text style = {styles.instructions}>
					Visionner vos négociations en
				</Text>
				<Text style = {styles.instructions}>
					cours
				</Text>
			</View>

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						Ventes en cours
				</Text>
			</View>

			{(() => {
				if (dataSourceVp != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerVentes}>
							<Text>
								Aucune vente
							</Text>
						</View>
					);
			})()}

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						Achats en cours
				</Text>
			</View>

			{(() => {
				if (dataSourceAp != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerAchats}>
							<Text>
								Aucun achat
							</Text>
						</View>
					);
			})()}
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerMain: {
    backgroundColor: '#F5FCFF',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: widthWindow,
	height: heightWindow * 0.89,
	alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F5FCFF',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: widthWindow,
	height: heightWindow * 0.30,
	alignSelf: 'center',
  },
  containerVentes: {
	width: widthWindow,
	height: heightWindow * 0.23,
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#F5FCFF',
	padding: 5,
	borderWidth: 1,
    borderRadius: 5,
	margin: 5,
    borderColor: '#CCC',
	width: 0.92 * widthWindow + 20,
  },
  containerAchats: {
	width: widthWindow,
	height: heightWindow * 0.23,
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#F5FCFF',
	padding: 5,
	borderWidth: 1,
    borderRadius: 5,
	margin: 5,
    borderColor: '#CCC',
	width: 0.92 * widthWindow + 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
	color: '#333333',
  },
  titleAV: {
	fontSize: 20,
	color: '#333333',
	textAlign: 'left',
  },
  instructions: {
    fontSize: 15,
	textAlign: 'center',
    marginBottom: 5,
  },
});

module.exports = MesAnnonces;
