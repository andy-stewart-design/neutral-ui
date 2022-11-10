<script lang="ts">
	// TODO: set initial active option based on the active value
	// TODO: work out the flex issue

	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { API, OptionsArray, Value } from './types';

	export let value: Value;
	let activeValue = writable(value);
	$: activeValue.set(value);
	$: value = $activeValue;

	let activeIndex = writable(0);
	let options: OptionsArray[] = [];
	const ariaID = crypto.randomUUID();

	function setFocus(): void {
		options[$activeIndex].node.focus();
	}

	function registerInput(node: HTMLElement, value: Value, uuid: string): number {
		options.push({ node, value, uuid });
		return options.findIndex((obj) => obj.uuid === uuid);
	}

	function unregisterInput(uuid: string): void {
		const i = options.findIndex((obj) => obj.uuid === uuid);
		options.splice(i, 1);
	}

	function handleClick(e: KeyboardEvent): void {
		const maxIndex = options.length - 1;
		if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
			e.preventDefault();
			if ($activeIndex >= maxIndex) $activeIndex = 0;
			else $activeIndex++;
		} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
			e.preventDefault();
			if ($activeIndex <= 0) $activeIndex = maxIndex;
			else $activeIndex--;
		}
		$activeValue = options[$activeIndex].value;
		setFocus();
	}

	setContext<API>('radioGroupAPI', {
		ariaID,
		activeIndex,
		activeValue,
		registerInput,
		unregisterInput,
		handleClick
	});

	onDestroy(() => (options = []));
</script>

<div id={`radiogroup-${ariaID}`} role="radiogroup" class={`${$$props.class}`}>
	<slot />
</div>

<!-- style:display="flex"
	style:flex-grow={1}
	style:background="blue" -->
