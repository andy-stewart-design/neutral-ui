<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { API, ElementType } from './types';

	export let visible = false;
	export let inner = false;
	export let index = -1;
	let type: ElementType = 'label';

	const { ariaID, registerElement, unregisterElement } = getContext<API>('radioGroupAPI');
	const uuid = crypto.randomUUID();

	if (inner && index < 0) index = registerElement(type, uuid);

	const mainID = `neutral-radiogroup-${ariaID}-${type}`;
	const mainFor = `neutral-radiogroup-${ariaID}`;
	const innerID = `neutral-radiogroup-${ariaID}-option-${index}-${type}`;
	const innerFor = `neutral-radiogroup-${ariaID}-option-${index}`;

	onDestroy(() => unregisterElement(type, uuid));
</script>

{#if inner}
	<p id={innerID} for={innerFor} class={`${$$props.class}`} role="none">
		<slot />
	</p>
{:else}
	<label id={mainID} for={mainFor} class={`${$$props.class}`} class:sr-only={!visible} role="none">
		<slot />
	</label>
{/if}

<style scoped>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
