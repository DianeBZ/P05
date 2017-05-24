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
//the display of the list of classifieds when we need.
var dataSourceOffers = null;
var dataSourceDemands = null;
//Renders a list of offers and demands 
export default class ViewClassifieds extends Component {
  render() {
	BackAndroid.addEventListener('Back',this.onBackAndroid);
    return (
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					{Translation[lang].mes_annonces}
				</Text>
				<Text style = {styles.instructions}>
					{Translation[lang].visio_annonces}
				</Text>
			</View>

			<View style = {{justifyContent: 'flex-start',alignSelf: 'flex-start'}}>
				<Text style = {styles.titleOD}>
						{Translation[lang].offres}
				</Text>
			</View>
			<View style = {styles.header}>
				<View style = {styles.listHeaderFirst}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].num_id}
					</Text>
				</View>
				<View style = {styles.listHeaderSecond}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].date_crea}
					</Text>
				</View>
				<View style = {styles.listHeaderThird}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].lien}
					</Text>
				</View>
			</View>

			{(() => {
				if (dataSourceOffers != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerOffres}>
							<Text>
								{Translation[lang].aucune_off}
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
						{Translation[lang].num_id}
					</Text>
				</View>
				<View style = {styles.listHeaderSecond}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].date_crea}
					</Text>
				</View>
				<View style = {styles.listHeaderThird}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].lien}
					</Text>
				</View>
			</View>

			{(() => {
				if (dataSourceDemands != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerDemandes}>
							<Text>
								{Translation[lang].aucune_dem}
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
    backgroundColor: '#F2F2F2',
  },
  containerMain: {
    backgroundColor: '#F2F2F2',
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
    backgroundColor: '#F2F2F2',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.25,
	alignSelf: 'center',
  },
  containerOffres: {
	width: width,
	height: height * 0.19,
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#F2F2F2',
	padding: 5,
	borderWidth: 1,
    borderRadius: 5,
	margin: 5,
    borderColor: '#CCC',
	width: 0.92 * width + 20,
  },
  containerDemandes: {
	width: width,
	height: height * 0.19,
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#F2F2F2',
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
	width: width,
	height: height * 0.06,
	alignItems: 'flex-end',
	flexDirection: 'row',
	justifyContent: 'center',
  },
  listHeaderFirst: {
	justifyContent: 'center',
	alignSelf: 'center',
    padding: 5,
    margin: 3,
    width: 0.5 * width,
    height: height * 0.06,
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
    width: 0.30 * width,
    height: height * 0.06,
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
    width: 0.14 * width,
    height: height * 0.06,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
});