import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Post({ username, image, location, date, description }) {
  return (
    <View style={styles.Post}>
      <View style={styles.Group534}>
        <View style={styles.User}>
          <View
            style={{
              width: 370,
              height: 500,
              backgroundColor: "rgba(131,197,190,1)",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.Image}
              source={require("../assets/pictures/environment.jpeg")}
            />
            <Text style={styles.Txt242}> {username}</Text>
            <Text style={styles.caption}>Caption: {description}</Text>
            <Image style={styles.IconHeartOutline} source={image} />
            <Ionicons
              style={styles.IconHeartOutline}
              name="heart-outline"
            ></Ionicons>
          </View>
        </View>

        <View style={styles.BommomPart}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Post: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 20,
    //backgroundColor: "rgba(0,168,150,1)",
    minWidth: 370,
    minHeight: 237,
    margin: 5,
  },
  Group534: {
    display: "flex",
    flexDirection: "column",
  },
  User: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 3,
    paddingRight: 31,
    marginBottom: 3,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 25,
    overflow: "hidden",
  },
  Txt242: {
    fontSize: 30,
    fontFamily: "Fredoka One",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    width: 273,
    height: 50,
  },

  Image: {
    width: 300,
    maxHeight: 500,
    marginBottom: 5,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 250,
  },
  BommomPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 15,
  },
  Comment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 100,
    marginRight: 19,
    borderRadius: 20,
    backgroundColor: "rgba(131,197,190,1)",
  },
  caption: {
    alignSelf: "flex-start",
    marginLeft: 55,
    fontFamily: "Fredoka One",
    fontWeight: "200",
  },
  Txt399: {
    fontSize: 12,
    fontFamily: "Fredoka One",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 192,
    height: 22,
  },

  IconHeartOutline: {
    fontSize: 30,
    alignSelf: "flex-end",
    justifyContent: "space-around",
    margin: 20,
  },
});
