import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Post from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";

const FeedScreen = () => {
  const data = [
    {
      username: "F",
      imagesrc:
        "https://tg-cdn.azureedge.net/sites/default/files/images/paragraph/italrb/easy_guide_grass.jpg",
    },
    {
      username: "D",
      imagesrc:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Empty_beer_bottles_on_grass.jpg",
    },
    {
      username: "Zack",
      imagesrc:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Empty_beer_bottles_on_grass.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((data) => {
          return <Post username={data.username}></Post>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3BD",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontFamily: "Fredoka One",
    fontSize: 30,
  },
});

export default FeedScreen;
