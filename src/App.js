
import {
 SafeAreaView,
 StyleSheet,
 ScrollView,
 StatusBar,
 Alert
} from "react-native";

import * as React from 'react';
import { NavigationContainer, useRoute, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { StackActions, NavigationActions } from 'react-navigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

const Constants = require('./common/Constants');
const Styles = require('./common/Styles');
const Stack = createStackNavigator();


import HomeScreen from './screens/Home';
import ShowImageScreen from './screens/ShowImage';


//import CameraScreen from './common/Camera';

function LogoTitle(props) {

	const route = useRoute();

	return (
	<>	
	<View 
	style={Styles.bottomLine}>
		<Image
			source={require('./img/main_logo.png')}
			style={Styles.logo}					
		/>
	</View>		
	</>
	)

}

function LogoTitleDrawerClick(props) {

	const route = useRoute();

	return (
	<>
		<TouchableOpacity onPress={() => toggleMenu(props) } >		
		<View 
		style={Styles.bottomLine}>
			<Image
				source={require('./img/main_logo.png')}
				style={Styles.logo}					
			/>
		</View>
		</TouchableOpacity>
		
	</>
	)

}

function toggleMenu(props) {
	try {
		props.navigation.dispatch(DrawerActions.toggleDrawer());
	} catch (error) {
		return;
	}
	
}

function App() {
	
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerShown: true
					}}
				>
			
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ header: props => <LogoTitleDrawerClick {...props} /> }}

				/>
				
				<Stack.Screen
					name="ShowImage"
					component={ShowImageScreen}
					options={{ header: props => <LogoTitleDrawerClick {...props} /> }}

				/>
			
							
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

export default App;


// Handy Code to list all AsyncStorage values

/*
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
	stores.map((result, i, store) => {
	  console.log({ [store[i][0]]: store[i][1] });
	  //return true;
	});
  });
});
*/

// You canadjust the devives top status bar with this code... kinda neeat
/*
<StatusBar barStyle = "dark-content_DISABLED" />
*/
