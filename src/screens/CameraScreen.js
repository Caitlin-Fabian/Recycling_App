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

import RealmContext from "../RealmContext";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>This will be the Camera Screen</Text>
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

export default CameraScreen;
