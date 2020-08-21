import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Collapse,CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import DraggableFlatList from "react-native-draggable-flatlist";

const Drawer = createDrawerNavigator();
const Styles = require('../common/Styles');
const Constants = require('../common/Constants');

class DashboardScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {			
			data: [],
			jsondata: null,
			imageset: 'Swisher',
			votecast: true,
		};		
	}
	componentDidMount() {
		this._mounted = true;
		
		this.toggleImageSet(true);
		//this.getImages();
		this.setState({
			votecast: false,
		});
	}

	componentWillUnmount() {
		this._mounted = false;
	}
	
	castvotecheck = () => {
		
		var votecast = this.state.votecast;
		if (!votecast) {
			alert("Please Cast Your Vote before switching Image Sets")
			return false;
		}
		
		return true;
		
	}
	
	castvote = () => {
		
		let postarr = [];
		
		for (const [k, v] of Object.entries(this.state.data)) {
			postarr[k] = v['filename']	
		}
		
		let bodystr = 'json=' + JSON.stringify(postarr) +
		'&rtype=' + this.state.imageset;

		fetch(Constants.APIs.MOBILE_API_URL, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded',
			}),
			body: bodystr
		})		
		.catch((error) => console.error(error))
		.finally(() => {		
			alert("Vote Cast!");			
			this.setState({
				votecast: true
			})			
		})
	}
			
	getImages = () => {		

		fetch(Constants.APIs.MOBILE_API_URL + '?f=' + this.state.imageset, {
			method: 'GET'		
		})
		.then((response) => response.json())
		.then((json) => {
			this.setState({
				jsondata: json,
			});
		})
		.catch((error) => console.error(error))
		.finally(() => {
									
			let final_arr = Array();				
			let w = Dimensions.get('screen').width;			
			w = w * .9;
		
			for (const [key, value] of Object.entries(this.state.jsondata)) {
			
				let arr = {};
				arr["key"] = key
				arr["filename"] = value
				arr["label"] = 
				<View style={[Styles.itemCard]}>
				
					<View style={[{ flexDirection: 'row', width: w}]}>	
						<Image
							source={{uri: 'https://work-samples.swishersolutions.com/api/img/' + value}}
							style={{height: 100, width: 100, resizeMode : 'contain', margin: 5, borderRadius: 10 }}
						/>
					
						<View>
					
							<Text style={[Styles.fontSizesBig]}>{value}</Text>
							<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={[Styles.button, {marginTop:10}]}>
								<TouchableOpacity
									onPress={() => this.showImage({value})}
									>
									<View style={{ flexDirection: 'row'}}>
										<Icon name='search' style={[Styles.fontSizesHuge, {marginRight:10}, Styles.buttonText]}  />
										<Text style={Styles.fontSizesBig}>
											View Image
										</Text>
									</View>
								</TouchableOpacity>
							</LinearGradient>
					
						</View>
					
					</View>
				</View>
							
				final_arr.push(arr)
			}
									
			this.setState({
				data: final_arr
			})
			
		})
	}
	
	toggleImageSet = (initial) => {
				
		if (!initial) {		
			if (!this.castvotecheck()) {
				return false;
			}
		}
		
		let imageset = this.state.imageset;	
		
		if (imageset == 'Heroes') {
			this.setState({
				imageset: 'Swisher',
				btntext: 'Swisher'
			})
			this.getImages();
		}else {
			this.setState({
				imageset: 'Heroes',
				btntext: 'Heroes'
			})
			this.getImages();
		}

		this.setState({
			votecast: false
		})		
	}
	
	showImage = (filename) => {
		this.props.navigation.push('ShowImage',	{
			filename: filename.value
		})		
	}
		
	renderItem = ({ item, index, drag, isActive }) => {			
		return (
			<TouchableOpacity
				style={{					
					marginTop: 5,
					backgroundColor: Constants.Colors.WHITESNOW,
					alignItems: "center",
					justifyContent: "center",
					opacity: isActive ? .5 : 1,
					backgroundColor: isActive ? Constants.Colors.DARK : Constants.Colors.WHITESNOW,
					borderRadius: 10,
					width: '95%'
				}}
				onPressIn={drag}
			>			
				<Text>{item.label}</Text>
			</TouchableOpacity>
		);
	};
		
	render() {
		return (
			<>
				<View style={{flexDirection:'row', margin: 10, justifyContent: 'center' }}>
				<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={[Styles.button]}>
					<TouchableOpacity
						onPress={() => this.toggleImageSet() }
						>
						<View style={{ flexDirection: 'row'}}>
							<Icon name='account-circle' style={[Styles.fontSizesHuge, {marginRight:10}, Styles.buttonText]}  />
							<Text style={Styles.fontSizesBig}>
								Show {this.state.btntext}
							</Text>
						</View>
					</TouchableOpacity>
				</LinearGradient>
				
				<LinearGradient colors={Constants.Colors.BUTTON_GRADIENT} style={[Styles.button]}>
					<TouchableOpacity
						onPress={() => this.castvote() }
						>
						<View style={{ flexDirection: 'row'}}>
							<Icon name='assessment' style={[Styles.fontSizesHuge, {marginRight:10}, Styles.buttonText]}  />
							<Text style={Styles.fontSizesBig}>
								Cast Vote
							</Text>
						</View>
					</TouchableOpacity>
				</LinearGradient>
				
				</View>
				
				<View style={{marginBottom:10}}>
					<Text>{`\u2022 Drag the Images to order them from Most to Least Favorite`}</Text>
					<Text>{`\u2022 Press and Hold an image to enable Drag & Drop`}</Text>
				</View>		
				
				<View style={{ flex:1 }}>
					<DraggableFlatList
					  data={this.state.data}
					  renderItem={this.renderItem}
					  keyExtractor={(item, index) => `draggable-item-${item.key}`}
					  onDragEnd={({ data }) => this.setState({ data })}
					/>
				 </View>
			</>
		)
	}
}

export default DashboardScreen;
