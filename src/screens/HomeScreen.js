import React, { useCallback, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { BSON, User } from "realm";
import { useUser } from "@realm/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

import { CreateToDoPrompt } from "../components/CreateToDoPrompt";
import RealmContext from "../RealmContext";
const { useRealm, useQuery } = RealmContext;

const HomeScreen = () => {
  const realm = useRealm();
  const user = useUser();

  const subscriptions = realm.subscriptions;

  const customdata = user.profile.email;
  const userName = customdata.slice(0, customdata.indexOf("@"));
  const place = realm.objects("User");

  useEffect(() => {
    // initialize the subscriptions
    const updateSubscriptions = async () => {
      await realm.subscriptions.update((mutableSubs) => {
        // subscribe to all of the logged in user's to-do items
        // use the same name as the initial subscription to update it
        mutableSubs.add(place);
        mutableSubs.add(realm.objects("User"), {
          name: "UserSubscription",
          throwOnUpdate: true,
        });
      });
    };
    updateSubscriptions();
  }, [realm, user]);

  useEffect(() => {
    const getUsername = () => {
      if (place.length == 0) {
        realm.write(() => {
          realm.create(
            "User",
            {
              _id: user.id,
              username: userName,
              status: "online",
              owner_id: user.id,
            },
            "modified"
          );
        });
      }
    };
    getUsername();
    console.log(place);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>The progress bar will be at the top!</Text>
      </View>
      <View>
        <Text style={styles.text}>
          The articles will go here (in the middle)!
        </Text>
      </View>
    </View>
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
});

export default HomeScreen;
