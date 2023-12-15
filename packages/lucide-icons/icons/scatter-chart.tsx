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
			<_Circle cx="7.5" cy="7.5" r=".5" stroke={color} />
			<_Circle cx="18.5" cy="5.5" r=".5" stroke={color} />
			<_Circle cx="11.5" cy="11.5" r=".5" stroke={color} />
			<_Circle cx="7.5" cy="16.5" r=".5" stroke={color} />
			<_Circle cx="17.5" cy="14.5" r=".5" stroke={color} />
			<Path d="M3 3v18h18" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "ScatterChart";

export const ScatterChart = memo<IconProps>(themed(Icon));