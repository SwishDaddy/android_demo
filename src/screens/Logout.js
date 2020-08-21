import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  //StatusBar, //might want to use later -Swish
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '../../node_modules/@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import Icon from "react-native-vector-icons/MaterialIcons";

const Styles = require('../common/Styles');
const Constants = require('../common/Constants');

class LogoutScreen extends Component {
	constructor(props) {
		super(props);	
	}

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}
		
	async Logout (props) {	
		
		let token = await AsyncStorage.getItem("token");
		
		if (!token) {
			this.props.navigation.replace('Login');
			return;
		}
				
		let bodystr = 'action=tc' +
		'&token=' + token;

		fetch(Constants.APIs.USERS_API_URL, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded',
			}),
			body: bodystr
		})
		.then((response) => response.json())
		.then((json) => {
			this.setState({
				data: json
			});
		})
		.catch((error) => console.error(error))
		.finally(() => {			
			AsyncStorage.removeItem('token');		
			this.props.navigation.replace('Login');	
		})
	}

	render() {
		return (
			<>
			<ScrollView	
			style={Styles.scrollView}>
				<View style={Styles.sectionContainer}>
					<Text style={[Styles.sectionTitle, Styles.text, {marginBottom: 20}]}>Really Log Out?</Text>

					<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={Styles.itemCard}>				
						<TouchableOpacity
							onPress={() => this.Logout()}>							
							<View style={{flex: 1, flexDirection: 'row-reverse' }}>
								<Icon name='keyboard-arrow-right' size={50} color={Constants.Colors.DARK}  />
								<Text style={[Styles.fontSizesHuge, Styles.buttonText, {marginTop:4}]}>
									Yep, Log Me Out
								 </Text>								  
							</View>							
						</TouchableOpacity>			
					</LinearGradient>	
						
					<View style={Styles.sectionContainer, {flexDirection:"row-reverse", marginTop: 40}}>
						
						<TouchableOpacity
							style={{ alignSelf: 'center', marginEnd: 10}}
							onPress={() => {this.props.navigation.goBack()}}>
							<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={Styles.button}>
								<Text style={Styles.buttonText, Styles.fontSizesBig}>Never Mind</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>		
			</>
		)
	}
}

export default LogoutScreen;