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
			<Rect width="3" height="8" x="13" y="2" rx="1.5" stroke={color} />
			<Path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" stroke={color} />
			<Rect width="3" height="8" x="8" y="14" rx="1.5" stroke={color} />
			<Path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" stroke={color} />
			<Rect width="8" height="3" x="14" y="13" rx="1.5" stroke={color} />
			<Path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" stroke={color} />
			<Rect width="8" height="3" x="2" y="8" rx="1.5" stroke={color} />
			<Path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "Slack";

export const Slack = memo<IconProps>(themed(Icon));
