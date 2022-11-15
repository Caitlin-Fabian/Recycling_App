import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function NewImage(image) {
  return (
    <View>
      <Image
        source={image.image}
        style={{ width: 70, height: 70, margin: 10 }}
      ></Image>
    </View>
  );
}
