export const isObj = (x: unknown) =>
	x && !Array.isArray(x) && typeof x === "object";
