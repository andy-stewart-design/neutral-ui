<script>import { getContext } from 'svelte';
export let padding = '0.75rem';
export { className as class };
let className = '';
const { parentID, isDisabled, handleMousedown, handleTouchstart, handleKeydown } = getContext('rangeSliderAPI');
const role = 'track';
const id = `${parentID}-${role}`;
</script>

<div
	style:position="relative"
	style:padding={`${padding} 0`}
	style:cursor={$isDisabled ? 'auto' : 'pointer'}
	on:mousedown={handleMousedown}
	on:touchstart={handleTouchstart}
	on:keydown={handleKeydown}
>
	<div
		{id}
		class={className}
		style:position="absolute"
		style:translate="0% -50%"
		style:width="100%"
		tabindex="-1"
		aria-hidden="true"
	/>
	<slot />
</div>
