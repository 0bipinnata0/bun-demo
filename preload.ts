import { plugin, type BunPlugin } from "bun";

const myPlugin: BunPlugin = {
	name: "Custom loader",
	setup(build) {
		const isWeb = process.env.EXPO_PUBLIC_TAMAGUI_TARGET === "web";
		build.onResolve({ filter: /\.tsx?$|\.jsx?$/ }, (args) => {
			console.info(">>>isWeb", isWeb);
			const extensions = isWeb
				? [".web.tsx", ".web.ts", ".web.jsx", ".web.js"]
				: [".native.tsx", ".native.ts", ".native.jsx", ".native.js"];

			for (const extension of extensions) {
				const path = args.path + extension;
				const newPath = args.path + extension;

				return { path: newPath };
			}

			return null;
		});
	},
};
