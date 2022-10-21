import React from 'react';
import { useCallback, useState } from 'react';
import { Text,View,Image,StyleSheet, TextInput, Alert,Button } from "react-native";
import { useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { AutourOne_400Regular } from '@expo-google-fonts/dev';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>The progress bar will be at the top!</Text>
            </View>
            <View>
                <Text style={styles.text}>The articles will be here (in the middle)!</Text>
            </View>
            <View>
                <Text style={styles.text}>Navigation bar will go at the bottom.</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F0F3BD',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      fontFamily: "FredokaOne",
      fontSize:30
    }
})


export default HomeScreen;