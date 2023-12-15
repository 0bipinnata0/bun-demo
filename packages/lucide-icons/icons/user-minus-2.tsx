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
			<Path d="M14 19a6 6 0 0 0-12 0" stroke={color} />
			<_Circle cx="8" cy="9" r="4" stroke={color} />
			<Line x1="22" x2="16" y1="11" y2="11" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "UserMinus2";

export const UserMinus2 = memo<IconProps>(themed(Icon));
