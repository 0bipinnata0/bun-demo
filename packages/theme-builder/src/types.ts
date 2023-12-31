// only used by the studio theme builder generated:

import { MaskOptions, Template } from "@kane/create-theme";

export type BuildThemeSuiteProps = {
	baseTheme: BuildTheme;
	subThemes?: (BuildTheme | BuildThemeMask)[];
	componentMask?: MaskOptions;
	templates?: {
		base: Template;
		accentLight: Template;
		accentDark: Template;
	};
};

export type BuildThemeSuitePalettes = {
	light: string[];
	dark: string[];
	lightAccent?: string[];
	darkAccent?: string[];
};

export type ScaleTypeName =
	| "custom"
	| "radix"
	| "radix-b"
	| "radius-bold"
	| "radius-bright"
	| "linear"
	| "pastel"
	| "pastel-desaturating"
	| "neon"
	| "neon-bright"
	| "neon-c";

export type BuildThemeBase = {
	id: string;
	name: string;
	errors?: string[];
};

export type BuildThemeAnchor = {
	index: number;
	hue: {
		light: number;
		dark: number;
	};
	sat: {
		light: number;
		dark: number;
	};
	lum: {
		light: number;
		dark: number;
	};
};

export type BuildTheme = BuildThemeBase & {
	type: "theme";

	scale: ScaleTypeName;

	anchors: BuildThemeAnchor[];

	template?: Template;

	accent?: BuildTheme;
};

// TODO type here isnt the same as type in BuildTheme
export type BuildMask = { id: string } & (
	| {
			type: "strengthen";
			strength: number;
	  }
	| {
			type: "soften";
			strength: number;
	  }
	| {
			type: "inverse";
	  }
	| {
			type: "strengthenBorder";
			strength: number;
	  }
	| {
			type: "softenBorder";
			strength: number;
	  }
);

export type BuildThemeMask = BuildThemeBase & {
	type: "mask";
	masks: BuildMask[];
};
