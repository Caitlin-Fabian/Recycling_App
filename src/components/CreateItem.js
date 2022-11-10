import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import SelectList from "react-native-dropdown-select-list";

export function CreateItem(props) {
  const { onSubmit } = props;
  const [type, setType] = useState(" ");

  // Drop down selection of types
  const selection = [
    { key: "plastic", value: "plastic" },
    { key: "paper", value: "paper" },
    { key: "metal", value: "metal" },
  ];

  // List that is being passed into the drop down menu for quantity
  const quantityList = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
    { key: 6, value: 6 },
    { key: 7, value: 7 },
    { key: 8, value: 8 },
    { key: 9, value: 9 },
    { key: 10, value: 10 },
  ];

  return (
    <View style={styles.modalWrapper}>
      <Text h4 style={styles.addItemTitle}>
        Add Recycled Item
      </Text>
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={() => onSubmit({ type })}
      />
      <View style={styles.container}>
        <SelectList
          label="Select Type"
          data={selection}
          setSelected={setType}
        />
        <SelectList
          data={quantityList}
          setSelected={props.fetchQuantity}
          defaultOption={{ key: 1, value: 1 }}
        />
      </View>
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
  saveButton: {
    width: 280,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
