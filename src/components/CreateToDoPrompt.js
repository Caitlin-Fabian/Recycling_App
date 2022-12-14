import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import SelectList from "react-native-dropdown-select-list";

export function CreateToDoPrompt(props) {
  const { onSubmit } = props;
  const [summary, setSummary] = useState(null);

  const selection = [
    { key: "plastic", value: "plastic" },
    { key: "paper", value: "paper" },
    { key: "metal", value: "metal" },
  ];
  return (
    <View style={styles.modalWrapper}>
      <Text h4 style={styles.addItemTitle}>
        Add To-Do Item
      </Text>
      <Input placeholder="What do you want to do?" onChangeText={setSummary} />
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={() => onSubmit({ summary })}
      />
      <SelectList
        data={selection}
        setSelected={setSummary}
        boxStyles={{ marginHorizontal: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    width: 300,
    minHeight: 400,
    borderRadius: 4,
    alignItems: "center",
  },
  addItemTitle: {
    margin: 20,
  },
  saveButton: {
    width: 280,
  },
});
