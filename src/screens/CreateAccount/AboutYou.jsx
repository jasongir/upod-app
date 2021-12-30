import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	useWindowDimensions,
    TextInput,
	View
} from "react-native";

import BlueButton from "../../components/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const AboutYou = ({ navigation }) => {

	// blue button submit handler
	const onBlueButtonPress = () => navigation.push("Onboarding");
	const { width } = useWindowDimensions();

	const identities = ["Male", "Female", "Nonbinary", "Prefer not to say"];
	const [genders, setGenders] = useState(
		identities.map((gender)=>({
			label: gender,
			value: (gender = "Prefer not to say") ? "" : gender,
		}))
	);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	return (
		<SafeAreaView style={ styles.container }>
            <Text style={ styles.heading }>
                About You
            </Text>
            <Text style={ styles.subHeading1 }>
                What's your name?
            </Text>
			<View style={ styles.inputContainer }>
				<Text style={styles.labelText}>
					First Name
				</Text>
				<TextInput 
					style={ styles.input }
				/>
				<Text style={styles.labelText}>
					Last Name
				</Text>
				<TextInput 
					style={ styles.input}
				/>
				<Text style={ styles.subHeading1 }>
					Confirm your gender identity
				</Text>
				<DropDownPicker style={styles.dropdown}
					open={open}
					value={value}
					items={genders}
					placeholder="Select your gender"
					translation={{PLACEHOLDER:"Select your gender",}}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setGenders}
					textStyle={styles.dropdownText}
					dropDownContainerStyle={styles.dropdown}
				/>
				<BlueButton 
					textContent={"CREATE ACCOUNT"}
					onPress={onBlueButtonPress}
				/>
			</View>
		</SafeAreaView>
	);
};

export default AboutYou;

const styles = StyleSheet.create({
    container: {
		backgroundColor: "#1E1E1E",
		flex: 1,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	inputContainer: {
		width: 275,
	},
	text: {
		color: "#EFEFEF",
		fontSize: 16,
		paddingTop: 35,
	},
	labelText: {
        color: "#EFEFEF",
		fontSize: 16,
		marginTop: 20,
        fontWeight: "700"
    },
	dropdownText: {
		color: "#EFEFEF",
		fontSize: 16,
		textAlign: "center"
	},
    smallText: {
        fontSize: 12,
        color: "#EFEFEF"
    },
    heading: {
        fontSize: 25,
        color: "#EFEFEF",
        fontWeight: "700",
        marginTop: 50,
		marginBottom: 9
    },
	subHeading1: {
        fontSize: 20,
		fontWeight: "500",
        color: "#EFEFEF",
		marginTop: 30,
		textAlign: "center"
    },
	input: {
        borderRadius: 10,
        height: 45,
        width: "100%",
        backgroundColor: "#363444",
        color: "#EFEFEF",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
		paddingLeft: 15,
    },
	dropdown: {
		marginTop: 20,
		width: 275,
		backgroundColor: "#363444",
		borderColor: "#363444",
        alignSelf: "center",
		marginBottom: 33,
	}
});