<script lang="ts">
	import { getContext } from 'svelte';
	import { SLIDER_CONTEXT } from '$lib/utils/ui';
	import { map } from '$lib/utils/math';
	import type { RangeSliderAPI } from './types';

	export { className as class };
	let className: string | undefined = '';

	const { activeValue, min, max, size } = getContext<RangeSliderAPI>(SLIDER_CONTEXT);
	let offset = size.width / 2;

	$: posX = map($activeValue, Number($min), Number($max), 0, 100);
	$: padding = map(posX, 0, 100, offset, -offset);
</script>

<div class={className} style:width={`calc(${posX}% + ${padding}px)`} />
