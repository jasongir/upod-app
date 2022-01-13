	import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	useWindowDimensions,
	Pressable
} from "react-native";
import BlueButton from "../../components/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const Hi = ({ route, navigation }) => {

	const userName = route.params.paramKey;
    // blue button submit handler
	const onBlueButtonPress = () => navigation.push("TellUsAboutYourself");
	const onBackButtonPress = () => navigation.goBack();
	const { width } = useWindowDimensions();


    return (
        <SafeAreaView style={ styles.container }>
		<Pressable onPress={onBackButtonPress} style={styles.topContainer}>
			<Text style={styles.paragraph}>Back</Text>
		</Pressable>
		<View style={styles.content}>
			<Text style={ styles.heading4 }>Hi { userName }!</Text>
			<Text style={ styles.paragraph}>
				Just a few more questions so we can suggest experiences
				you will love and match you with like-minded guys who
				have similar travel interests as you
			</Text>
			<View style={styles.buttonView}>
				<BlueButton
					textContent={"CONTINUE"}
					onPress={onBlueButtonPress}
				/>
			</View>
		</View>
        </SafeAreaView>
    );
};

export default Hi;

const styles = StyleSheet.create({
	topContainer: {
		alignSelf: "flex-start",
		margin: 10,
	},
    container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	buttonView: {
		top: "25%",
		position: "relative",
		alignContent: "center",
		alignItems: "center",
	},
	content: {
		alignContent: "center",
		justifyContent: "center",
		width: "80%",
		height: "80%",
	},
	heading4: {
		marginVertical:10,
		color: "#EFEFEF",
		fontSize: 25,
		fontWeight: "700",
		textAlign: "center",
	},
	paragraph: {
		marginVertical:10,
		color:"#EFEFEF",
		fontSize: 16,
		fontWeight: "500",
		textAlign: "center"
	},
});