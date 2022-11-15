import * as React from "react";
import { TouchableOpacity, StyleSheet, Alert, Text } from "react-native";
import { useUser } from "@realm/react";

export function LogoutButton() {
  const user = useUser();
  // The signOut function calls the logOut function on the currently
  // logged in user and then navigates to the welcome screen
  const signOut = () => {
    if (user) {
      user.logOut();
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("Log Out", null, [
          {
            text: "Yes, Log Out",
            style: "destructive",
            onPress: () => signOut(),
          },
          { text: "Cancel", style: "cancel" },
        ]);
      }}
    >
      <Text style={styles.button}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#52575D",
    marginLeft: 20,
    fontFamily: "Fredoka One",
    fontSize: 20,
  },
});
