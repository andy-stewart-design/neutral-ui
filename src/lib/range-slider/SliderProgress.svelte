<script lang="ts">
	import { getContext } from 'svelte';
	import { SLIDER_CONTEXT } from '$lib/utils/ui';
	import { map } from '$lib/utils/math';
	import type { RangeSliderAPI } from './types';

	export let offset = 12;
	export { className as class };
	let className: string | undefined = '';

	const { activeValue, min, max } = getContext<RangeSliderAPI>(SLIDER_CONTEXT);

	$: posX = map($activeValue, Number($min), Number($max), 0, 100);
	$: padding = map(posX, 0, 100, offset, -offset);
</script>

<div class={className} style:width={`calc(${posX}% + ${padding}px)`} />
