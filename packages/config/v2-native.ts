import { CreateTamaguiProps } from "@kane/web";

import { animations } from "./src/animations";
import { config as configBase } from "./src/v2-base";

export const config = {
	...configBase,
	animations,
} satisfies CreateTamaguiProps;
