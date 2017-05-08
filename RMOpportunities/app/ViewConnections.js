import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackAndroid,
  ListView,
} from 'react-native';

import Translation from './Translation';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//We change this and add some foncs to realise
//the display of the list of factures when we need.
var dataSourceVp = null;
var dataSourceAp = null;

export default class MesAnnonces extends Component {
  render() {
	BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					{Translation[lang].mise_en_relation}
				</Text>
				<Text style = {styles.instructions}>
					{Translation[lang].visio_prod1}
				</Text>
				<Text style = {styles.instructions}>
					{Translation[lang].visio_prod2}
				</Text>
			</View>

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						{Translation[lang].vente_prod}
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
								{Translation[lang].aucune_rel_vente1}
							</Text>
							<Text>
								{Translation[lang].aucune_rel_vente2}
							</Text>
						</View>
					);
			})()}

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleAV}>
						{Translation[lang].achat_prod}
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
								{Translation[lang].aucune_rel_achat1}
							</Text>
							<Text>
								{Translation[lang].aucune_rel_achat2}
							</Text>
						</View>
					);
			})()}
		</View>
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
	width: width,
	height: height * 0.89,
	alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F5FCFF',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.30,
	alignSelf: 'center',
  },
  containerVentes: {
	width: width,
	height: height * 0.23,
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
	width: 0.92 * width + 20,
  },
  containerAchats: {
	width: width,
	height: height * 0.23,
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
	width: 0.92 * width + 20,
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