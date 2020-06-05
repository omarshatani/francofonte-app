import * as React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableNativeFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface ServiceItem {
	id: string;
	title: string;
	iconName: string;
	colors: Array<string>;
}

export default function HorizontalServicesList(
	props: any | Array<ServiceItem>
) {
	const { data } = props;
	return (
		<FlatList
			data={data}
			horizontal
			renderItem={({ item }) => <Card item={item} />}
			keyExtractor={item => item.id}
			showsHorizontalScrollIndicator={false}
		/>
	);
}

const Card = (item: ServiceItem | any) => {
	console.log("item", item);
	return (
		<TouchableNativeFeedback
			background={TouchableNativeFeedback.Ripple("", true)}
		>
			<LinearGradient
				style={styles.card}
				colors={item.item.colors}
				start={[0.8, 0.7]}
			>
				<View
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(255, 255, 255, 0.3)",
						borderRadius: 50,
						width: 50,
						height: 50,
					}}
				>
					<Entypo name={item.item.iconName} size={30} color="white" />
				</View>
				<Text
					style={{
						color: "white",
						fontFamily: "Montserrat-SemiBold",
						fontSize: 15,
					}}
				>
					{item.item.title}
				</Text>
			</LinearGradient>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	card: {
		display: "flex",
		justifyContent: "space-between",
		width: 130,
		height: 120,
		// marginHorizontal: 8,
		marginRight: 15,
		marginVertical: 10,
		borderRadius: 15,
		paddingVertical: 15,
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
});
