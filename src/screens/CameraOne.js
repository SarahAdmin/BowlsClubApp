import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native'; 
import {Camera} from 'expo-camera'; 



const CameraOne = ({navigation}) => { 
    const [hasPermission, setHasPermission] = useState(null); 
    const getPermission = async () => { 
        const {status} = await Camera.requestPermissionsAsync(); 
        setHasPermission(status === 'granted'); 
    }; 
    useEffect(() => { 
        getPermission(); 
    }, []); 
    if(hasPermission === null) { 
        return <Text>Awaiting Permission</Text>
    }
    if (hasPermission === false) {
    return <Text>Access Denied!</Text>
    }
    let camera 
const getPicture = async () => { 
    if (camera) { 
        const photo = await camera.takePictureAsync(); 
        navigation.navigate('Photo', {uri: photo.uri});
        
    };
};
    return ( 
        <View style={myStyles.container}> 
        <Camera style={myStyles.subContainer} ref={(ref) => {camera = ref}}>
            <Pressable style={myStyles.buttonStyle} onPress={() => { getPicture() }}> 
            <Text style={myStyles.textStyle}> Snap! </Text>
            
            </Pressable>
        </Camera>

        </View>
    );
}; 




const myStyles = StyleSheet.create({
    container: { 
        flex: 1
    }, 
    subContainer: { 
        flex:1, 
        backgroundColor: 'transparent', 
        flexDirection: 'row-reverse', 
        alignItems: 'flex-end'
    }, 
    buttonStyle: { 
        flex:0.1, 
        alignItems:'center'
    }, 
    textStyle: { 
        fontSize: 16, 
        marginBottom: 15, 
        color: 'lime',
    }
}); 


export default CameraOne;