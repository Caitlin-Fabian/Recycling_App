import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Post from "../components/Post";

export default class FeedScreen extends Component {
	render() {
		const data = [
			{
				username: "F",
				imagesrc:
					"https://tg-cdn.azureedge.net/sites/default/files/images/paragraph/italrb/easy_guide_grass.jpg",
			},
			{
				username: "D",
				imagesrc:
					"https://upload.wikimedia.org/wikipedia/commons/3/32/Empty_beer_bottles_on_grass.jpg",
			},
		];

		return (
			<View>
				<Text>FeedScreen</Text>
				<View>
					{data.map((data) => {
						return <Post props={data}></Post>;
					})}
				</View>
			</View>
		);
	}
}

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
