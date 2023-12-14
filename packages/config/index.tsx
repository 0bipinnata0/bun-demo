import { themes } from "@kane/themes";

import { animations } from "./src/animations";
import { configWithoutAnimations } from "./src/config";

export * from "./src/media";
export * from "./src/createGenericFont";
export * from "./src/animations";

export const config = {
	...configWithoutAnimations,
	// fixes typescript exporting this using internal /types/ path
	themes: themes as typeof themes,
	animations,
};
