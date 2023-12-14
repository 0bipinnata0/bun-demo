import "./src/setup";
export * from "@kane/use-force-update";

export * from "./src/createTamagui";

export * from "./src/viewTypes";
export * from "./src/views/TamaguiProvider";

export * from "./src/views/Anchor";
export * from "./src/views/EnsureFlexed";
export * from "./src/views/Fieldset";
export * from "./src/views/Input";
export * from "./src/views/Layouts";
export * from "./src/views/Spinner";
export * from "./src/views/TextArea";
export * from "./src/views/Text";

export type {
	AnimationKeys,
	ColorTokens,
	CreateTamaguiConfig,
	CreateTamaguiProps,
	FontColorTokens,
	FontLanguages,
	FontLetterSpacingTokens,
	FontLineHeightTokens,
	FontSizeTokens,
	FontStyleTokens,
	FontTokens,
	FontTransformTokens,
	FontWeightTokens,
	GenericFont,
	GenericStackVariants,
	GenericTamaguiConfig,
	GenericTextVariants,
	GetAnimationKeys,
	GetProps,
	GetRef,
	GetVariantProps,
	GroupNames,
	Longhands,
	Media,
	MediaPropKeys,
	MediaQueries,
	MediaQueryState,
	Shorthands,
	SizeTokens,
	SpaceTokens,
	SpacerProps,
	SpecificTokens,
	StackNonStyleProps,
	StackProps,
	StackPropsBase,
	RadiusTokens,
	StaticConfig,
	Styleable,
	TamaguiBaseTheme,
	TamaguiComponent,
	TamaguiComponentPropsBase,
	TamaguiConfig,
	TamaguiCustomConfig,
	TamaguiElement,
	TamaguiInternalConfig,
	TamaguiProviderProps,
	TamaguiSettings,
	TamaguiTextElement,
	TextNonStyleProps,
	TextProps,
	TextPropsBase,
	ThemeKeys,
	ThemeName,
	ThemeParsed,
	ThemeProps,
	ThemeTokens,
	ThemeValueFallback,
	Themes,
	Token,
	Tokens,
	TransformStyleProps,
	TypeOverride,
	VariantSpreadExtras,
	VariantSpreadFunction,
	ZIndexTokens,
} from "@kane/core";

export {
	Configuration,
	ComponentContext,
	FontLanguage,
	// components
	Spacer,
	Stack,
	Theme,
	Unspaced,
	View,
	createComponent,
	createFont,
	createShorthands,
	createStyledContext,
	createTheme,
	createTokens,
	createVariable,
	getConfig,
	getMedia,
	getStylesAtomic,
	getThemes,
	getToken,
	getTokenValue,
	getTokens,
	getVariable,
	setupReactNative,
	getVariableName,
	getVariableValue,
	insertFont,
	setupDev,
	// constants
	isChrome,
	isClient,
	isServer,
	isTamaguiComponent,
	isTamaguiElement,
	isTouchable,
	isVariable,
	isWeb,
	isWebTouchable,
	matchMedia,
	mediaObjectToString,
	mediaQueryConfig,
	mediaState,
	spacedChildren,
	styled,
	themeable,
	useDidFinishSSR,
	useEvent,
	// hooks
	useGet,
	useIsTouchDevice,
	useIsomorphicLayoutEffect,
	useMedia,
	useProps,
	usePropsAndStyle,
	useStyle,
	useConfiguration,
	useTheme,
	useThemeName,
	variableToString,
	withStaticProperties,
} from "@kane/core";
