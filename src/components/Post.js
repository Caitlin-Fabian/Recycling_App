import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Post({ username, image, location, date, description }) {
  return (
    <View style={styles.Post}>
      <View style={styles.Group534}>
        <View style={styles.User}>
          <Image style={styles.profile} source={image} />
          <Text style={styles.Txt242}>{username}</Text>
        </View>
        <Image style={styles.Image} source={image.image} />
        <Text>{description}</Text>
        <View style={styles.BommomPart}>
          <View style={styles.Comment}>
            <Text style={styles.Txt399}>Comment...</Text>
          </View>
          <Image style={styles.IconHeartOutline} source={image} />
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
    backgroundColor: "rgba(0,168,150,1)",
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
    paddingLeft: 0,
    paddingRight: 31,
    marginBottom: 3,
  },
  profile: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  Txt242: {
    fontSize: 19,
    fontFamily: "Fredoka One",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    width: 273,
    height: 22,
  },

  Image: {
    width: 360,
    maxHeight: 500,
    marginBottom: 3,
    backgroundColor: "#000000",
    borderRadius: 10,
    height: 200,
  },
  BommomPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Comment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 7,
    paddingRight: 101,
    marginRight: 11,
    borderRadius: 11,
    backgroundColor: "rgba(131,197,190,1)",
  },
  Txt399: {
    fontSize: 12,
    fontFamily: "Fredoka One",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 195,
    height: 22,
  },

  IconHeartOutline: {
    width: 23.06,
    height: 21,
  },
});
