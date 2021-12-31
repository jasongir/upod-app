import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../assets/create-account-screens/man-expeditions-logo.png";

const CreateAccount = ({ children }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={logo} style={[styles.itemAlignment, styles.image]} />

			<Text style={[styles.text, styles.createAccount]}>Create Account</Text>
			{children}
		</SafeAreaView>
	);
};

export default CreateAccount;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	image: {
		paddingTop: 50,
	},
	text: {
		color: "#EFEFEF",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "500"
	},
	createAccount: {
		paddingTop: 10,
	},
	itemAlignment: {
		alignSelf: "center",
	},
	textAlignment: {
		textAlign: "center",
	},
});
