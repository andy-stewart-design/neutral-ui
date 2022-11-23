<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI } from './types';

	const { parentID, decValue } = getContext<NumberAPI>('NumberAPI');
	const id = `${parentID}-decrementButton`;
</script>

<div role="button" class={`${$$props.class}`} on:click={decValue} {id} aria-hidden>
	<slot />
</div>
