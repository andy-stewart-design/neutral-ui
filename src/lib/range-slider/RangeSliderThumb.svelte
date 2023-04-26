<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	export { className as class };
	let className: string | undefined = '';
	if (className === '') className = undefined;

	const { parentID, value, min, max, posX, isDisabled } = getContext<RangeAPI>('rangeSliderAPI');
	const role = 'thumb';
	const id = `${parentID}-${role}`;
</script>

<div
	{id}
	class={className}
	style:position="absolute"
	style:translate="-50% -50%"
	style:left={`${$posX}%`}
	style:cursor="inherit"
	role="slider"
	tabindex="0"
	aria-valuemax={value}
	aria-valuemin={min}
	aria-valuenow={max}
	aria-disabled={$isDisabled}
	aria-labelledby={`${parentID}-label`}
	aria-orientation="horizontal"
/>
