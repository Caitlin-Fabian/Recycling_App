import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider, UserProvider, useUser } from "@realm/react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import { appId, baseUrl } from "../realm";
import { LogoutButton } from "./LogoutButton";
import { WelcomeView } from "./screens/WelcomeView";
import { ItemListView } from "./ItemListView";
import RealmContext from "./RealmContext";
import { Icon, TabView } from "react-native-elements";
const { RealmProvider } = RealmContext;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const homeName = "Home";
const settingsName = "Settings";

const AppWrapper = () => {
  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={WelcomeView}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};
const App = () => {
  return (
    <>
      {/* After login, user will be automatically populated in realm configuration */}
      <RealmProvider
        sync={{
          flexible: true,
          initialSubscriptions: {
            update: (subs, realm) => {
              // subscribe to all of the logged in user's to-do items
              subs.add(realm.objects("Item"), { name: "ownItems" });
            },
          },
        }}
        fallback={() => (
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName={homeName}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;

                  if (rn === homeName) {
                    iconName = focused ? "home" : "home-outline";
                  } else if (rn === settingsName) {
                    iconName = focused ? "settings" : "settings-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                inactiveTintColor: "grey",
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { height: 50, padding: 10 },
              }}
            >
              <Tab.Screen
                name={homeName}
                component={HomeScreen}
                options={{
                  headerLeft: () => {
                    return <LogoutButton />;
                  },
                }}
              />
              <Tab.Screen
                name={settingsName}
                component={ItemListView}
                options={{
                  headerLeft: () => {
                    return <LogoutButton />;
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 10,
    textAlign: "center",
  },
  footer: {
    margin: 40,
  },
  activityContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default AppWrapper;
