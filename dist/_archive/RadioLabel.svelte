<!-- <script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { API, ElementType } from './types';

	export let visible = false;
	export let inner = false;
	export let index = -1;
	export { className as class };
	let className = '';

	let role: ElementType = 'label';

	const { groupID, registerElement, unregisterElement, setFocus } =
		getContext<API>('radioGroupAPI');
	const uuid = crypto.randomUUID();

	if (inner) {
		if (index < 0) index = registerElement(role, uuid);
		else registerElement(role, uuid);
	}

	const outerID = `${groupID}-${role}`;
	const innerID = `${groupID}-option-${index}-${role}`;

	onDestroy(() => unregisterElement(role, uuid));
</script>

{#if inner}
	<div id={innerID} class={className} class:sr-only={!visible}>
		<slot />
	</div>
{:else}
	<label
		id={outerID}
		for={groupID}
		class={className}
		class:sr-only={!visible}
		on:click|preventDefault={setFocus}
		on:keydown={(e) => e.key === 'Enter' && setFocus()}
	>
		<slot />
	</label>
{/if} -->
