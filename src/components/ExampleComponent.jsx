import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const ExampleComponent = () => {
	return (
		<View>
			<Pressable
				style={({ pressed }) => [
					styles.container,
					{ backgroundColor: pressed ? "lightblue" : "white" },
				]}
			>
				<Text>This is an example component</Text>
			</Pressable>
		</View>
	);
};

export default ExampleComponent;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderRadius: 999,

		borderWidth: 2,
		borderColor: "black",
		borderStyle: "solid",
	},
});
