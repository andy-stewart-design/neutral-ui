<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI } from './types';

	export { className as class };
	let className = '';

	const { parentID, decValue } = getContext<NumberAPI>('NumberAPI');
	const id = `${parentID}-decrementButton`;
</script>

<div role="button" class={className} on:click={decValue} {id} aria-hidden>
	<slot />
</div>
