import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BlueButton = ({ textContent, navigation, onPress, ...props }) => {
	return (
		<Pressable onPress={onPress} {...props} style={styles.button}>
			<Text style={styles.text}>{textContent}</Text>
		</Pressable>
	);
};

export default BlueButton;

const styles = StyleSheet.create({
	button: {
		width: 275,
		height: 49,
		backgroundColor: "#56C1FF",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
	},
	text: {
		textAlign: "center",
		color: "#EFEFEF",
		fontSize: 16,
		fontWeight: "700"
	},
});
