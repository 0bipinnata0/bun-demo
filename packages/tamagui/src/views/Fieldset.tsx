import { GetProps, styled } from "@kane/core";
import { YStack } from "@kane/stacks";

export const Fieldset = styled(YStack, {
	name: "Fieldset",
	tag: "fieldset",

	variants: {
		horizontal: {
			true: {
				flexDirection: "row",
				alignItems: "center",
			},
		},
	} as const,
});

export type FieldsetProps = GetProps<typeof Fieldset>;
