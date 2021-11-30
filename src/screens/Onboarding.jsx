import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ExampleComponent from "../components/ExampleComponent";

const Onboarding = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("Signup");
	};
	return (
		<View style={styles.container}>
			<Text>Onboarding page</Text>
			<Pressable onPress={nextPress} style={styles.buttonStyles}>
				<Text>next screen</Text>
			</Pressable>
			<ExampleComponent />
		</View>
	);
};

export default Onboarding;

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
