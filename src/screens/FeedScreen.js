import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, Component, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Post from "../components/Post";
import RealmContext from "../RealmContext";
import { useUser, useApp } from "@realm/react";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Overlay } from "react-native-elements";
import { PostingScreen } from "./PostingScreen";

const { useRealm, useQuery } = RealmContext;

const FeedScreen = () => {
  const realm = useRealm();
  const user = useUser();
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);

  useEffect(() => {
    // initialize the subscriptions
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        // subscribe to all of the logged in user's to-do items
        let ownItems = realm
          .objects("Post")
          .filtered(`owner_id == "${user.id}"`);
        // use the same name as the initial subscription to update it
        mutableSubs.add(ownItems, { name: "ownItems" });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

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
    <SafeAreaProvider style={styles.container}>
      {/* <View style={styles.container}>
        {data.map((data) => {
          return <Post username={data.username}></Post>;
        })}
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowNewItemOverlay(true);
          }}
        >
          <Ionicons
            name="add-circle-outline"
            style={styles.addPostButton}
          ></Ionicons>
        </TouchableOpacity>
      </View>

      <Overlay
        isVisible={showNewItemOverlay}
        onBackdropPress={() => setShowNewItemOverlay(false)}
      >
        <PostingScreen
          onSubmit={({ summary }) => {
            setShowNewItemOverlay(false);
            createItem({ summary });
          }}
          onPressBack={({ showNewItemOverlay }) => {
            setShowNewItemOverlay(false);
          }}
        ></PostingScreen>
      </Overlay>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3BD",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontFamily: "Fredoka One",
    fontSize: 30,
  },
  postContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  addPostButton: {
    marginTop: 70,
    marginRight: 20,
    fontSize: 40,
  },
});

export default FeedScreen;
