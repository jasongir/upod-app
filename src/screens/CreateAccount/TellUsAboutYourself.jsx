import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	useWindowDimensions,
	Pressable,
    TextInput
} from "react-native";
import BlueButton from "../../components/BlueButton";
import DropDownPicker from "react-native-dropdown-picker";

const TellUsAboutYourself = ({ navigation }) => {
    const nextFocus = React.useRef(null);
    const onBlueButtonPress = () => navigation.push("Onboarding");
    const onBackButtonPress = () => navigation.goBack();
    const { width } = useWindowDimensions();
    const [inputPH, setInputPH] = useState(
        'i.e. tell us what you do, where you are from, what you are looking for in this community (ex. Looking to connect with like-minded solo travelers),why you enjoy group travel etc,. This will help other travelers in the community get to you know you better.'
    );

    return (
        <SafeAreaView style= { styles.container }>
            <View style= { styles.container }>
                <Text style= { styles.heading4 }>
                    Tell us more about yourself
                </Text>
                <View style={ styles.inputContainer }>
                    <TextInput 
                        style = { styles.input }
                        placeholderTextColor = "#EFEFEF"
                        multiline= { true }
                        placeholder={inputPH}
                        onFocus={() => setInputPH('')}
                     />
                </View>
                <Pressable onPress={onBlueButtonPress}>
                    <Text style = {styles.paragraph}>I'll do this later</Text>
                </Pressable>
                <BlueButton
					textContent={"CONTINUE"}
					onPress={onBlueButtonPress}
				/>
            </View>
        </SafeAreaView>
    )
}

export default TellUsAboutYourself;

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
        paddingTop: 40,
        paddingHorizontal: 20,
        borderColor: "#EFEFEF",
        borderWidth: 1.5,
        borderRadius: 20,
        width: "80%",
        height: 286,
        textAlignVertical: 'top',
    },
     heading4: {
        color: "#EFEFEF",
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
    },
    content: {
        alignContent: "center",
        justifyContent: "center",
        width: "80%",
		height: "50%",
    },
    input: {
		marginVertical:10,
		color:"#EFEFEF",
		fontSize: 16,
		fontWeight: "500",
		textAlign: "center",
        textAlignVertical: "top",
	},
})