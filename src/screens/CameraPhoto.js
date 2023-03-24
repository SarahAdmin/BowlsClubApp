import React from 'react';
import {View, Image, StyleSheet} from 'react-native'; 

const CameraPhoto = ({route}) => { 
    const { uri } = route.params;
    return ( 
        <View style={myStyles.container}>
            <Image style={myStyles.imageStyle} source={{uri: uri}} />
        </View>
    )
};

const myStyles = StyleSheet.create({ 
    container: { 
        flex: 1
    }, 
    imageStyle: { 
        flex:1, 
        alignSelf: "stretch",
    }
}); 


export default CameraPhoto; 