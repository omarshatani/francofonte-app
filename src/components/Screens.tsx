import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import SearchBox from "./GlobalSearchBar";
import ServicesList from "./ServicesList";
import Carousel from "./NewsCarousel";

interface ServiceItem {
	id: string;
	title: string;
	iconName: string;
	iconPackage: string;
	iconSize: number;
	colors: Array<string>;
}

interface CarouselItem {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
}

export const HomeScreen = ({ navigation }: any) => {
	const data: Array<ServiceItem> = [
		{
			id: Math.random().toString(36),
			title: "Segnalazioni",
			iconName: "alert-circle-outline",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#F8B683", "#FB9B50"],
		},
		{
			id: Math.random().toString(36),
			title: "Tributi",
			iconName: "money-bill-wave-alt",
			iconPackage: "font-awesome5",
			iconSize: 24,
			colors: ["#7AE9FF", "#0FD2F9"],
		},
		{
			id: Math.random().toString(36),
			title: "Sociale",
			iconName: "account-group",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#65e960", "#2ae814"],
		},
		{
			id: Math.random().toString(36),
			title: "Ufficio tecnico",
			iconName: "wrench",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#dc60e9", "#ba14e8"],
		},
		{
			id: Math.random().toString(36),
			title: "Comune",
			iconName: "office-building",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#F88383", "#FB5050"],
		},
		{
			id: Math.random().toString(36),
			title: "Polizia Municipale",
			iconName: "building",
			iconPackage: "font-awesome5",
			iconSize: 30,
			colors: ["#F88383", "#FB5050"],
		},
		{
			id: Math.random().toString(36),
			title: "Ragioneria",
			iconName: "building",
			iconPackage: "font-awesome5",
			iconSize: 30,
			colors: ["#F88383", "#FB5050"],
		},
		{
			id: Math.random().toString(36),
			title: "Informazioni",
			iconName: "information-outline",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#F88383", "#FB5050"],
		},
		{
			id: Math.random().toString(36),
			title: "Protezione civile",
			iconName: "shield",
			iconPackage: "material-community",
			iconSize: 30,
			colors: ["#F88383", "#FB5050"],
		},
	];
	const carouselData: Array<CarouselItem> = [
		{
			id: Math.random().toString(36),
			title: "Titolo Carousel 1",
			description: "Lorem Ipsum Sit Amet Dolor",
			imageUrl: "../../assets/Images/francofont.jpg",
		},
		{
			id: Math.random().toString(36),
			title: "Titolo Carousel 1",
			description: "Lorem Ipsum Sit Amet Dolor",
			imageUrl: "../../assets/Images/francofont.jpg",
		},
		{
			id: Math.random().toString(36),
			title: "Titolo Carousel 1",
			description: "Lorem Ipsum Sit Amet Dolor",
			imageUrl: "../../assets/Images/francofont.jpg",
		},
		{
			id: Math.random().toString(36),
			title: "Titolo Carousel 1",
			description: "Lorem Ipsum Sit Amet Dolor",
			imageUrl: "../../assets/Images/francofont.jpg",
		},
		{
			id: Math.random().toString(36),
			title: "Titolo Carousel 1",
			description: "Lorem Ipsum Sit Amet Dolor",
			imageUrl: "../../assets/Images/francofont.jpg",
		},
	];

	return (
		<LinearGradient
			colors={["#ed7d31", "#fec000"]}
			start={[1, 0.2]}
			style={{ position: "relative" }}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.cityName}>
						<Text
							style={{
								fontSize: 20,
								color: "#fff",
								fontFamily: "Montserrat-SemiBold",
							}}
						>
							Comune di
						</Text>
						<Text
							style={{
								fontSize: 30,
								color: "#fff",
								fontFamily: "Montserrat-SemiBold",
							}}
						>
							Francofonte
						</Text>
					</View>
				</View>
				<View style={styles.main}>
					<View style={styles.searchContainer}>
						<View style={styles.searchBoxContainer}>
							<SearchBox />
						</View>
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={{ marginBottom: 10 }}>
							<Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 15 }}>
								Servizi
							</Text>
							<ServicesList data={data} />
						</View>
						<View>
							<Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 15 }}>
								Popolari
							</Text>
							<Carousel data={carouselData} />
						</View>
					</ScrollView>
				</View>
			</View>
		</LinearGradient>
	);
};

export const NewsScreen = ({ navigation }: any) => {
	return (
		<SafeAreaView>
			<View>
				<Text>News</Text>
			</View>
		</SafeAreaView>
	);
};

export const ModalNewsDetailsScreen = ({ navigation }: any) => {
	return (
		<SafeAreaView>
			<View>
				<Text>News detail screen</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		height: "100%",
	},
	header: {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		height: "30%",
		paddingHorizontal: 30,
		paddingVertical: 5,
	},
	cityName: {
		//marginBottom: 20,
	},
	main: {
		height: "70%",
		paddingHorizontal: 20,
		paddingTop: 50,
		backgroundColor: "#fff",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	searchContainer: {
		display: "flex",
		alignItems: "center",
		// position: "absolute",
		// top: "25%",
		// zIndex: 999,
		width: "100%",
		marginTop: -70,
		marginBottom: 20,
	},
	searchBoxContainer: {
		width: "80%",
	},
});
