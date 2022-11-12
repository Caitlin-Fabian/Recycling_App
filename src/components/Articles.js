import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export default function Article({ description, link}) {
    return (
            <View style={styles.Article}>
                <Text style={styles.Text}>{description}</Text>
                <View style={styles.Link}>
                    <Text style={styles.LinkLeft}>Read it here:</Text>
                    <Text style={styles.LinkRight}>{link}</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
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
}) 