import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
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
class EventList extends Component {
  render() {
    return (
      <FlatList
        data={obj}
        renderItem={({item, index}) => <EventCrad event={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default EventList;
