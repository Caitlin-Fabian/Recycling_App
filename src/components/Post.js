import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Post({ username, image, location, date, description }) {
  return (
    <View style={styles.Post}>
      <View style={styles.Group534}>
        <View style={styles.User}>
        
        <View style={styles.profileImage}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.logo}
          ></Image>
        </View>
          <Text style={styles.Txt242}> {username}</Text>
        </View>
        <Image
          style={styles.Image}
          source={
            {
              // uri: props.imagesrc,
            }
          }
        />
        <Text>{description}</Text>
        <View style={styles.BommomPart}>
          <View style={styles.Comment}>
            <Text style={styles.Txt399}>Comment...</Text>
          </View>
          <Image
            style={styles.IconHeartOutline}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1pe92a9a0gm-447%3A11?alt=media&token=a3ff24cc-c2ef-4f18-b1c6-0699b5a81296",
            }}
          />
        </View>
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
    fontSize: 16,
    fontFamily: "Fredoka One",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    width: 273,
    height: 22,
  },

  Image: {
    width: 370,
    maxHeight: 500,
    marginBottom: 5,
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
  Txt399: {
    fontSize: 12,
    fontFamily: "Fredoka One",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 192,
    height: 22,
  },

  IconHeartOutline: {
    width: 23.06,
    height: 21,
  }
});
