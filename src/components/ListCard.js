import React, {useContext, useEffect, useReducer }from 'react'; 
import CardContext from '../contexts/CardContext';
import {Pressable, Button, View} from 'react-native';


const ListCard = ({navigation}) => { 
    const {card, remove } = useContext(CardContext);
    useEffect (() => { 
        navigation.setOptions({ 
            headerRight: () => ( 
                <Pressable onPress={() => navigation.navigate('Create')}> 
                <Button title='Add' /> 
                </Pressable>
            )
        })
    }, [card]); 
    <Pressable 
    onPress={() => { 
        remove(card.cname)
    }}>   
    
    <Button title='Remove' />
    </Pressable>

}

const initialCardState = [ 
    { 
        cname: "", 
        date: new Date(),
        rink: "", 
        team1: "",
        team2: ""
    }
];

export default ListCard;