import React from "react";
import { Image } from "react-native";

interface Props {
	iconName: string;
	iconSize: number;
	color: string;
}

export default function CustomIcon(props: Props) {
	const { iconName, iconSize } = props;
	return (
		<Image
			source={require(`../../assets/Icons/${iconName}.png`)}
			fadeDuration={0}
			style={{ width: iconSize, height: iconSize }}
		/>
	);
}
