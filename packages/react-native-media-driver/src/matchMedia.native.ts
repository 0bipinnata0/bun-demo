import { MatchMedia } from "@kane/web";

import { NativeMediaQueryList } from "./mediaQueryList";

export const matchMedia: MatchMedia = (query) => {
	return new NativeMediaQueryList(query);
};
