<script lang="ts">
	import { getContext } from 'svelte';
	import { LIB_PREFIX, SLIDER_CONTEXT } from '$lib/utils/ui';
	import type { RangeSliderAPI } from './types';

	export let size = 24;

	export { className as class };
	let className: string | undefined = '';

	const { groupID, activeValue, min, max } = getContext<RangeSliderAPI>(SLIDER_CONTEXT);

	$: posX = map($activeValue, Number($min), Number($max), 0, 100);

	function map(n: number, start1: number, end1: number, start2: number, end2: number): number {
		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
	}
</script>

<!-- <div style:position="absolute" style:top="50%" style:left="0" style:width="100%">
	<div class="relative w-full">
		<div
			id={`${LIB_PREFIX}-${groupID}`}
			class={className}
			style:position="absolute"
			style:top="50%"
			style:left={`${posX}%`}
			style:translate="-50% -50%"
			style:width={`${size}px`}
			style:height={`${size}px`}
			role="slider"
			tabindex="0"
			aria-valuenow={$activeValue}
			aria-valuemin={Number($min)}
			aria-valuemax={Number($max)}
			aria-orientation="horizontal"
		/>
	</div>
</div> -->
<div
	id={`${LIB_PREFIX}-${groupID}`}
	class={className}
	style:position="relative"
	style:width={`${size}px`}
	style:height={`${size}px`}
	style:margin-left={`${posX}%`}
	style:translate="-50% 0"
	role="slider"
	tabindex="0"
	aria-valuenow={$activeValue}
	aria-valuemin={Number($min)}
	aria-valuemax={Number($max)}
	aria-orientation="horizontal"
/>
