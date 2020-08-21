import {
  Platform
} from 'react-native';

const Patterns = {
  CHARACTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
};

const APP_ID = 'Swish Android';

const ApiVersion = '1.1';

const APIs = {
	MOBILE_API_URL: 'https://work-samples.swishersolutions.com/api/api.php',
	API_IMAGES_URL: 'https://work-samples.swishersolutions.com/api/img/',
};

const Pages = {
  HOME: 'Home',
};

const Colors = {
  BACKGROUND: '#ffffff',
  BUTTON_HIGHLIGHT: '#949494', 
  TEXT_HIGHLIGHT: '#f9a33e',
  APP_PRIMARY: '#b3d476',
  APP_HIGHLIGHT: '#f9a33e',
  PRIMARY: '#000000',
  WHITE: '#FFFFFF',
  WHITESMOKE: '#F5F5F5',
  LIGHTER: '#F3F3F3',
  LIGHT: '#DAE1E7',
  DARK: '#444',
  BLACK: '#000',
  DISABLED: '#d3d3d3',
  //BUTTON_GRADIENT: [ '#a0cd94', '#444842','#71967b'],
  BUTTON_GRADIENT: ['#d3d3d3', '#ddd'],
  BUTTON_GRADIENT_DISABLED: ['#d3d3d3', '#444842'],
};

const FontSizes = {
  HUGE: 28,
  LARGE: 22,
  BIG: 20,
  NORMAL: 18,
  SMALL: 16,
  TINY: 14,
};

const FontNames = {
  //PRIMARY: (Platform.OS === 'ios') ? 'helveticaneue' : 'sanfrancisco'
  PRIMARY: 'arial',
};

const StorageKeys = {
  USER_ID: 'USER_ID',
  USER: 'USER',
  LAST_LOGIN_USER_NAME: 'LAST_LOGIN_USER_NAME',
  USERNAME: 'username',
  DEVICE_TOKEN: 'DEVICE_TOKEN',
  DEVICE_ID: 'DeviceId',
};

const APIStatuses = {
  NOT_AUTHENTICATED: '401',
};


const Texts = {
  APP_TITLE: 'Swisher React Demo',
};

module.exports = {
  APIs,
  Pages,
  Colors,
  FontSizes,
  FontNames,
  StorageKeys,
  Patterns,
  APIStatuses,
  APP_ID,
};