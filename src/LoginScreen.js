import React from 'react';
import { useCallback, useState } from 'react';
import { Text,View,Image,StyleSheet, TextInput, Alert,Button } from "react-native";
import { useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Realm from "realm";



const LoginScreen = () => {
  const [text, setText] = useState('');


  const [fontsLoaded] = useFonts({
    'FredokaOne': require('../assets/fonts/FredokaOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


    return(
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <View><Text style={{fontFamily: "FredokaOne", fontSize: 60}}> Sign in</Text>
              <Text style={styles.text}>Email:</Text>
              <TextInput
                style={styles.contentInput}
                placeholder="email@address.com"
                onChangeText={newText => setText(newText)}
                defaultValue ={text}
              />  
              <Text style={styles.text}>Password:</Text>
                 <TextInput
                style={styles.contentInput}
                placeholder="password"
                onChangeText={newText => setText(newText)}
                defaultValue ={text}
              />
            </View>
            <Button
              title= "Sumbit" 
              onPress={()=> Alert.alert('Will fix later')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F0F3BD',
        alignItems:'center'
    },
    text:{
      marginTop: 10,
      fontFamily: "FredokaOne",
      fontSize:30,
      textAlign: 'justify',
    },  
    logo:{
        marginTop: 70,
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    contentInput:{
      height: 40,
      width: 200,
      backgroundColor: '#FFF',
    }

})

export default LoginScreen;