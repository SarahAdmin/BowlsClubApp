import {useState, useContext} from 'react';
import {View, StyleSheet, Text,FlatList,Button} from 'react-native'; 
import CardContext from '../contexts/CardContext';
import { actionTypes } from '../helpers/actionTypes';


 // TODO: once you are passing the ID uncomment the below two lines
  



const Results = ({navigation}) => { 
  const {state, route} = useContext(CardContext); 
  const {id} = useContext(CardContext);
 const card = state[0]
 const { remove} = useContext(CardContext);
  return ( 
      <View> 
          <Text> Competition Name: {card.cname} </Text>
          <Text> Date: {card.date.toLocaleString()} </Text>
          <Text> Rink Number: {card.rink} </Text>
          <Text> Team 1: {card.team1} </Text>
          <Text> Team 2: {card.team2} </Text>
          <Button title='Edit Card' color='red' onPress={() => { 
            navigation.navigate('Edit', {id:id });
          }} />
          <Button title='Delete Card' color='red' onPress={() => { 
            remove(card.id)
          }} />
      </View>
  );
};


const myStyles = StyleSheet.create({ 

styleOne: { 
  backgroundColor: 'snow'
},
dateContainer: { 
  flexDirection: 'column', 
  alignItems: 'center',
}




});





export default Results;