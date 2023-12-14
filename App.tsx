import Text, { TamaguiProvider, createTamagui } from "@kane/web";
import React from "react";

const config = createTamagui();

export default function App() {
	return (
		<TamaguiProvider config={undefined}>
			<Text>abc</Text>
		</TamaguiProvider>
	);
}
