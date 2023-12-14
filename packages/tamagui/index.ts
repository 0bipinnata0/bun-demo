import "./src/setup";

// export * from '@kane/accordion'
// export * from '@kane/adapt'
// export * from '@kane/alert-dialog'
// export * from '@kane/animate-presence'
// export * from '@kane/avatar'
export * from "@kane/button";
// export * from '@kane/card'
// export * from '@kane/checkbox'
export * from "@kane/compose-refs";
export * from "@kane/create-context";
// export * from '@kane/dialog'
export * from "@kane/font-size";
// export * from '@kane/form'
export * from "@kane/group";
export * from "@kane/helpers-tamagui";
// export * from '@kane/image'
// export * from '@kane/label'
// export * from '@kane/list-item'
// export * from '@kane/popover'
// export * from '@kane/popper'
export * from "@kane/portal";
// export * from '@kane/progress'
// export * from '@kane/radio-group'
// export * from '@kane/scroll-view'
// export * from '@kane/select'
// export * from '@kane/separator'
// export * from '@kane/shapes'
// export * from '@kane/sheet'
// export * from '@kane/slider'
export * from "@kane/stacks";
// export * from '@kane/switch'
// export * from '@kane/tabs'
export * from "@kane/text";
// export * from '@kane/theme'
// export * from '@kane/toggle-group'
// export * from '@kane/tooltip'
// export * from '@kane/use-controllable-state'
// export * from '@kane/use-debounce'
// export * from '@kane/use-force-update'
// export * from '@kane/use-window-dimensions'
// export * from '@kane/visually-hidden'

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

// since we overlap with StackProps and potentially others
// lets be explicit on what gets exported
export type {
	AnimationKeys,
	ColorTokens,
	CreatekaneConfig,
	CreatekaneProps,
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
	GenerickaneConfig,
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
	kaneBaseTheme,
	kaneComponent,
	kaneComponentPropsBase,
	kaneConfig,
	kaneCustomConfig,
	kaneElement,
	kaneInternalConfig,
	kaneProviderProps,
	kaneSettings,
	kaneTextElement,
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
	iskaneComponent,
	iskaneElement,
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
