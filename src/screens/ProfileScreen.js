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

import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
            <View style={{ alignSelf: "center" }}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>Seoyoung Kong</Text>
                </View>

                <View style={styles.profileImage}>
                        <Image source={require("../assets/profile.jpg")} style={styles.logo}></Image>
                    </View>
                <View style={styles.add}>
                    <Ionicons name="ios-add" size={25} color="#DFD8C8" style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
                </View>
            </View>
                
            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, { fontSize: 23 }]}>10</Text>
                    <Text style={[styles.text, styles.subText]}>Posts</Text>
                </View>
                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                    <Text style={[styles.text, { fontSize: 23 }]}>10</Text>
                    <Text style={[styles.text, styles.subText]}>Followers</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, { fontSize: 23 }]}>10%</Text>
                    <Text style={[styles.text, styles.subText]}>Progress</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}>
                <View style={{ width: 330, height: 300, alignItems: "center", backgroundColor: '#83c5be'}}>
                    <Text></Text>
                </View>
            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#F0F3BD"
      },
  text: {
      fontFamily: "Fredoka One",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  }
  });

export default ProfileScreen;
