<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	const { parentID, value, min, max, posX, handleKeydown, handleMousedown, disabled } =
		getContext<RangeAPI>('rangeSliderAPI');
	const role = 'thumb';
	const id = `${parentID}-${role}`;
</script>

<div
	{id}
	class={`${$$props.class}`}
	style:position="absolute"
	style:translate="-50% -50%"
	style:left={`${$posX}%`}
	on:mousedown|preventDefault={handleMousedown}
	on:touchstart={(e) => alert(e.touches[0].clientX)}
	on:keydown={handleKeydown}
	role="slider"
	tabindex="0"
	aria-valuemax={value}
	aria-valuemin={min}
	aria-valuenow={max}
	aria-disabled={disabled}
	aria-labelledby={`${parentID}-label`}
	aria-orientation="horizontal"
/>
