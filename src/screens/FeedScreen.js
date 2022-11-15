import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, Component, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Post from "../components/Post";
import { useUser, useApp } from "@realm/react";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Overlay, ListItem, Button } from "react-native-elements";
import { PostingScreen } from "./PostingScreen";
import Icon from "react-native-vector-icons/FontAwesome";

// Realm specific
import { BSON } from "realm";
import RealmContext from "../RealmContext";

const { useRealm, useQuery } = RealmContext;

const FeedScreen = () => {
  const realm = useRealm();
  const user = useUser();
  const posts = useQuery("Post");
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

  const createPost = ({
    location,
    description,
    date_published,
    image,
    username,
  }) => {
    // if the realm exists, create an Item
    if (realm) {
      realm.write(() => {
        realm.create("Post", {
          _id: new BSON.ObjectID(),
          owner_id: user.id,
          location,
          description,
          date_published,
          image,
          username,
        });
      });
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
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
            onSubmit={({
              location,
              description,
              date_published,
              image,
              username,
            }) => {
              setShowNewItemOverlay(false);
              createPost({
                location,
                description,
                date_published,
                image,
                username,
              });
            }}
            onPressBack={({ showNewItemOverlay }) => {
              setShowNewItemOverlay(false);
            }}
          ></PostingScreen>
        </Overlay>

        {posts.map((post) => {
          return (
            <View>
              <Post
                username={post.username}
                image={post.image}
                location={post.location}
                date={post.date}
                description={post.description}
              />
            </View>
          );
        })}
      </ScrollView>
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
  profile: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  Txt242: {
    fontSize: 19,
    fontFamily: "Fredoka One",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    width: 273,
    height: 22,
  },
  addPostButton: {
    marginTop: 40,
    marginRight: 20,
    fontSize: 40,
  },
  itemTitle: {
    flex: 1,
  },
});

export default FeedScreen;
