import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useFonts as useRoboto, Roboto_400Regular,}  from '@expo-google-fonts/roboto';



const LineBreakOne = () => ( 
  <View style={styles.lineBreak} />
);

const HomeScreen = ({navigation}) => { 
  const [robotoLoaded] = useRoboto({ 
   Roboto_400Regular,
  });
return (
<View style={styles.container}>
<MaterialIcons name="stars" size={48} color="blue" />
<Text style={{fontFamily:'Roboto_400Regular', fontSize: 40, fontWeight:'bold', color:'navy'}}>Welcome to Malden Bowls Club </Text>
<View>
  </View> 
  <LineBreakOne />
  <View> 
<Button color='red' title='Create New Card' onPress={() => navigation.navigate('CreateACard')} />
</View>
<LineBreakOne />
<View>
<Button color='red' title='Load Card'  onPress={() => navigation.navigate('Continue')} />
<LineBreakOne /> 
</View>
<View>
<Button color='red' title='My Results' onPress={() => navigation.navigate('Results')}/>  
<LineBreakOne /> 
</View>
<View> 
  <Button color='red' title='Take a Picture' onPress={() => navigation.navigate('Camera')} /> 
  <LineBreakOne />
</View>
<View> 
<Button color='red' title='Photo Gallery' onPress={() => navigation.navigate('Photo Gallery')}/>
<LineBreakOne />
</View>
<StatusBar style="auto" />
<MaterialIcons name="stars" size={48} color="blue" />
</View>
) 
   }; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  lineBreak: { 
    marginVertical: 8, 
    borderBottomWidth: StyleSheet.hairlinewidth,
  },
  });

  export default HomeScreen;