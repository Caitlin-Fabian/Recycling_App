import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Alert, Button, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.Article}>
            <View style={styles.Hook}>
              <Image source={require("../assets/pictures/question.jpeg")} style={styles.Picture}/>
              <Text style={styles.Text}>This article from Stanford University answers multiple questions about recycling, why it's important, and it's impact.</Text>
            </View>
            <Text style={styles.Link}
              onPress={() => Linking.openURL("https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <View style={styles.Hook}>
              <Image source={require("../assets/pictures/bin.webp")} style={styles.Picture}/>
              <Text style={styles.Text}>Learn about easy ways to recycle everyday items around you with this article.</Text>
            </View>
            <Text style={styles.Link}
              onPress={() => Linking.openURL("https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <View style={styles.Hook}>
              <Image source={require("../assets/pictures/plastic.webp")} style={styles.Picture}/>
              <Text style={styles.Text}>Explore the meanings of the different numbers on recyclable plastic items!</Text>
            </View>
            <Text style={styles.Link}
              onPress={() => Linking.openURL("https://www.ebpsupply.com/blog/plastic-recycling-codes-types-explanation")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <View style={styles.Hook}>
              <Image source={require("../assets/pictures/environment.jpeg")} style={styles.Picture}/>
              <Text style={styles.Text}>This article explains the positive impacts that recycling has on the environment.</Text>
            </View>
            <Text style={styles.Link}
              onPress={() => Linking.openURL("https://biofriendlyplanet.com/nature/environment/the-positive-effect-of-recycling-on-the-environment/")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <View style={styles.Hook}>
              <Image source={require("../assets/pictures/idea.webp")} style={styles.Picture}/>
              <Text style={styles.Text}>Read about unique ideas for recycling various objects!</Text>
            </View>
            <Text style={styles.Link}
              onPress={() => Linking.openURL("https://sassytownhouseliving.com/16-creative-ideas-recycling-common-household-items/")}>Read the article here!</Text>
          </View>

          <View style={styles.Article}>
            <Image source={require("../assets/pictures/idea.webp")} style={styles.Picture}/>
            <Text style={styles.Text}>Read about unique ideas for recycling various objects!</Text>
              <Text style={styles.Link}
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
    alignItems: "center",
  },
  Article: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
  },
  Hook: {
    display: "flex",
    flexDirection: "row",
  },
  Picture: {
    height: 100,
    width: 100,
    paddingRight: 10,
  },
  Text: {
      flex: 1,
      fontFamily: "Fredoka One",
      fontSize: 15,
      paddingBottom: 8,
      paddingLeft: 20,
  },
  Link: {
      paddingBottom: 10,
  },
});

export default HomeScreen;
