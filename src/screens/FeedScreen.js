import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Post from "../components/post";

export default class FeedScreen extends Component {
	render() {
		const data = [
			{ username: "F", imagesrc: "feiuwfiw" },
			{ username: "D", imagesrc: "iefojwio" },
		];

		return (
			<View>
				<Text>FeedScreen</Text>
				<View>
					{data.map((data) => {
						return (
							<Post imagesrc={data.imagesrc} username={data.username}></Post>
						);
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
