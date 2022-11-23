<script lang="ts">
	import { setContext } from 'svelte';
	import type { RangeAPI } from './types';

	const ariaID = crypto.randomUUID().split('-').pop()!;
	const id = `neutral-rangeslider-${ariaID}-group`;

	setContext<RangeAPI>('rangeSliderAPI', { ariaID });
</script>

<div {id} class={`${$$props.class}`}>
	<slot {id} />
</div>
