import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import CreateAccount from "../../components/CreateAccount";
import BlueButton from "../../components/BlueButton";

const PreferredLanguage = () => {
	return (
		<CreateAccount>
			<Text style={styles.text}>What is your preferred language?</Text>
			<BlueButton textContent="CONTINUE" />
		</CreateAccount>
	);
};

export default PreferredLanguage;

const styles = StyleSheet.create({
	text: {
		color: "#EFEFEF",
		fontSize: 20,
		paddingTop: 35,
	},
});
