import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import propTypes from 'prop-ty?'
import {formatDate,} from './api';


const styles =StyleSheet.create({
    card: {
        marginTop: 50,
      },
      cardHeader: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      date: {
        color: 'red',
      },

})
export default function EventCard(props){
return(
    <View 
    style={styles.card}
    
    >

        <View 
        style={styles.cardHeader}
        
        >

<Text 
style={styles.date}

>{formatDate(props.event.name)}</Text>
<Text 
// style={style.title}

>{props.event.age}</Text>


        </View>
    </View>
)
}
