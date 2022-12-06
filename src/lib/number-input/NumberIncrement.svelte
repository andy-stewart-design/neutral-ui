<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI } from './types';

	export { className as class };
	let className = '';

	const { parentID, incValue } = getContext<NumberAPI>('NumberAPI');
	const id = `${parentID}-incrementButton`;
</script>

<div role="button" class={className} on:click={incValue} {id} aria-hidden>
	<slot />
</div>
