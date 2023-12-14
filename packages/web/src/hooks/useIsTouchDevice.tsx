import { isTouchable, isWeb } from "@kane/constants";
import { useDidFinishSSR } from "@kane/use-did-finish-ssr";

export const useIsTouchDevice = () => {
	return !isWeb ? true : useDidFinishSSR() ? isTouchable : false;
};
