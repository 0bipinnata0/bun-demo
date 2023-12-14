import type { TamaguiProviderProps } from "@kane/core";
import { TamaguiProvider as OGProvider } from "@kane/core";
import { PortalProvider } from "@kane/portal";

export const TamaguiProvider = ({
	children,
	...props
}: TamaguiProviderProps) => {
	return (
		<OGProvider {...props}>
			<PortalProvider shouldAddRootHost>{children}</PortalProvider>
		</OGProvider>
	);
};
