import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationActions } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();
const Styles = require('../common/Styles');
const Constants = require('../common/Constants');

import LogoutScreen from './Logout';
import DashboardScreen from './Dashboard';
import TestScreen from './Test';

class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}	

	componentDidMount() {
		this._mounted = true;
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	render() {
		return (
			<Drawer.Navigator
				initialRouteName="Dashboard"
				drawerStyle={[Styles.drawerNav]}
				drawerContentOptions={{
					inactiveTintColor: Constants.Colors.LIGHT,
					activeTintColor: Constants.Colors.WHITE,
					labelStyle: Styles.fontSizesNormal
				}}
			>
				<Drawer.Screen
					name="Dashboard"
					component={DashboardScreen}
					options={{
					  drawerIcon: ({focused, size}) => (
						<Icon
						  name="dashboard"
						  size={size}
						  color={focused ? Constants.Colors.WHITE : Constants.Colors.LIGHT}
						/>
					  ),
					}}
				/>
						
			</Drawer.Navigator>
		)

	}
}

export default HomeScreen;