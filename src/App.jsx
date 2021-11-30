import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AdventureDetail from "./screens/AdventureDetail";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Onboarding from "./screens/Onboarding";

const Stack = createNativeStackNavigator();

function App() {
	const globalOptions = {
		headerShown: false,
	};
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Onboarding"
				screenOptions={globalOptions}
			>
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AdventureDetail" component={AdventureDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
