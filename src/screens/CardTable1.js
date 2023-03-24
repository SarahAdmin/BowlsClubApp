import React, {useState, useContext, useEffect, useReducer} from 'react';
import {StyleSheet, View, Button,Text, TextInput, ScrollView, FlatList, Alert} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import{useFonts as useRoboto, Roboto_400Regular} from '@expo-google-fonts/roboto';
import CardContext from '../contexts/CardContext';



const LineBreakThree = () => { 
    <View style={styles.lineBreak1} />
}

const tableData = {
           teamHead: ["", "1", ""],
            teamData: [ ["", "2", ""],
           ["", "3" , ""], 
        ["", "4", ""]
           ],
            tableHead: ["SHOTS", "TOTAL", "ENDS", "SHOTS", "TOTAL"],
         };
        
      
         const MessageOne = () => 
         Alert.alert( 
            'Shot Added!'
            [
                { 
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }, 
                { 
                    text: 'OK', 
                    onPress: () => console.log('OK Pressed'),
                    style: 'ok'
                }
            ]
         );
  
       const CardTable1 = ({navigation, route}) => {  
            const [data, setData] = useState(tableData);
            const {state, create} = useContext(CardContext); 
             
  
        return (
            <View>
                <ScrollView>
                    <Text style={styles.title}> Malden Bowls Club </Text>
                <Text>  ID:  </Text>
                <Text> Competition: </Text>
                <Text> Date:  </Text>
                <Text> Rink No. : </Text>
                <Text>  </Text> 
                <Text>  VS </Text>
                <Text>  </Text>
                
        <Table borderStyle={{borderWidth: 2, borderColor:'black'}}>
            <TableWrapper>
            <Row data={data.teamHead} style={styles.head} textStyle={styles.textOne} />
            <Rows data={data.teamData} style={styles.head} textStyle={styles.textOne} />
            </TableWrapper>
            <Row data={data.tableHead} style={styles.head} textStyle={styles.textOne}/> 
           
          
        </Table>
       
        <Text style={{textAlign:'left'}}> TOTAL: </Text> 
        <View>
        <TextInput style={styles.inputDetails}  placeholder='0' keyboardType='numeric' />
        <LineBreakThree /> 
        </View>
        <View>
        <Button title='Add Shot' color='purple' onPress={MessageOne} />
    
        <LineBreakThree /> 
        </View>
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
    
        lineBreak1: { 
            marginVertical: 8, 
            borderBottomWidth: StyleSheet.hairlinewidth,
          },
          inputDetails: { 
            height: 40, 
            margin:10, 
            borderWidth: 1, 
            padding: 10, 
            fontFamily:'monospace',
            color:'black',
          },
});


export default CardTable1;


