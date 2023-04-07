<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI } from './types';
	import { NUMBER_GROUP_CONTEXT } from '$lib/utils/ui';

	const switchGroupContext = getContext<NumberAPI>(NUMBER_GROUP_CONTEXT);
	const { activeValue, groupID, max, min, step, bigStep, placeholder, clampValue } =
		switchGroupContext;
	const labelID = switchGroupContext ? `nui-${groupID}-label` : '';

	export let value: number | string | null = null;

	export { className as class };
	let className = '';

	const role = 'spinbutton';
	const id = `nui-${groupID}`;

	// let isValid = true;

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') clampValue();
		else if (e.key === 'Home') value = min;
		else if (e.key === 'End') value = max;
		else if ((e.shiftKey && e.key === 'ArrowUp') || e.key === 'PageUp') {
			e.preventDefault();
			if ($activeValue === undefined) $activeValue = 0;
			$activeValue += Number(bigStep);
		} else if ((e.shiftKey && e.key === 'ArrowDown') || e.key === 'PageDown') {
			e.preventDefault();
			if ($activeValue === undefined) $activeValue = 0;
			$activeValue -= Number(bigStep);
		}
		clampValue();
	}

	// function checkValid() {
	// 	value === null ? (isValid = false) : (isValid = true);
	// }

	let attributes = { id, min, max, placeholder: `${placeholder}`, step, role };
</script>

<!-- <div style:position="relative" style:display="flex">
	<slot name="start" /> -->
<input
	class={`nui-input ${className}`}
	bind:value={$activeValue}
	{...attributes}
	on:keydown={handleKeyDown}
	on:blur={clampValue}
	type="number"
	pattern="[0-9]*"
	aria-labelledby={labelID}
	aria-valuenow={Number(value)}
	aria-valuemin={Number(min)}
	aria-valuemax={Number(max)}
	autocomplete="off"
/>
<!-- <slot />
</div> -->
<!-- aria-invalid={!isValid} -->
