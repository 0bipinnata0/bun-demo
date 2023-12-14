import { CreateTamaguiProps } from "@kane/web";

import { animations } from "./animations.reanimated";
import { config as configBase } from "./v2-base";

export const config = {
	...configBase,
	animations,
} satisfies CreateTamaguiProps;
