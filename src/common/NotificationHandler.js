import PushNotification from 'react-native-push-notification';

import AsyncStorage from '../../node_modules/@react-native-community/async-storage';

const Constants = require('./Constants');

class NotificationHandler {
		
  onNotification(notification) {
	  
	  //console.log(notification);
  	
	//VERY IMPORTANT!! Whenever you initiate a new notification, make sure it has a "data" key, with at least keys "title" and "body". It is checking for the existence of the "data" key that prevents infinitely looping notifications!! This is because both receiving a notification (like from firebase) and tapping one to close it both fire this same event. SO it gets to be that everytime you tap a notification, another one is generated. VERY BAD!!! So to hack it, I added a key "data", and make sure that it ALWAYS included in initial notifications, and NEVER in the one we actually push (below).
	if (!notification.data) {
		return;
	};
	
	PushNotification.localNotification({
		/* Android Only Properties */
		//id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
		id: notification.id,
		//delivered: true,
		//ticker: 'My Notification Ticker', // (optional)
		autoCancel: true, // (optional) default: true
		largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
		smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
		//bigText: notification.data.body, // (optional) default: "message" prop
		subText: 'Notification', // (optional) default: none
		color: 'red', // (optional) default: system default
		vibrate: true, // (optional) default: true
		vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
		//tag: 'some_tag', // (optional) add tag to message
		//group: 'group', // (optional) add group to message
		ongoing: false, // (optional) set whether this is an "ongoing" notification
		//actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
		invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

		/* iOS only properties */
		alertAction: 'view', // (optional) default: view
		category: '', // (optional) default: empty string
		userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

		/* iOS and Android properties */
		//title: notification.data.title, // (optional)
		message: notification.data.body, // (required)
		playSound: false, // (optional) default: true
		soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
		number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
	});
	

    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
	
  }

  async onRegister(token) {
    //console.log('NotificationHandler:', token.token);
	
	let passed_token = token.token;
		
	let firebase_device_token_json = await AsyncStorage.getItem("firebase_device_token");
	
	let update_server_firebase_device_token = false;
	
	if (!firebase_device_token_json) {
		firebase_device_token_json = JSON.stringify(token);
		AsyncStorage.setItem('firebase_device_token', firebase_device_token_json);
		update_server_firebase_device_token = true;
	};		
	
	let arr_firebase_device_token = JSON.parse(firebase_device_token_json);
	
	let currentToken = arr_firebase_device_token.token;
	
	// SwishTest
	update_server_firebase_device_token = true;
	
	if (update_server_firebase_device_token) {
	
		let login_token = await AsyncStorage.getItem("token");
		
		let bodystr = 'action=updatefirebasetoken' + '&' +
			'obj[firebase_device_token]=' + passed_token + '&' +
			'obj[token]=' + login_token;
			
		fetch(Constants.APIs.MOBILE_API_URL, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded',
			}),
			body: bodystr
		})
		.then((response) => response.json())
		.then((json) => {
			
			//Do something maybe?
			
		})
		.catch((error) => console.error(error))
		.finally(() => {
			AsyncStorage.setItem('firebase_device_token', JSON.stringify(arr_firebase_device_token));
		});
	
	};
	


    if (typeof this._onRegister === 'function') {
      this._onRegister(token);
    }
  }

  onAction(notification) {
    console.log ('Notification action received:');
    console.log(notification.action);
    console.log(notification);

    if(notification.action === 'Yes') {
      PushNotification.invokeApp(notification);
    }
  }

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError(err) {
    console.log(err);
  }
  
  attachRegister(handler) {
    this._onRegister = handler;
  }

  attachNotification(handler) {
    this._onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: handler.onRegister.bind(handler),

  // (required) Called when a remote or local notification is opened or received
  onNotification: handler.onNotification.bind(handler),

  // (optional) Called when Action is pressed (Android)
  onAction: handler.onAction.bind(handler),

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: handler.onRegistrationError.bind(handler),

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true,
});

export default handler;