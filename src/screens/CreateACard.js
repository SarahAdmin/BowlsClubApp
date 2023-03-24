import React, {useState, useReducer, useContext } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'; 
import CardContext from '../contexts/CardContext';
import DatePicker from '@react-native-community/datetimepicker';


const LineBreakTwo = () => ( 
    <View style={myStyles.lineBreak} />
);

function showDatePicker() { 
    setDatePicker(true);
}; 

function onDateSelected(event, value) { 
    setDate(value)
    setDatePicker(true)
}

const CreateACard = ({navigation, route}) => {
    const {state, create} = useContext(CardContext);
    const [id, setID] = useState("");
    const [cname, setCName] = useState("");
    const [date] = useState(new Date())
    const [rink, setRink] = useState("");
    const [team1, setTeamOne] = useState("");
    const [team2, setTeamTwo] = useState("");
    const card = state[""];


    
    return ( 
        <View> 
            <Text style={myStyles.title}> Malden Bowls Club  </Text>
            <View> 
                <Text style={myStyles.MyTexts}> ID </Text>
                <TextInput style={myStyles.inputDetails} value={id} placeholder="Type Here" onChange={setID}/> 
              <LineBreakTwo />
            </View>
            <View>
            <Text style={myStyles.MyTexts}> Competition Name </Text>
              <TextInput style={myStyles.inputDetails} value={cname} placeholder="Type Here" onChange={setCName}/> 
              <LineBreakTwo />
              </View>
              <View>
             <Text style={myStyles.MyTexts}> Date  </Text> 
             <DatePicker value={date}/>
             <LineBreakTwo /> 
             </View>
             <View>
            <Text style={myStyles.MyTexts}> Rink Number </Text>
            <TextInput style={myStyles.inputDetails} placeholder="Type Here" autoFocus={true} 
            autoCorrec={false} keyboardType='numeric' maxLength={4} value={rink} onChange={setRink}/> 
            <LineBreakTwo />
            </View> 
            <Text style={myStyles.MyTexts}> Team Name </Text>
            <TextInput style={myStyles.inputDetails} placeholder="Team 1" value={team1} onChange={setTeamOne} /> 
            <Text style={{fontFamily:'monospace'}}> VS </Text>
            <TextInput style={myStyles.inputDetails} placeholder="Team 2" value={team2} onChange={setTeamTwo} /> 
            <View> 
            <Button style={myStyles.buttonOne} title='Go to the Game' onPress={() => navigation.navigate('BowlsTable')} />
            <LineBreakTwo />
            </View>
            <View>
            <Button style={myStyles.buttonOne} title='Home Screen' onPress={()  => navigation.navigate('Home')} />
            <LineBreakTwo />
            </View>
            <View>
            <Button style={myStyles.buttonOne} title='Create' onPress={()  => {create(id,cname,date,rink,team1,team2, () => 
            navigation.pop()); }} />
            <LineBreakTwo />
            </View> 
        </View>
    );
} 

const myStyles = StyleSheet.create ({ 
    container: {
    flex: 1,
    backgroundColor:'Snow',
    alignItems: 'center', 
    justifyContent: 'center'
    },
    inputDetails: {
        height: 40, 
        margin:12, 
        borderWidth: 1, 
        padding: 10,
        fontFamily:'monospace', 
        color:'black',
    },
    MyTexts: { 
        fontFamily:'monospace', 
        fontSize: 20, 
        fontWeight: 'normal', 
        color:'white', 
        backgroundColor:'blue',
    }, 
  title: { 
fontFamily:'sans-serif', 
fontSize: 40, 
fontWeight:'bold', 
color:'navy',
},
buttonOne: { 
    color:'red',
    
},
lineBreak: { 
    marginVertical: 8, 
    borderBottomWidth: StyleSheet.hairlinewidth,
  },

});

export default CreateACard;