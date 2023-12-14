import { SizeVariantSpreadFunction, getVariableValue, isWeb } from "@kane/core";
import { getButtonSized } from "@kane/get-button-sized";
import { getFontSized } from "@kane/get-font-sized";
import { getSpace } from "@kane/get-token";

export const inputSizeVariant: SizeVariantSpreadFunction<any> = (
	val = "$true",
	extras,
) => {
	if (extras.props.multiline || extras.props.numberOfLines > 1) {
		return textAreaSizeVariant(val, extras);
	}
	const buttonStyles = getButtonSized(val, extras);
	const paddingHorizontal = getSpace(val, {
		shift: -1,
		bounds: [2],
	});
	const fontStyle = getFontSized(val as any, extras);
	// lineHeight messes up input on native
	if (!isWeb && fontStyle) {
		delete fontStyle["lineHeight"];
	}
	return {
		...fontStyle,
		...buttonStyles,
		paddingHorizontal,
	};
};

export const textAreaSizeVariant: SizeVariantSpreadFunction<any> = (
	val = "$true",
	extras,
) => {
	const { props } = extras;
	const buttonStyles = getButtonSized(val, extras);
	const fontStyle = getFontSized(val as any, extras)!;
	const lines = props.rows ?? props.numberOfLines;
	const height =
		typeof lines === "number"
			? lines * getVariableValue(fontStyle.lineHeight)
			: "auto";
	const paddingVertical = getSpace(val, {
		shift: -2,
		bounds: [2],
	});
	const paddingHorizontal = getSpace(val, {
		shift: -1,
		bounds: [2],
	});
	return {
		...buttonStyles,
		...fontStyle,
		paddingVertical,
		paddingHorizontal,
		height,
	};
};
