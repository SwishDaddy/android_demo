import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/MaterialIcons";

const Styles = require('./Styles');
const Constants = require('./Constants');

class ProductScanRNCamera extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    //this.barcodeCodes = [];
	
    this.state = {
		camera: {
		type: RNCamera.Constants.Type.back,
		flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }
  
 componentDidMount() {
		this._mounted = true;
				
		//console.log(this.props.navigation);
		
		//this.setState({
		//	dbid: this.props.route.params.dbid,
		//	sampleid: this.props.route.params.sampleid,
		//})

	}

  onBarCodeRead(scanResult) {
    Alert.alert(scanResult.type + " - " + scanResult.data);
    if (scanResult.data != null) {
	//if (!this.barcodeCodes.includes(scanResult.data)) {
	  //this.barcodeCodes.push(scanResult.data);
	  
	  console.log(this.props);
	  
	   console.log(this.state);
	  
	  
	//}
    }
    return;
  }


render() {
	return (
		<View style={{flex:1}}>
			<RNCamera
				ref={ref => {
					this.camera = ref;
				}}
				defaultTouchToFocus
				flashMode={this.state.camera.flashMode}
				mirrorImage={false}
				onBarCodeRead={this.onBarCodeRead.bind(this)}
				onFocusChanged={() => {}}
				onZoomChanged={() => {}}          
				style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
				type={this.state.camera.type}
				captureAudio={false}
			/>
				
		</View>
		);
	}
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
};

export default ProductScanRNCamera;