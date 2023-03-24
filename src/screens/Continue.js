import React, {useState, useContext} from 'react';
import {StyleSheet, View, Button,Text, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import {useFonts as useRoboto, Roboto_400Regular} from '@expo-google-fonts/roboto';
import CardContext from '../contexts/CardContext';




           const tableData= {
            tableTitle: ["", "1", ""], 
            teamData: [ ["","2", ""],
           ["", "3" , ""], 
        ["","4", ""]
           ],
            tableHead: ["SHOTS", "TOTAL", "ENDS", "SHOTS", "TOTAL"],
    };
          
    
    const MessageTwo = () => 
    Alert.alert( 
       'Shot Added!'
       [
           { 
               text: 'Cancel',
               onPress: () => console.log('Cancel Pressed')
           }, 
           { 
               text: 'OK', 
               onPress: () => console.log('OK Pressed')
           }
       ]
    );


       const Continue = (route) => {

        const [dataOne, setData] = useState(tableData);
        const [robotoLoaded] = useRoboto ({ 
            Roboto_400Regular,
        });

            const {state, create} = useContext(CardContext); 
            
           


            const card = state[0]

            let scores = card.scores.map((item) => [ 
                item.team1_shot, 
                item.team1_running_total, 
                item.end, 
                item.team2_shot, 
                item.team2_running_total
            ]);
            let results =  card.scores.map((item) => { 
                item.team1_shot + item.team1_running_total && item.team2_shot + item.team2_running_total
            });
        return (
            <View>
                <ScrollView>
                <Text style={styles.title}> Malden Bowls Club </Text>
                <Text>  ID: {card.id} </Text>
                <Text> Competition: {card.cname}  </Text>
                <Text> Date: {card.date.toLocaleDateString()} </Text>
                <Text> Rink No. : {card.rink} </Text>
                <Text> {card.team1} </Text> 
                <Text>  VS </Text>
                <Text> {card.team2} </Text>
                
        <Table borderStyle={{borderWidth: 2, borderColor:'black'}}>
            <TableWrapper>
            <Row data={dataOne.tableTitle} style={styles.head} textStyle={styles.textOne}/>
            <Rows data={dataOne.teamData} style={styles.head} textStyle={styles.textOne} />
            </TableWrapper>
            <Row data={dataOne.tableHead} style={styles.head} textStyle={styles.textOne}/> 
            <Rows data={scores} style={styles.head} textStyle={styles.textOne}/>
        </Table>
        <Text style={{textAlign:'left'}}> TOTAL: {results}</Text> 
        <Button title='Add Shot' color='purple' onPress={MessageTwo}/>
    </ScrollView>
        </View>
        )
        }
        
  


const styles = StyleSheet.create ({ 
    title: { 
        fontFamily:'Roboto_400Regular', 
        fontSize: 40, 
        fontWeight:'bold', 
        color:'navy',
        },
        head:{ height: 40, backgroundColor:'snow'},
        textOne: { 
            margin: 6, 
            fontFamily:'monospace',
            color:'black'
        }, 
    });

    export default Continue;