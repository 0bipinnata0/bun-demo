import { CreateTamaguiProps } from "@kane/web";

import { animations } from "./src/animations.css";
import { config as configBase } from "./src/v2-base";

export const config = {
	...configBase,
	animations,
} satisfies CreateTamaguiProps;
