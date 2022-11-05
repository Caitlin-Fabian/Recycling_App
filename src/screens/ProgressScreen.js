import React from "react";
import { useCallback, useEffect, useState } from "react";
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
import { useUser, useApp } from "@realm/react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Overlay, ListItem } from "react-native-elements";

import { CreateItem } from "../components/CreateItem";
import { CreateToDoPrompt } from "../components/CreateToDoPrompt";
import RealmContext from "../RealmContext";
import Icon from "react-native-vector-icons/FontAwesome";

const { useRealm, useQuery } = RealmContext;

const ProgressScreen = () => {
  const realm = useRealm();
  const items = useQuery("Recycled");
  const user = useUser();
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);
  const app = useApp();
  const recyclables = realm.objects("Recycled");
  const plastic = recyclables.filtered("type = 'plastic'");
  const plasticCount = plastic.length;
  const recycleCount = recyclables.length;

  useEffect(() => {
    // initialize the subscriptions
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        // subscribe to all of the logged in user's to-do items
        let ownItems = realm
          .objects("Recycled")
          .filtered(`owner_id == "${user.id}"`);
        // use the same name as the initial subscription to update it
        mutableSubs.add(ownItems, { name: "ownItems" });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

  // createItem() takes in the type of the item and what it is
  const createItem = ({ type }) => {
    // if the realm exists, create an Item
    if (realm) {
      realm.write(() => {
        realm.create("Recycled", {
          _id: new BSON.ObjectID(),
          owner_id: user.id,
          type,
        });
      });
    }
  };

  console.log(recyclables, "\n");
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={require("../assets/waterbottle/waterbottle0.png")}
            style={styles.bottle}
          ></Image>
          <Text style={styles.text}>This is the progress screen</Text>
          <Button
            title="+ ADD TO-DO"
            buttonStyle={styles.addToDoButton}
            onPress={() => setShowNewItemOverlay(true)}
          />
          <Overlay
            isVisible={showNewItemOverlay}
            onBackdropPress={() => setShowNewItemOverlay(false)}
          >
            <CreateItem
              onSubmit={({ type }) => {
                setShowNewItemOverlay(false);
                createItem({ type });
              }}
            />
          </Overlay>
          <Text>
            {recycleCount} {plasticCount}
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
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
  bottle: {
    width: 150,
    height: 380,
  },
});

export default ProgressScreen;
