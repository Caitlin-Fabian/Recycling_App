import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Alert, Button, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.Article}>
            <Text style={styles.Text}>This article from Stanford University answers multiple questions about recycling, why it's important, and it's impact.</Text>
              <Text style={styles.LinkRight}
                onPress={() => Linking.openURL("https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <Text style={styles.Text}>Learn about easy ways to recycle everyday items around you with this article.</Text>
              <Text style={styles.LinkRight}
                onPress={() => Linking.openURL("https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <Text style={styles.Text}>Explore the meanings of the different numbers on recyclable plastic items!</Text>
              <Text style={styles.LinkRight}
                onPress={() => Linking.openURL("https://www.ebpsupply.com/blog/plastic-recycling-codes-types-explanation")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <Text style={styles.Text}>This article explains the positive impacts that recycling has on the environment.</Text>
              <Text style={styles.LinkRight}
                onPress={() => Linking.openURL("https://biofriendlyplanet.com/nature/environment/the-positive-effect-of-recycling-on-the-environment/")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <Text style={styles.Text}>Read about unique ideas for recycling various objects!</Text>
              <Text style={styles.LinkRight}
                onPress={() => Linking.openURL("https://sassytownhouseliving.com/16-creative-ideas-recycling-common-household-items/")}>Read the article here!</Text>
          </View>
        </ScrollView>
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
  Article: {
      margin: 15,
  },
  Text: {
      fontFamily: "Fredoka One",
      fontSize: 20,
      paddingBottom: 8,
  },
  Link: {
      marginLeft: 5,
  },
  LinkLeft: {
      fontSize: 15,
      paddingBottom: 3,
      textDecorationLine: "underline",
  },
  LinkRight: {
  }
});

export default HomeScreen;
