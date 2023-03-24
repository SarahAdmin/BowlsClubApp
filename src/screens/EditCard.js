import React, {useState, useContext} from 'react';
import {StyleSheet, View, Button,Text, TextInput, ScrollView} from 'react-native';
import CardContext from '../contexts/CardContext';
 
const EditCard = ({navigation, route}) => { 
    const {id} = route.params;
    const {state, update} = useContext(CardContext); 
    const currentEntry = state.find((e) => e.id === id); 
    const [cname, setCName] = useState(currentEntry.cname); 
    const [rink, setRink] = useState(currentEntry.rink);
    const [team1, setTeamOne] = useState(currentEntry.team1);
    const [team2, setTeamTwo] = useState(currentEntry.team2);

return ( 
 <Button title='Submit Card' onPress={() => { update(currentEntry.id, currentEntry.cname,currentEntry.date, currentEntry.rink, currentEntry.team1, currentEntry.team2,() => 
    navigation.pop());}} />
   )
};


const styles = StyleSheet.create ({ 
    title: { 
        fontFamily:'Roboto_400Regular', 
        fontSize: 40, 
        fontWeight:'bold', 
        color:'navy',
        },
    
        textOne: { 
            margin: 6, 
            fontFamily:'monospace',
            color:'black'
        }, 
    
       
          inputDetails: { 
            height: 20, 
            margin:10, 
            borderWidth: 1, 
            padding: 5, 
            fontFamily:'monospace',
            color:'black',
          },
});


export default EditCard;

