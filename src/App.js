import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider, UserProvider, useUser } from "@realm/react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import { appId, baseUrl } from "../realm";
import { LogoutButton } from "./components/LogoutButton";
import { LoginScreen } from "./screens/LoginScreen";
import { ItemListView } from "./ItemListView";
import ProfileScreen from "./screens/ProfileScreen";
import ProgressScreen from "./screens/ProgressScreen";
import RealmContext from "./RealmContext";
import { Icon, TabView } from "react-native-elements";
import CameraScreen from "./screens/CameraScreen";
import FeedScreen from "./screens/FeedScreen";
const { RealmProvider } = RealmContext;

const Tab = createBottomTabNavigator();

// Name the screen name here
const homeName = "Home";
const progressName = "Progress";
const cameraName = "Camera";
const feedName = "Feed";
const profileName = "Profile";

const AppWrapper = () => {
  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={LoginScreen}>
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
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;

                  // Add the route name here with else if
                  if (rn === homeName) {
                    iconName = focused ? "home" : "home-outline";
                  } else if (rn === profileName) {
                    iconName = focused ? "person" : "person-circle-outline";
                  } else if (rn === progressName) {
                    iconName = focused ? "earth" : "earth-outline";
                  } else if (rn === cameraName) {
                    iconName = focused ? "camera" : "camera-outline";
                  } else if (rn === feedName) {
                    iconName = focused ? "add" : "add-circle-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarOptions: {
                  inactiveTintColor: "grey",
                  labelStyle: { paddingBottom: 10, fontSize: 10 },
                  style: { height: 50, padding: 10 },
                },
              })}
            >
              {/* Add a screen here */}
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
                name={cameraName}
                component={CameraScreen}
                options={{
                  headerLeft: () => {
                    return <LogoutButton />;
                  },
                }}
              />
              <Tab.Screen
                name={feedName}
                component={FeedScreen}
                options={{
                  headerLeft: () => {
                    return <LogoutButton />;
                  },
                }}
              />
              <Tab.Screen
                name={progressName}
                component={ProgressScreen}
                options={{
                  headerLeft: () => {
                    return <LogoutButton />;
                  },
                }}
              />
              <Tab.Screen name={profileName} component={ProfileScreen} />
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
