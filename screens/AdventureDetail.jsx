import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const AdventureDetail = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Onboarding");
	};
	const prevPress = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<Text>Adventure Detail page</Text>
			<Pressable onPress={nextPress} style={styles.buttonStyles}>
				<Text>back to onboarding</Text>
			</Pressable>
			<Pressable onPress={prevPress} style={styles.buttonStyles}>
				<Text>previous screen</Text>
			</Pressable>
		</View>
	);
};

export default AdventureDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonStyles: {
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		padding: 10,
	},
});
