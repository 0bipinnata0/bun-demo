import { animations } from "./src/animations.reanimated";
import { configWithoutAnimations } from "./src/config";
export * from "./src/media";
export * from "./src/createGenericFont";
export * from "./src/animations.reanimated";

export const config = {
	...configWithoutAnimations,
	animations,
};
