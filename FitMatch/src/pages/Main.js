import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity
} from 'react-native';

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			dataSource: []
		}
	}

	renderItem = ({ item }) => {
		return (
			<View style={styles.component}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Image style={styles.image}
						source={{ uri: item.picture}} />
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.text}>
						{item.name.first}, {item.age}
					</Text>
					<Text style={{ fontSize: 22, color: 'black'}}>
						{item.gender}
					</Text>
					<Text style={{ fontSize: 22, color: 'black'}}>
						{item.percent} match
					</Text>
				</View>
				<View style={styles.buttonContainer}>
       				<TouchableOpacity
         				style={styles.button}>
         				<Image style={{width: 100, height: 100}}
						source={require('../images/yesButton.png')} />
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.buttonMiddle}>
         				<Image style={{width: 100, height: 100}}
						source={require('../images/maybeButton.png')} />
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.button}>
         				<Image style={{width: 100, height: 100}}
						source={require('../images/noButton.png')} />
       				</TouchableOpacity>
      			</View>
			</View>
		)
	}

	renderSeparator = () => {
		return (
			<View
				style={{ height: 1, width: '100%', backgroundColor: 'black'}}>
			</View>
			)
	}

	componentDidMount() {
		const url = 'http://next.json-generator.com/api/json/get/4ymP-u1nV'

		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				dataSource: responseJson.users_array
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
 					data={this.state.dataSource}
  					renderItem={this.renderItem}
  					keyExtractor={(item, index) => index}
  					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#a1d3f7'
	},
	component: { 
		flexDirection: 'column',
		marginTop: 30, 
		marginBottom: 30, 
		backgroundColor:'#b9def9'
	},
	image: {
		marginTop: 30,
		width: 280, 
		height: 280
	},
	text: { 
		fontSize: 28, 
		color: 'black',
		marginTop: 40, 
		marginBottom: 15
	},
	buttonContainer: {
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	button: {
		backgroundColor: 'rgba(52, 52, 52, 0.0)', 
		padding: 10,
		marginLeft: 5,
		marginRight: 5
	},
	buttonMiddle: {
		backgroundColor: 'rgba(52, 52, 52, 0.0)', 
		padding: 10,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5
	}
})