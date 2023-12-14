// web-only use platform:

import type { MatchMedia } from "@kane/web";

export const matchMedia: MatchMedia = globalThis["matchMedia"];
