import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Styles = require('./Styles');
const Constants = require('./Constants');


export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : this.props.expanded ? this.props.expanded : null,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
		
    }
  
  render() {
	  
    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
               {this.props.title}
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={50} color={'#fff'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                
				
				this.state.expanded &&
				//this.props.expanded &&
                <View>
                    {this.props.data}    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        //fontSize: 14,
        //fontWeight:'bold',
        //color: '#000',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
       // backgroundColor: '#ddd',
    },
    parentHr:{
        height:1,
        color: '#000',
        width:'100%'
    },
    child:{
        backgroundColor: '#fff',
        padding:16,
    }
    
});