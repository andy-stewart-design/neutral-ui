<script lang="ts">
	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	const { parentID } = getContext<RangeAPI>('rangeSliderAPI');
	const role = 'track';
	const id = `${parentID}-${role}`;
</script>

<div style:position="relative">
	<div
		{id}
		class={`${$$props.class}`}
		style:position="absolute"
		style:translate="0% -50%"
		style:width="100%"
	/>
	<slot />
</div>
