import React from "react";
import { useCallback, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { BSON } from "realm";
import { useUser } from "@realm/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

import { CreateToDoPrompt } from "../components/CreateToDoPrompt";
import RealmContext from "../RealmContext";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>The progress bar will be at the top!</Text>
      </View>
      <View>
        <Text style={styles.text}>
          The articles will be here (in the middle)!
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Navigation bar will go at the bottom.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3BD",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Fredoka One",
    fontSize: 30,
  },
});

export default HomeScreen;
