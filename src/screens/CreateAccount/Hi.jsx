import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	useWindowDimensions,
} from "react-native";

import BlueButton from "../../components/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const Hi = ({ navigation }) => {

    // blue button submit handler
	const onBlueButtonPress = () => navigation.push("Onboarding");
	const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={ styles.container }>
        
        </SafeAreaView>
    );
};

export default Hi;

const styles = StyleSheet.create({
    container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});