import  {useContext} from 'react'; 
import CardContext from './CardContext';
import {Button} from 'react-native';

const AddCardScreen = ({navigation}) => { 
    const {create} = useContext(CardContext);
    return ( 
        <Button title='Submit Card' onPress={() => { 
            create(cname, date,rink, team1, team2, () => navigation.pop());
        }} /> 
    )
}





export default AddCardScreen;