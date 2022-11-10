<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { API, Value } from './types';

	export let value: Value;
	export let index: number = -5;
	let optionRef: HTMLElement;

	const uuid = crypto.randomUUID();
	const api = getContext<API>('radioGroupAPI');
	const { ariaID, activeIndex, activeValue, registerInput, unregisterInput, handleClick } = api;

	$: checked = $activeIndex === index;

	function setActive(i: number, v: Value) {
		$activeIndex = i;
		$activeValue = v;
	}

	onMount(() => {
		if (index < 0) index = registerInput(optionRef, value, uuid);
		else registerInput(optionRef, value, uuid);

		return () => unregisterInput(uuid);
	});
</script>

<div
	bind:this={optionRef}
	on:click={() => setActive(index, value)}
	on:keydown={handleClick}
	id={`radiogroup-${ariaID}-option-${index}`}
	role="radio"
	aria-checked={checked}
	tabindex={checked ? 0 : -1}
	aria-labelledby={`radiogroup-${ariaID}-option-${index}`}
	class={`${$$props.class}`}
>
	<div id={`radiogroup-${ariaID}-option-${index}`} style:width="100%">
		<slot {checked} />
	</div>
</div>

<!-- style:flex-grow={1}
style:user-select="none" -->
<style scoped>
	div {
		display: inline-block;
		cursor: pointer;
	}
</style>
