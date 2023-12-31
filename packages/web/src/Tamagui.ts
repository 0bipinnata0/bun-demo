import * as Helpers from "@kane/helpers";

import { getConfig } from "./config";
import {
	getAllRules,
	getAllSelectors,
	getAllTransforms,
} from "./helpers/insertStyleRule";
import { mediaState } from "./hooks/useMedia";

// easy introspection
// only included in dev mode

class TamaguiManager {
	Helpers = Helpers;

	get mediaState() {
		return { ...mediaState };
	}

	get config() {
		return getConfig();
	}

	get insertedRules() {
		return getAllRules();
	}

	get allSelectors() {
		return getAllSelectors();
	}

	get allTransforms() {
		return getAllTransforms();
	}

	get identifierToValue() {
		return identifierToValue;
	}
}

export const Tamagui = new TamaguiManager();

const identifierToValue = new Map<string, any>();

export const getValueFromIdentifier = (identifier: string) => {
	return identifierToValue.get(identifier);
};

export const setIdentifierValue = (identifier: string, value: any) => {
	identifierToValue.set(identifier, value);
};
