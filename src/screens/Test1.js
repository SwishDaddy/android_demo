import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { DraggableGrid } from 'react-native-draggable-grid';

const Styles = require('../common/Styles');
const Constants = require('../common/Constants');
 
interface MyTestProps {
 
}
 
interface MyTestState {
  data:{key:string, name:string}[];
}
 
export default class TestScreen extends React.Component<MyTestProps, MyTestState>{
 
  constructor(props:MyTestProps) {
    super(props);
    this.state = {
		numColumns: 2,
		data:[
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-1.jpg',key:'one'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-2.jpg',key:'two'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-3.jpg',key:'three'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-4.jpg',key:'four'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-5.jpg',key:'five'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-6.jpg',key:'six'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-7.jpg',key:'seven'},
			{name: Constants.APIs.API_IMAGES_URL + 'Swisher-8.jpg',key:'eight'},
		],
	};
  }
  
  render_item(item) {
    return (
      <View
        style={styles.item}
        key={item.key}
      >   
		
		<View>
			<Image
				source={{uri: item.name}}
				style={{height: '100%', width: 500, resizeMode : 'contain', margin: 10 }}					
			/>
		</View>
      </View>
    );
  }
 
  render() {
    return (
      <View style={styles.wrapper}>
        <DraggableGrid
          numColumns={this.state.numColumns}
          renderItem={this.render_item}
          data={this.state.data}
          onDragRelease={(data) => {
            this.setState({data});// need reset the props data sort after drag release
          }}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  button:{
    width:150,
    height:100,
    backgroundColor:'blue',
  },
  wrapper:{
    paddingTop:10,
    width:'100%',
    height:'100%',
    justifyContent:'center',
  },
  item:{
    width: '100%',
    height: '100%',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
	paddingBottom: 30,
  },
  item_text:{
    fontSize:40,
    color:'#FFFFFF',
  },
});