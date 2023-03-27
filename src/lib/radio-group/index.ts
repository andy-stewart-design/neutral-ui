import { default as RadioGroup } from './RadioGroup.svelte';
import { default as RadioOption } from './RadioOption.svelte';
import { default as RadioLabel } from './RadioLabel.svelte';

export { default as RadioGroup } from './RadioGroup.svelte';
export { default as RadioOption } from './RadioOption.svelte';
export { default as RadioGroupOption } from './RadioGroupOption.svelte';
export { default as RadioLabel } from './RadioLabel.svelte';
export { default as RadioGroupLabel } from './RadioGroupLabel.svelte';
// export { default as RadioGroupDescription } from "../description/Description.svelte";

export const Radio = {
	Group: RadioGroup,
	Option: RadioOption,
	Label: RadioLabel
};
