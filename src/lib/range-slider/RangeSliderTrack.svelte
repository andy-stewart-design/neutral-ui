<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	const { parentID, handleMousemove } = getContext<RangeAPI>('rangeSliderAPI');
	const role = 'track';
	const id = `${parentID}-${role}`;
</script>

<div style:position="relative">
	<div
		{id}
		class={`${$$props.class}`}
		on:mousedown={handleMousemove}
		style:position="absolute"
		style:translate="0% -50%"
		style:width="100%"
		style:cursor="pointer"
		tabindex="-1"
		aria-hidden="true"
	/>
	<slot />
</div>
