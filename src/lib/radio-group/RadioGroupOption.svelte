<script lang="ts">
	import { setAria } from '$lib/actions/setAria';
	import { getContext, onMount } from 'svelte';
	import type { API, ElementType, Value } from './types';

	const {
		groupID,
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
	else registerElement(type, uuid, value);

	const id = `${groupID}-${type}-${index}`;

	$: checked = $activeValue === value;

	function setActive(i: number, v: Value) {
		$activeIndex = i;
		$activeValue = v;
	}

	onMount(() => {
		registerNode(uuid, optionRef);

		return () => {
			unregisterElement(type, uuid);
		};
	});
</script>

<div
	bind:this={optionRef}
	on:click|preventDefault={() => setActive(index, value)}
	on:keydown={handleClick}
	use:setAria={{ id }}
	{id}
	role="radio"
	aria-checked={checked}
	tabindex={checked ? 0 : -1}
	class={`${$$props.class}`}
	style:display="inline-block"
	style:cursor="pointer"
>
	<slot {checked} />
</div>
