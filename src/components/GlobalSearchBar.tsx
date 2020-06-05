import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar(props: any) {
	const [searchText, setSearchText] = React.useState("");
	const _handleChangeText = (text: string) => {
		setSearchText(text);
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput onChangeText={_handleChangeText} value={searchText} />
			</View>
			<View style={styles.iconContainer}>
				<MaterialIcons name="search" size={24} color="white" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 5,
	},
	inputContainer: {
		width: "85%",
	},
	iconContainer: {
		// width: "10%",
		marginLeft: 10,
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "#f99452",
		padding: 5,
	},
});
