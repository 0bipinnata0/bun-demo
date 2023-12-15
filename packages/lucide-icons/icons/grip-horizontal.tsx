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
			<_Circle cx="12" cy="9" r="1" stroke={color} />
			<_Circle cx="19" cy="9" r="1" stroke={color} />
			<_Circle cx="5" cy="9" r="1" stroke={color} />
			<_Circle cx="12" cy="15" r="1" stroke={color} />
			<_Circle cx="19" cy="15" r="1" stroke={color} />
			<_Circle cx="5" cy="15" r="1" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "GripHorizontal";

export const GripHorizontal = memo<IconProps>(themed(Icon));
