<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI } from './types';

	const { parentID, incValue } = getContext<NumberAPI>('NumberAPI');
	const id = `${parentID}-incrementButton`;
</script>

<div role="button" class={`${$$props.class}`} on:click={incValue} {id} aria-hidden>
	<slot />
</div>
