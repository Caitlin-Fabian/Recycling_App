import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {StyleSheet, Text, View, Alert, Image } from "react-native";
import { Input, Button } from "react-native-elements";

export function PostingScreen({}) {
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");

    const onPressShare = async () => {
        // need to be able to add post to feed
    }

    return (
        <SafeAreaProvider>
            <View style={styles.viewWrapper}>
                <Text style={styles.title}>Share your progress!</Text>
                <Input
                    placeholder="Add Location!"
                    onChangeText={setLocation}
                    autoCapitalize="none"
                />
                <Input 
                    placeholder="Add a caption!"
                    onChangeText={setCaption}
                    autoCapitalize="none"
                />
                <Button 
                    title="Share"
                    buttonStyle={styles.mainButton}
                    onPress={onPressShare}
                />
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    viewWrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#F0F3BD",
      fontFamily: "Fredoka One",
    },
    title: {
      fontSize: 30,
      fontFamily: "Fredoka One",
      marginBottom: 100,
    },
    mainButton: {
      width: 350,
      fontFamily: "Fredoka One",
    },
    input: {
      height: 40,
      width: 200,
      backgroundColor: "#FFF",
    },
    logo: {
      marginTop: 100,
      width: 200,
      height: 200,
      alignItems: "center",
    },
  });