import { config } from "@kane/config/v2";
import React from "react";
import { SafeAreaView } from "react-native";
import { TamaguiProvider, YStack, createTamagui } from "tamagui";
import { StacksDemo } from "./src/StacksDemo";
import { HeadingsDemo } from "./src/HeadingsDemo";
import { TextDemo } from "./src/TextDemo";
const tamaguiConfig = createTamagui(config);

export default function App() {
	return (
		<TamaguiProvider config={tamaguiConfig}>
			<SafeAreaView>
				<YStack justifyContent="center" gap={50}>
					<StacksDemo />
					<HeadingsDemo />
					<TextDemo />
				</YStack>
			</SafeAreaView>
		</TamaguiProvider>
	);
}
