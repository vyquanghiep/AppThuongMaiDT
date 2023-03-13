import React from 'react'
import { ImageBackground, view,Text, SafeAreaView,StatusBar,Image} from 'react-native'

function Wellcome (){
    return(
        <ImageBackground style={{height:'100%', width:'100%'}} source={require('../images/wellcome.png')}>
            <StatusBar barStyle="light-content"></StatusBar>
            
        </ImageBackground>
    );
};
export default Wellcome;
