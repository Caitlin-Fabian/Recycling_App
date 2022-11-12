import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Alert, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Article from "../components/Articles";

const HomeScreen = () => {
  const data = [
    {
      // need to find 5 articles and photos that correspond to them
      description: "This article from Stanford University answers multiple questions about recycling, why it's important, and it's impact.",
      link: "https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling",
    },
    {
      description: "Learn about easy ways to recycle everyday items around you with this article.",
      link: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables",
    },
    {
      description: "Explore the meanings of the different numbers on recyclable plastic items!",
      link: "https://www.ebpsupply.com/blog/plastic-recycling-codes-types-explanation",
    },
    {
      description: "This article explains the positive impacts that recycling has on the environment.",
      link: "https://biofriendlyplanet.com/nature/environment/the-positive-effect-of-recycling-on-the-environment/",
    },
    {
      description: "Read about unique ideas for recycling various objects!",
      link: "https://sassytownhouseliving.com/16-creative-ideas-recycling-common-household-items/",
    }
  ];

  const image1 = "../pictures/pexels-photo-356079.jpeg";

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView>
            {data.map((data) => {
              return <Article description = {data.description} link = {data.link}></Article>;
            })}
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
});

export default HomeScreen;
