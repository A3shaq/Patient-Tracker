import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

let obj = [
  {
    id: "1",
    name: 'Arshaq',
    age: 24,
  },
  {
    id: "2",
    name: 'Arif',
    age: 22,
  },
];
class EventList extends Component {
  render() {
    return (
      <FlatList
        data={obj}
     
        renderItem={({item, index}) =>  (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text keys={index}> {item.name}</Text>

            <Text keys={index}>{item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default EventList;
