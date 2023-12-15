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
			<Path d="M12 22a10 10 0 1 1 10-10" stroke={color} />
			<Path d="M22 22 12 12" stroke={color} />
			<Path d="M22 16v6h-6" stroke={color} />
		</Svg>
	);
};

Icon.displayName = "ArrowDownRightFromCircle";

export const ArrowDownRightFromCircle = memo<IconProps>(themed(Icon));
