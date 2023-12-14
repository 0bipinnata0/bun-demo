import type { PresenceContextProps } from "@kane/web";
import { createContext } from "react";

export const PresenceContext = createContext<PresenceContextProps | null>(null);

export const ResetPresence = (props: { children?: any }) => (
	<PresenceContext.Provider value={null}>
		{props.children}
	</PresenceContext.Provider>
);
