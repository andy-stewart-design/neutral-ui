<script lang="ts">
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
	const optionID = `${groupID}-option-${index}`;
	const innerID = `${optionID}-${role}`;

	onDestroy(() => unregisterElement(role, uuid));
</script>

{#if inner}
	<div id={innerID} class={`${className} sr-only`} aria-hidden="true">
		<slot />
	</div>
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<label
		id={outerID}
		for={groupID}
		class={className}
		class:sr-only={!visible}
		on:click|preventDefault={setFocus}
	>
		<slot />
	</label>
{/if}

<!-- <script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { API, ElementType } from './types';

	export let visible = false;
	export let inner = false;
	export let index = -1;
	let type: ElementType = 'label';

	const { groupID, registerElement, unregisterElement } = getContext<API>('radioGroupAPI');
	const uuid = crypto.randomUUID();

	if (inner) {
		if (index < 0) index = registerElement(type, uuid);
		else registerElement(type, uuid);
	}

	const outerID = `${groupID}-${type}`;
	const optionID = `${groupID}-option-${index}`;
	const innerID = `${optionID}-${type}`;

	onDestroy(() => unregisterElement(type, uuid));
</script>

{#if inner}
	<div id={innerID} class={`${$$props.class} sr-only`} aria-hidden="true">
		<slot />
	</div>
{:else}
	<label id={outerID} for={groupID} class={`${$$props.class}`} class:sr-only={!visible}>
		<slot />
	</label>
{/if} -->
