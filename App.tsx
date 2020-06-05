import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import Main from "./src";
import "react-native-gesture-handler";

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);

	Font.loadAsync({
		Montserrat: require("./assets/Fonts/Montserrat/Montserrat-Regular.ttf"),
		"Montserrat-SemiBold": {
			uri: require("./assets/Fonts/Montserrat/Montserrat-SemiBold.ttf"),
		},
	}).then(() => setFontsLoaded(true));

	return (
		<SafeAreaProvider>
			<PaperProvider>
				<NavigationContainer>
					{fontsLoaded ? (
						<Main />
					) : (
						<View>
							<Text>Font non caricato</Text>
						</View>
					)}
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
