import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
} from 'react-native';
import EnTete from './enTete';

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
        <EnTete />
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					Mes mises en relation
				</Text>
				<Text style = {styles.instructions}>
					Visionner les produites pour lesquels
				</Text>
				<Text style = {styles.instructions}>
					votre entreprise a ete mise en relation
				</Text>
			</View>

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						Ventes de produits
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
								Aucune mise en relation pour la
							</Text>
							<Text>
								vente de produits.
							</Text>
						</View>
					);
			})()}

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						Achats de produits
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
								Aucune mise en relation pour
							</Text>
							<Text>
								l{'\''}achat de produits.
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
