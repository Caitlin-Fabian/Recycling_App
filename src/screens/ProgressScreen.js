import React from "react";
import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Button, Alert } from "react-native";
import { BSON } from "realm";
import { useUser, useApp } from "@realm/react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Overlay, ListItem } from "react-native-elements";
import { getQuantity } from "../components/CreateItem";
import {
  fetchWaterbottle,
  waterbottle0,
  waterbottle1,
  waterbottle2,
} from "../components/assistfunctions";

import { CreateItem } from "../components/CreateItem";
import RealmContext from "../RealmContext";

const { useRealm, useQuery } = RealmContext;

const ProgressScreen = () => {
  const realm = useRealm();
  const items = useQuery("Recycled");
  const user = useUser();
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);

  const app = useApp();
  const totalRecyclables = realm.objects("Recycled");
  const recyclablesPlastic = realm
    .objects("Recycled")
    .filtered("type = 'plastic'");
  const recyclablesPaper = realm.objects("Recycled").filtered("type = 'paper'");
  const recyclablesMetal = realm.objects("Recycled").filtered("type = 'metal'");

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(waterbottle0);
  const [quantity, setQuantity] = useState("");

  // Callback function that points to the value quantity. This is getting passed to the child component
  // CreateItem, which is then pointing to another component which sets the value of quantity. It passed the
  // value up and then sets quantity.
  const fetchQuantity = (quantity) => {
    setQuantity(quantity);
  };

  // This is to update the realm database
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

  // createItem() takes in the type of the item and what it is then creates the item in the realm DB
  const createItem = ({ type }) => {
    // if the realm exists, create an Item
    if (realm) {
      for (var i = 0; i < quantity; i++) {
        realm.write(() => {
          realm.create("Recycled", {
            _id: new BSON.ObjectID(),
            owner_id: user.id,
            type,
          });
        });
      }
    }
  };

  // Deletes all of the DB data
  const deleteItems = () => {
    // if the realm exists, get the Item with a particular _id and delete it
    if (realm) {
      realm.write(() => {
        // Delete all objects from the realm.
        realm.deleteAll();
      });
    }
  };

  // gets the waterbottle image
  const getImage = () => {
    // calling assist function from component file
    let waterbottle = fetchWaterbottle(index);
    setImage(waterbottle);
    if (totalRecyclables.length >= 100) {
      Alert.alert("YOU REACHED 100!");
    }
  };

  const checkCount = () => {
    console.log("Total count: " + totalRecyclables.length + " Index: " + index);
    if (totalRecyclables.length >= index * 10) {
      setIndex(index + 1);
    }
  };

  const number = 0;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            buttonStyle={styles.addToDoButton}
            onPress={() => {
              deleteItems();
              setIndex(0);
              setImage(waterbottle0);
            }}
          />
          <Button
            title="Add Recyclable"
            style={styles.addItem}
            onPress={() => {
              setShowNewItemOverlay(true);
              checkCount();
            }}
          ></Button>
        </View>
        {console.log("total count " + totalRecyclables.length)}
        <View style={styles.counts}>
          <Text style={styles.cols}>
            {recyclablesPlastic.length}
            {"\n"}Plastic
          </Text>
          <Text style={styles.cols}>
            {recyclablesPaper.length}
            {"\n"}Paper
          </Text>
          <Text style={styles.cols}>
            {recyclablesMetal.length}
            {"\n"}Metal
          </Text>
        </View>

        <Overlay
          isVisible={showNewItemOverlay}
          onBackdropPress={() => setShowNewItemOverlay(false)}
        >
          <CreateItem
            fetchQuantity={fetchQuantity}
            onSubmit={({ type }) => {
              setShowNewItemOverlay(false);
              createItem({ type });
              getImage();
            }}
          />
        </Overlay>
        <Image source={image} style={styles.bottle}></Image>
        <View style={styles.counts}>
          <Text style={styles.cols}>
            {totalRecyclables.length}
            {"\n"}Total Count
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
    alignItems: "center",
  },
  bottle: {
    width: 150,
    height: 380,
  },
  counts: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cols: {
    fontFamily: "Fredoka One",
    width: 100,
    marginTop: 45,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
});

export default ProgressScreen;
