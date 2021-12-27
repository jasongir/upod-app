import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	useWindowDimensions,
} from "react-native";

import CreateAccount from "../../components/CreateAccount";
import BlueButton from "../../components/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const PreferredLanguage = ({ navigation }) => {
	// state for the dropdown:
	const langs = ["English", "Spanish", "French", "Portuguese"];
	const [languages, setLanguages] = useState(
		langs.map((language) => ({
			label: language,
			value: language,
		}))
	);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	// blue button submit handler
	const onBlueButtonPress = () => navigation.push("Onboarding");

	const { width } = useWindowDimensions();
	return (
		<CreateAccount>
			<Text style={styles.text}>What is your preferred language?</Text>
			<View styles={[{ width: Math.ceil(width * 0.2) }]}>
				<DropDownPicker
					open={open}
					value={value}
					items={languages}
					placeholder="Select your language"
					translation={{
						PLACEHOLDER: "Select your language",
					}}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setLanguages}
				/>
			</View>
			<BlueButton textContent="CONTINUE" onPress={onBlueButtonPress} />
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
	// dropDownStyles: {
	// 	backgroundColor: "#EFEFEF",
	// },
	// dropDownLabelStyle: {
	// 	color: "#EFEFEF",
	// },
	pickerTextStyle: {
		color: "#363444",
	},
	itemAlignment: {
		alignSelf: "center",
	},
	textAlignment: {
		textAlign: "center",
	},
});
