<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	export let padding = '0.75rem';

	const { parentID, handleMousedown, handleTouchstart, handleKeydown } =
		getContext<RangeAPI>('rangeSliderAPI');
	const role = 'track';
	const id = `${parentID}-${role}`;
</script>

<div
	style:position="relative"
	style:padding={`${padding} 0`}
	on:mousedown|preventDefault={handleMousedown}
	on:touchstart|preventDefault={handleTouchstart}
	on:keydown={handleKeydown}
>
	<div
		{id}
		class={`${$$props.class}`}
		style:position="absolute"
		style:translate="0% -50%"
		style:width="100%"
		style:cursor="pointer"
		tabindex="-1"
		aria-hidden="true"
	/>
	<slot />
</div>
