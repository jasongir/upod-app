import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import NavBar from "../components/NavBar";

const Home = ({ navigation }) => {
	const nextPress = () => {
		navigation.navigate("AdventureDetail");
	};
	const prevPress = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<Text>Home page</Text>
			<Pressable onPress={nextPress} style={styles.buttonStyles}>
				<Text>next screen</Text>
			</Pressable>
			<Pressable onPress={prevPress} style={styles.buttonStyles}>
				<Text>prev screen</Text>
			</Pressable>
			<NavBar />
		</View>
	);
};

export default Home;

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
