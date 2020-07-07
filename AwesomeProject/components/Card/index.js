import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../../assests/images/logo.png';
import Icon from 'react-native-vector-icons/Feather';

const Card = (props) => {
  const {name, onPress, onUpdate} = props;
  console.log('patient console==>', props);
  return (
    <TouchableOpacity style={styles.cardStyles} activeOpacity={0.2} {...props}>
      <View>
        <Image style={{height: 60, width: 60}} source={Logo} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: '600',
            fontFamily: 'Cochin',
          }}>
          {name || 'Omer Khan'}
        </Text>
      </View>
      <View>
        <Icon
          name="edit-3"
          size={30}
          color="#4eb6bb"
          onPress={() => onUpdate()}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardStyles: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    maxHeight: 70,
    maxWidth: 400,
    height: 200,
    width: 300,
    padding: 10,
  },
});
