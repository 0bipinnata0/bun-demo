import { config } from "@kane/config/v2";
import React from "react";
import { SafeAreaView } from "react-native";
import { TamaguiProvider, Text, createTamagui } from "tamagui";
const tamaguiConfig = createTamagui(config);

export default function App() {
	return (
		<TamaguiProvider config={tamaguiConfig}>
			<SafeAreaView>
				<Text color="red">abc</Text>
			</SafeAreaView>
		</TamaguiProvider>
	);
}
