<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { API, ElementType, Value } from './types';

	const {
		ariaID,
		activeIndex,
		activeValue,
		registerElement,
		registerNode,
		unregisterElement,
		handleClick
	} = getContext<API>('radioGroupAPI');

	export let value: Value;
	export let index: number = -1;
	const type: ElementType = 'option';
	const uuid = crypto.randomUUID();
	let optionRef: HTMLElement;

	if (index < 0) index = registerElement(type, uuid, value);

	const id = `neutral-radiogroup-${ariaID}-${type}-${index}`;
	const labelledBy = `neutral-radiogroup-${ariaID}-${type}-${index}-label`;

	$: checked = $activeValue === value;

	function setActive(i: number, v: Value) {
		$activeIndex = i;
		$activeValue = v;
	}

	onMount(() => {
		registerNode(uuid, optionRef);

		return () => unregisterElement(type, uuid);
	});
</script>

<div
	bind:this={optionRef}
	on:click={() => setActive(index, value)}
	on:keydown={handleClick}
	{id}
	role="radio"
	aria-checked={checked}
	tabindex={checked ? 0 : -1}
	aria-labelledby={labelledBy}
	class={`${$$props.class}`}
>
	<slot {checked} />
</div>

<style scoped>
	div {
		display: inline-block;
		cursor: pointer;
	}
</style>
