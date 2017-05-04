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
var dataSourceOffres = null;
var dataSourceDemandes = null;

export default class MesAnnonces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:heightWindow*0.08}}/>
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					Mes annonces
				</Text>
				<Text style = {styles.instructions}>
					Visionner vos annonces
				</Text>
				<Text style = {styles.instructions}>
					visibles sur notre platforme
				</Text>
			</View>

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleOD}>
						Offres
				</Text>
			</View>
			<View style = {styles.header}>
				<View style = {styles.listHeaderFirst}>
					<Text style = {{textAlign: 'center',}}>
						Numero d{'\''}identification (CAS ou EINECS)
					</Text>
				</View>
				<View style = {styles.listHeaderSecond}>
					<Text style = {{textAlign: 'center',}}>
						Date de creation
					</Text>
				</View>
				<View style = {styles.listHeaderThird}>
					<Text style = {{textAlign: 'center',}}>
						Lien
					</Text>
				</View>
			</View>

			{(() => {
				if (dataSourceOffres != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerOffres}>
							<Text>
								Aucune annonce de offre disponible.
							</Text>
						</View>
					);
			})()}

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleOD}>
						Demandes
				</Text>
			</View>
			<View style = {styles.header}>
				<View style = {styles.listHeaderFirst}>
					<Text style = {{textAlign: 'center',}}>
						Numero d{'\''}identification (CAS ou EINECS)
					</Text>
				</View>
				<View style = {styles.listHeaderSecond}>
					<Text style = {{textAlign: 'center',}}>
						Date de creation
					</Text>
				</View>
				<View style = {styles.listHeaderThird}>
					<Text style = {{textAlign: 'center',}}>
						Lien
					</Text>
				</View>
			</View>

			{(() => {
				if (dataSourceDemandes != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerDemandes}>
							<Text>
								Aucune annonce de demande disponible.
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
	height: heightWindow * 0.25,
	alignSelf: 'center',
  },
  containerOffres: {
	width: widthWindow,
	height: heightWindow * 0.19,
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
  containerDemandes: {
	width: widthWindow,
	height: heightWindow * 0.19,
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
  titleOD: {
	fontSize: 20,
	color: '#333333',
	textAlign: 'left',
  },
  instructions: {
    fontSize: 15,
	textAlign: 'center',
    marginBottom: 5,
  },
  header: {
	width: widthWindow,
	height: heightWindow * 0.06,
	alignItems: 'flex-end',
	flexDirection: 'row',
	justifyContent: 'center',
  },
  listHeaderFirst: {
	justifyContent: 'center',
	alignSelf: 'center',
    padding: 5,
    margin: 3,
    width: 0.5 * widthWindow,
    height: heightWindow * 0.06,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  listHeaderSecond: {
	justifyContent: 'center',
	alignSelf: 'center',
    padding: 5,
    margin: 3,
    width: 0.30 * widthWindow,
    height: heightWindow * 0.06,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  listHeaderThird: {
	justifyContent: 'center',
	alignSelf: 'center',
    padding: 5,
    margin: 3,
    width: 0.14 * widthWindow,
    height: heightWindow * 0.06,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
});

module.exports = MesAnnonces;
