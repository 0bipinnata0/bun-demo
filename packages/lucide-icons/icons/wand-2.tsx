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
			<Path
				d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"
				stroke={color}
			/>
			<Path d="m14 7 3 3" stroke={color} />
			<Path d="M5 6v4" stroke={color} />
			<Path d="M19 14v4" stroke={color} />
			<Path d="M10 2v2" stroke={color} />
			<Path d="M7 8H3" stroke={color} />
			<Path d="M21 16h-4" stroke={color} />
			<Path d="M11 3H9" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "Wand2";

export const Wand2 = memo<IconProps>(themed(Icon));
