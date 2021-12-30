import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AdventureDetail from "./screens/AdventureDetail";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Onboarding from "./screens/Onboarding";
import PreferredLanguage from "./screens/CreateAccount/PreferredLanguage";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import AboutYou from "./screens/CreateAccount/AboutYou";
import Hi from "./screens/CreateAccount/Hi";

const Stack = createNativeStackNavigator();

function App() {
	const globalOptions = {
		headerShown: false,
	};
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="PreferredLanguage"
				screenOptions={globalOptions}
			>
				<Stack.Screen name="PreferredLanguage" component={PreferredLanguage} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen name="AboutYou" component={AboutYou} />
				{/* <Stack.Screen name="Hi" component={Hi} /> */}
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
