import * as React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, NewsScreen } from "./components/Screens";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
	return (
		<Tab.Navigator
			barStyle={{ backgroundColor: "#fff", borderWidth: 0 }}
			labeled={false}
			activeColor="#F8B683"
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="News"
				component={NewsScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<Entypo name="news" color={color} size={26} />
					),
				}}
			/>

		</Tab.Navigator>
	);
}
