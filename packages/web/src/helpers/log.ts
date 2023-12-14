export function log(...args: unknown[]) {
	if (process.env.NODE_ENV === "production") return;
	if (process.env.TAMAGUI_TARGET === "web") {
		return console.info(...args);
	}
	// react native doesn't log in the cli unless it's log
	// biome-ignore lint/suspicious/noConsoleLog: <explanation>
	return console.log(...args);
}
