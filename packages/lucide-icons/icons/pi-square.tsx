import type { IconProps } from "@kane/helpers-icon";
import { themed } from "@kane/helpers-icon";
import PropTypes from "prop-types";
import React, { memo } from "react";
import {
	Defs,
	Ellipse,
	G,
	Line,
	LinearGradient,
	Path,
	Polygon,
	Polyline,
	RadialGradient,
	Rect,
	Stop,
	Svg,
	Symbol,
	Use,
	Circle as _Circle,
	Text as _Text,
} from "react-native-svg";

const Icon = (props) => {
	const { color = "black", size = 24, ...otherProps } = props;
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...otherProps}
		>
			<Rect width="18" height="18" x="3" y="3" rx="2" stroke={color} />
			<Path d="M7 7h10" stroke={color} />
			<Path d="M10 7v10" stroke={color} />
			<Path d="M16 17a2 2 0 0 1-2-2V7" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "PiSquare";

export const PiSquare = memo<IconProps>(themed(Icon));