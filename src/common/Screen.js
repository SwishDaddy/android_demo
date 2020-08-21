import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// design screen
const widthStand = 375;
const heightStand = 667;

const fontScale = Math.sqrt((heightStand * heightStand) + (widthStand * widthStand));
const realScale = Math.sqrt((height * height) + (width * width));

const wBase = width < height ? width : height;
const hBase = width > height ? width : height;

export const responsiveHeight = h => ((hBase * (h)) / heightStand);

export const responsiveWidth = w => ((wBase * (w)) / widthStand);

export const responsiveFontSize = f => ((realScale * f) / fontScale);

export default {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
};