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
			<Path d="M3 7V5a2 2 0 0 1 2-2h2" stroke={color} />
			<Path d="M17 3h2a2 2 0 0 1 2 2v2" stroke={color} />
			<Path d="M21 17v2a2 2 0 0 1-2 2h-2" stroke={color} />
			<Path d="M7 21H5a2 2 0 0 1-2-2v-2" stroke={color} />
			<_Circle cx="12" cy="12" r="1" stroke={color} />
			<Path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "ScanEye";

export const ScanEye = memo<IconProps>(themed(Icon));
