<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	const { parentID, posX } = getContext<RangeAPI>('rangeSliderAPI');
	const role = 'progress';
	const id = `${parentID}-${role}`;
</script>

<div
	{id}
	class={`${$$props.class}`}
	style:position="absolute"
	style:translate="0% -50%"
	style:width={`${$posX}%`}
	style:transform-origin="left"
/>
<!-- style={`clip-path: polygon(0 0, ${$normalValue}% 0, ${$normalValue}% 100%, 0 100%);`} -->
