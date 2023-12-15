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
			<Line x1="3" x2="21" y1="6" y2="6" stroke={color} />
			<Line x1="3" x2="21" y1="12" y2="12" stroke={color} />
			<Line x1="3" x2="21" y1="18" y2="18" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "AlignJustify";

export const AlignJustify = memo<IconProps>(themed(Icon));