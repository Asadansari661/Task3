import React, {useState} from 'react';
import {ActivityIndicator,ImageBackground,Dimensions} from 'react-native'

const Splash = ()=>{
    return (
        <ImageBackground
        source={require("../images/im.png")}
        style={{height:Dimensions.get("window").height,width:null}}
        />
    )
}

export default Splash