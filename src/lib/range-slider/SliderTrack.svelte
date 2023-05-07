<script lang="ts">
	export { className as class };
	let className: string | undefined = '';
	import { getContext } from 'svelte';
	import { SLIDER_CONTEXT } from '$lib/utils/ui';
	import type { RangeSliderAPI } from './types';

	const { size } = getContext<RangeSliderAPI>(SLIDER_CONTEXT);
	let offset = size.width / 2;
</script>

<div
	class={className}
	style:position="absolute"
	style:top="50%"
	style:left={`-${offset}${size.unit}`}
	style:right={`-${offset}${size.unit}`}
	style:translate="0 -50%"
>
	<slot />
</div>
