import React from "react";
import { useCallback, useState } from "react";
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
import { useUser } from "@realm/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

import { CreateToDoPrompt } from "../components/CreateToDoPrompt";
import RealmContext from "../RealmContext";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.WholeThing}>
            <Image
              source={require("../assets/pictures/question.jpeg")}
              style={styles.Picture}
            />
            <View style={styles.Article}>
              <Text
                style={styles.Link}
                onPress={() =>
                  Linking.openURL(
                    "https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling"
                  )
                }
              >
                Recycling Explained
              </Text>
              <Text style={styles.Text}>
                This article from Stanford University answers multiple questions
                about recycling, why it's important, and it's impact.
              </Text>
            </View>
          </View>

          <View style={styles.WholeThing}>
            <Image
              source={require("../assets/pictures/bin.webp")}
              style={styles.Picture}
            />
            <View style={styles.Article}>
              <Text
                style={styles.Link}
                onPress={() =>
                  Linking.openURL(
                    "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables"
                  )
                }
              >
                Day-to-Day Recycling
              </Text>
              <Text style={styles.Text}>
                Learn about easy ways to recycle everyday items around you with
                this article.
              </Text>
            </View>
          </View>

          <View style={styles.WholeThing}>
            <Image
              source={require("../assets/pictures/plastic.webp")}
              style={styles.Picture}
            />
            <View style={styles.Article}>
              <Text
                style={styles.Link}
                onPress={() =>
                  Linking.openURL(
                    "https://www.ebpsupply.com/blog/plastic-recycling-codes-types-explanation"
                  )
                }
              >
                The Mystery of the Numbers
              </Text>
              <Text style={styles.Text}>
                Explore the meanings of the different numbers on recyclable
                plastic items!
              </Text>
            </View>
          </View>

          <View style={styles.WholeThing}>
            <Image
              source={require("../assets/pictures/environment.jpeg")}
              style={styles.Picture}
            />
            <View style={styles.Article}>
              <Text
                style={styles.Link}
                onPress={() =>
                  Linking.openURL(
                    "https://biofriendlyplanet.com/nature/environment/the-positive-effect-of-recycling-on-the-environment/"
                  )
                }
              >
                For the Wellness of the World
              </Text>
              <Text style={styles.Text}>
                This article explains the positive impacts that recycling has on
                the environment.
              </Text>
            </View>
          </View>

          <View style={styles.WholeThing}>
            <Image
              source={require("../assets/pictures/idea.webp")}
              style={styles.Picture}
            />
            <View style={styles.Article}>
              <Text
                style={styles.Link}
                onPress={() =>
                  Linking.openURL(
                    "https://sassytownhouseliving.com/16-creative-ideas-recycling-common-household-items/"
                  )
                }
              >
                Absolutely Inspired
              </Text>
              <Text style={styles.Text}>
                Read about unique ideas for recycling various objects!
              </Text>
            </View>
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
  WholeThing: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 25,
    paddingTop: 8,
  },
  Picture: {
    height: 100,
    width: 100,
  },
  Article: {
    flexDirection: "column",
    paddingLeft: 15,
    flexShrink: 1,
  },
  Text: {
    flex: 1,
    paddingTop: 10,
  },
  Link: {
    fontFamily: "Fredoka One",
    fontSize: 15,
  },
});

export default HomeScreen;
