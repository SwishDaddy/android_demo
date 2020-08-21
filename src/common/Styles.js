//import React, { Component } from 'react';
import * as React from 'react';
//import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, } from 'react-native';
import { FontNames, FontSizes, Colors } from './Constants';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from './Screen';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const GET_SUBTRACT = DEVICE_WIDTH - DEVICE_HEIGHT >= 0 ? DEVICE_WIDTH - DEVICE_HEIGHT : DEVICE_HEIGHT - DEVICE_WIDTH;

var styles = {
	/* commons */
	wrapper: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	imgResponsive: {
		/* resizeMode: 'contain', */
		/* width: null, */
		overflow: 'visible',
		resizeMode: 'stretch',
		width: '100%',	
	},  
	textBold: {
		fontWeight: 'bold',
	},
	textInput: {
		backgroundColor:  Colors.WHITE,	
		//padding: 10,
		paddingStart: 10,
		paddingEnd: 10,
		borderRadius: 15,
		//fontSize: responsiveFontSize(FontSizes.BIG),
	},
	alignCenter: {
		textAlign: 'center',
		alignItems: 'center',
	},
	logo: {
		opacity: .9,
		overflow: 'visible',
		resizeMode: 'contain',
		width: '100%',	
	},
	text: {
		fontSize: 30,
		fontWeight: '600',
		textAlign: 'center',
		color: Colors.LIGHTER,
	},
	
	textSmall: {
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
		color: Colors.LIGHTER,
	},
	drawerNav: {
		backgroundColor: Colors.DARK,		
	},
 
	/* buttons */
   
	//#f5f8e4
	//#e6e6e6
	//#d4d4d4
	//#a0cd94  nordic green light
	//#71967b  nordic green medium
	//#444842  nordic green dark
	button: {
		//alignItems: 'center',
		//justifyContent: 'center',
		//backgroundColor: '#a0cd94',
		padding: 10,
		//minWidth:100,
		//marginTop:16,
		alignSelf: 'center', 
		marginEnd: 10,
		marginStart: 10,
		color: Colors.DARK,
		borderRadius:10,
		//borderWidth: 1,
		//borderColor: '#71967b',
    },
	
	buttonText: {
		color: Colors.DARK, 
	},
	
	buttonTextDisabled: {
		color: Colors.DISABLED, 
	},
 
	/* links */
	linkGreen: {
		fontFamily: FontNames.PRIMARY,
		fontSize: responsiveFontSize(16),
		color: '#788f4e',
		textDecorationLine: 'underline',
	},
  
	/* Loading indicator */
	indicatorPageLoading: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#800000'
	},
	buttonHighlight: {
		justifyContent: 'center',
		height: 45,
		borderRadius: 5,
		backgroundColor: Colors.APP_HIGHLIGHT,
	},
	buttonHighlightTitle: {
		fontFamily: FontNames.PRIMARY,
		fontSize: responsiveFontSize(FontSizes.NORMAL),
		textAlign: 'center',
		color: '#ffffff',
	},
	loading: {
		minHeight: responsiveHeight(667),
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	},
	scrollView: {
		backgroundColor: Colors.WHITESNOW,
		//backgroundColor: '#444842',
		//height: 50,
	}, 
	body: {
		backgroundColor: Colors.WHITESNOW,
		//backgroundColor: '#444842',
	},
	bottomLine: {
		backgroundColor: Colors.WHITE,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},  
	sectionContainer: {
		marginTop: 10,
		paddingHorizontal: 24,
	},  
	sectionContainerBorder: {
		margin: 10,
		padding: 24,
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#71967b',
		backgroundColor: '#a0cd94',
	},  
	sectionContainerHeader: {
		margin: 10,
		padding: 24,
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#a0cd94',
		backgroundColor: '#71967b',
	},  
	itemCard: {
		margin: 10,
		padding: 10,
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#71967b',
		//backgroundColor: '#a0cd94',
		//alignSelf: 'center', 
		//color: '#fff',
		width: '100%', 
	},
	itemButton: {
		margin: 10,
		padding: 8,
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#71967b',
		//backgroundColor: '#a0cd94',
		//alignSelf: 'center', 
		marginEnd: 10,
		marginStart: 10,
		//color: '#fff',
		width: '50%',
	},
	paddingLeft24: {
		paddingHorizontal: 24,
	},
	subSectionContainer: {
		marginTop: 12,
		paddingHorizontal: 36,
	},
	fontSizesSmall: {
		fontSize: responsiveFontSize(FontSizes.SMALL),
	},
	fontSizesNormal: {
		fontSize: responsiveFontSize(FontSizes.NORMAL),
	},
	fontSizesBig: {
		fontSize: responsiveFontSize(FontSizes.BIG),
	},
	fontSizesLarge: {
		fontSize: responsiveFontSize(FontSizes.LARGE),
	},
	fontSizesHuge: {
		fontSize: responsiveFontSize(FontSizes.HUGE),
	},
	collapseTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.WHITE,
		textAlign: 'left',
		marginBottom: 0,
	},
	titleIcon: {
		margin: 5,
		marginEnd: 10,
		fontSize: 24, 
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',    
		textAlign: 'center',
		marginBottom: 0,
	}, 
	sectionTitleSmall: {
		fontSize: 20,
		fontWeight: '600',
		color: Colors.WHITE,
		textAlign: 'center',
		marginBottom: 0,
	}, 
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.WHITE,
	}, 
	buttonColorOne: {
		color: Colors.DARK
	},
};

module.exports = styles;
