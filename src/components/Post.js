import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default class Post extends Component {
	render(props) {
		return (
			<View style={styles.Post}>
				<View style={styles.Group534}>
					<View style={styles.User}>
						<Image
							style={styles.profile}
							source={{
								uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1pe92a9a0gm-542%3A9?alt=media&token=baab46c0-ed66-4109-901a-650bb4360ece",
							}}
						/>
						<Text style={styles.Txt242}>props.username</Text>
					</View>
					<Image
						style={styles.Image}
						source={{
							uri: props.imagesrc,
						}}
					/>
					<View style={styles.BommomPart}>
						<View style={styles.Comment}>
							<Text style={styles.Txt399}>Comment...</Text>
						</View>
						<Image
							style={styles.IconHeartOutline}
							source={{
								uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1pe92a9a0gm-447%3A11?alt=media&token=a3ff24cc-c2ef-4f18-b1c6-0699b5a81296",
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Post: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingBottom: 8,
		paddingLeft: 4,
		paddingRight: 4,
		borderRadius: 20,
		backgroundColor: "rgba(0,168,150,1)",
		width: 370,
		height: 237,
	},
	Group534: {
		display: "flex",
		flexDirection: "column",
	},
	User: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 31,
		marginBottom: 3,
	},
	profile: {
		width: 30,
		height: 30,
		marginRight: 8,
	},
	Txt242: {
		fontSize: 19,
		fontFamily: "Inter, sans-serif",
		fontWeight: "700",
		color: "rgba(0,0,0,1)",
		width: 273,
		height: 22,
	},

	Image: {
		width: 360,
		height: 166,
		marginBottom: 3,
	},
	BommomPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
	},
	Comment: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 7,
		paddingRight: 101,
		marginRight: 11,
		borderRadius: 11,
		backgroundColor: "rgba(131,197,190,1)",
	},
	Txt399: {
		fontSize: 12,
		fontFamily: "Inter, sans-serif",
		fontWeight: "400",
		color: "rgba(0,0,0,1)",
		width: 195,
		height: 22,
	},

	IconHeartOutline: {
		width: 23.06,
		height: 21,
	},
});
