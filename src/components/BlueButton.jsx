import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BlueButton = ({ textContent, navigation, onPress, ...props }) => {
	return (
		<Pressable onPress={onPress} {...props}>
			<Text style={styles.text}>{textContent}</Text>
		</Pressable>
	);
};

export default BlueButton;

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "#56C1FF",
		padding: 20,
		borderRadius: 999,
	},
	text: {
		backgroundColor: "#56C1FF",
		padding: 20,
		borderRadius: 999,
		color: "#EFEFEF",
		fontSize: 20,
		paddingVertical: 15,
		paddingHorizontal: 100,
	},
});
