import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateACard from './src/screens/CreateACard';
import HomeScreen from './src/screens/HomeScreen'; 
import CardTable1 from './src/screens/CardTable1';
import Results from './src/screens/Results'; 
import Continue from './src/screens/Continue';
import EditCard from './src/screens/EditCard';
import CameraOne from './src/screens/CameraOne';
import CameraPhoto from './src/screens/CameraPhoto';
import PhotoPicker from './src/screens/PhotoPicker';
import {CardProvider} from './src/contexts/CardContext';




const Stack = createNativeStackNavigator(); 

const App = () => { 
  return ( 
    <CardProvider>
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home'> 
      <Stack.Screen  
          name='Home'
          component={HomeScreen}
          options={{title:'HomePage'}}
          /> 
        <Stack.Screen 
            name='CreateACard'
            component={CreateACard}
            options={{title:'CreateCard'}}
            />
        <Stack.Screen 
            name='Results'
            component={Results} 
            options={{title:'Results'}}
          /> 

        <Stack.Screen 
            name='Continue'
            component={Continue}
            options={{title:'Continue'}}
          />
        
        
        <Stack.Screen 
        name='BowlsTable'
        component={CardTable1}
        options={{title:'Table'}}
        />

        <Stack.Screen 
        name='Edit'
        component={EditCard}
        options={{title:'Edit'}}
        />

        <Stack.Screen 
            name='Camera'
            component={CameraOne} 
            options={{title: 'Take a Picture'}}
            /> 

        <Stack.Screen 
           name='Photo'
           component={CameraPhoto}
           options={{title: "Your Image"}}
           />
      <Stack.Screen 
         name='Photo Gallery'
         component={PhotoPicker}
         options={{title: 'Gallery'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </CardProvider>
    
  );
};
  

export default App;


