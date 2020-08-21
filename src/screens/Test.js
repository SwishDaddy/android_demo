import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

/*
const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
    5}, ${132})`
}));

console.log(exampleData);

*/

let exampleData =
[
  {
    "backgroundColor": "rgb(136, 0, 132)",
    "key": "0",
    "label": 0
  },
  {
    "backgroundColor": "rgb(231, 5, 132)",
    "key": "1",
    "label": 1
  },
   {
    "backgroundColor": "rgb(11, 5, 132)",
    "key": "2",
    "label": 3
  },
]

class TestScreen extends Component {
  state = {
    data: exampleData
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? "blue" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 32
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
	  
	  	{console.log(this.state.data)}
		
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}

export default TestScreen;