import React from "react";
import { useCallback, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { Input } from "react-native-elements";
import { BSON } from "realm";
import { useUser } from "@realm/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RealmContext from "../RealmContext";
import { LogoutButton } from "../components/LogoutButton";

import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";
const { useRealm, useQuery } = RealmContext;

const ProfileScreen = () => {
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);
  const realm = useRealm();
  const user = useUser();

  const place = realm.objects("User").filtered("status = 'online'");
  const [name, setName] = useState(place[0].username);

  // This is a function that is specific to realm. This is required to update the User information from the realm instance
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

  // This function will either create or change the User
  const updateUser = async (userName) => {
    // if the realm exists, create an Item
    if (realm) {
      realm.write(() => {
        realm.create(
          "User",
          {
            _id: user.id,
            username: userName,
            owner_id: user.id,
            status: "online",
          },
          "modified"
        );
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <LogoutButton style={styles.logout} />
        <TouchableOpacity
          onPress={() => {
            setShowNewItemOverlay(true);
          }}
        >
          <Ionicons
            name="settings-outline"
            style={styles.editButton}
          ></Ionicons>
        </TouchableOpacity>
      </View>

      {/* This is where the overlay starts */}
      <Overlay
        isVisible={showNewItemOverlay}
        onBackdropPress={() => setShowNewItemOverlay(false)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowNewItemOverlay(false);
            }}
          >
            <Ionicons
              name="caret-back-outline"
              style={styles.backButton}
            ></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.editContianer}>
          <Input
            placeholder="UserName"
            onChangeText={setName}
            autoCapitalize="none"
          ></Input>

          <Button
            title="Submit"
            onPress={() => {
              updateUser(name);
              setShowNewItemOverlay(false);
            }}
          ></Button>
        </View>
      </Overlay>

      {/* This is where the overlay ends */}

      {/* Returns to regular view */}

      <View style={{ alignSelf: "center" }}>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {name}
          </Text>
        </View>

        <View style={styles.profileImage}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.logo}
          ></Image>
        </View>
        <View style={styles.add}>
          <Ionicons
            name="ios-add"
            size={25}
            color="#DFD8C8"
            style={{ marginTop: 2, marginLeft: 2 }}
          ></Ionicons>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 23 }]}>10</Text>
          <Text style={[styles.text, styles.subText]}>Posts</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 },
          ]}
        >
          <Text style={[styles.text, { fontSize: 23 }]}>10</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 23 }]}>10%</Text>
          <Text style={[styles.text, styles.subText]}>Progress</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", margin: 30 }}>
        <View
          style={{
            width: 330,
            height: 300,
            alignItems: "center",
            backgroundColor: "#83c5be",
          }}
        >
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3BD",
  },
  text: {
    fontFamily: "Fredoka One",
    color: "#52575D",
  },
  image: {
    flex: 1,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  editButton: {
    color: "#52575D",
    marginRight: 20,
    fontFamily: "Fredoka One",
    fontSize: 40,
  },
  editContianer: {
    width: Dimensions.get("window").width - 80,
    height: Dimensions.get("window").height - 200,
    justifyContent: "center",
  },
  backButton: {
    color: "#52575D",
    fontSize: 40,
  },
});

export default ProfileScreen;
