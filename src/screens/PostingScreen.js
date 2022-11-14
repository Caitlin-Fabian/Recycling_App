import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Image, Dimensions } from "react-native";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

// Realm Imports
import { useUser, useApp } from "@realm/react";
import RealmContext from "../RealmContext";
const { useRealm, useQuery } = RealmContext;

export function PostingScreen(props) {
  const newDate = new Date();

  const { onSubmit } = props;
  const { onPressBack } = props;
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("../assets/profile.jpg");
  const [location, setLocation] = useState("");
  const [date_published, setDate] = useState(newDate);
  const [username, setUser] = useState("");

  const realm = useRealm();
  const user = useUser();

  // Current username
  useEffect(() => {
    if (realm) {
      let name = realm.objects("User");
      setUser(name[0].username);
      console.log(username);
    }
  }, []);

  // Updating realm subscriptions
  useEffect(() => {
    // initialize the subscriptions
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        // subscribe to all of the logged in user's to-do items
        let ownItems = realm
          .objects("User")
          .filtered(`owner_id == "${user.id}"`);
        // use the same name as the initial subscription to update it
        mutableSubs.add(ownItems, { name: "ownItems" });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

  // Could put this into one above later but lazy RN and dont want to break it
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

  return (
    <View style={styles.viewWrapper}>
      <TouchableOpacity onPress={() => onPressBack(false)}>
        <Ionicons
          name="caret-back-outline"
          style={styles.backButton}
        ></Ionicons>
      </TouchableOpacity>

      {/* Start of main container */}
      <View style={styles.container}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.post_image}
        ></Image>
        <Text style={styles.title}>Share your progress!</Text>
        <Input
          placeholder="Add Location!"
          onChangeText={setLocation}
          autoCapitalize="none"
        />
        <Input
          placeholder="Add a caption!"
          onChangeText={setDescription}
          autoCapitalize="none"
        />

        <Button
          title="Save"
          buttonStyle={styles.saveButton}
          onPress={() =>
            onSubmit({ location, description, date_published, image, username })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: "#F0F3BD",
    fontFamily: "Fredoka One",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: "Fredoka One",
    marginBottom: 100,
  },
  mainButton: {
    width: 200,
    fontFamily: "Fredoka One",
  },
  post_image: {
    width: 200,
    height: 200,
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
  backButton: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 30,
  },
});
