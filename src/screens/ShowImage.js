import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

const Styles = require('../common/Styles');
const Constants = require('../common/Constants');


class ShowImageScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {			
			filename: null,
		};		
	}
	componentDidMount() {
		this._mounted = true;		
	}

	componentWillUnmount() {
		this._mounted = false;
	}
			

		
	render() {
		return (
			<>
			<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={[Styles.button, {marginTop:10}]}>
				<TouchableOpacity
					onPress={() => this.props.navigation.goBack() }
					>
					<View style={{ flexDirection: 'row'}}>
						<Icon name='keyboard-arrow-left' style={[Styles.fontSizesHuge, {marginRight:10}, Styles.buttonText]}  />
						<Text style={Styles.fontSizesBig}>
							Go Back
						</Text>
					</View>
				</TouchableOpacity>
			</LinearGradient>
			<View style={{ flex:1, flexDirection:'row' }}>
				<Image
					source={{uri: 'https://work-samples.swishersolutions.com/api/img/' + this.props.route.params.filename}}
					style={{ width: '99%', resizeMode : 'contain', margin: 5, borderRadius: 10 }}					
				/>
			 </View>
			 
			</>
		)
	}
}

export default ShowImageScreen;



/*
<>
<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={[Styles.itemCard, {marginBottom: 10}]}>
	<TouchableOpacity onPress={() => this.refreshData()}>									
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
			<Icon name='refresh' size={40} color={Constants.Colors.DARK}  />	
			<Text style={[Styles.sectionTitle, Styles.buttonText, {margin:4}]}>								
				Update Dashboard Data
			</Text>								
		</View>							
	</TouchableOpacity>				
</LinearGradient>

</>		
*/
