import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';
import EventCrad from './EventCard';

let obj = [
  {
    id: '1',
    name: 'Arshaq',
    age: 24,
  },
  {
    id: '2',
    name: 'Arif',
    age: 22,
  },
];
// const styles = StyleSheet.create({
//   list: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: "#F3F3F3",
//     // borderRadius:20,
   
//   },
// });
class EventList extends Component {
  render() {
    return (
      <View>
      <FlatList
        // style={styles.list}
        data={obj}
        renderItem={({item, index}) => <EventCrad event={item} />}
        keyExtractor={(item) => item.id}
      />
     
      </View>
    );
  }
}

export default EventList;
