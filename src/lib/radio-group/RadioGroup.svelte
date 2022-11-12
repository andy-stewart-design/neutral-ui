<script lang="ts">
	// TODO: set initial active option based on the active value
	// TODO: work out the flex issue

	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { API, ElementType, OptionsArray, LabelsArray, Value } from './types';

	export let value: Value;
	let activeValue = writable(value);
	$: activeValue.set(value);
	$: value = $activeValue;

	let activeIndex = writable(0);
	let options: OptionsArray[] = [];
	let labels: LabelsArray[] = [];

	// TODO: fix this hack
	const ariaID = crypto.randomUUID().split('-').pop() as string;
	const id = `neutral-radiogroup-${ariaID}`;
	const labelledBy = `neutral-radiogroup-${ariaID}-label`;

	function setFocus(): void {
		options[$activeIndex].node?.focus();
	}

	function registerElement(type: ElementType, uuid: string, val?: Value): number {
		if (type === 'option' && val) {
			options.push({ uuid, val });
			const i = options.findIndex((obj) => obj.uuid === uuid);
			if (val === $activeValue) activeIndex.set(i);
			return i;
		} else if (type === 'label') {
			labels.push({ uuid });
			return labels.findIndex((obj) => obj.uuid === uuid);
		}
		return -1;
	}

	function registerNode(uuid: string, node: HTMLElement) {
		const index = options.findIndex((obj) => obj.uuid === uuid);
		let option = options[index];
		options[index] = { ...option, node };
		// console.log(option);
	}

	function unregisterElement(type: ElementType, uuid: string): void {
		if (type === 'option') {
			const i = options.findIndex((obj) => obj.uuid === uuid);
			options.splice(i, 1);
		} else if (type === 'label') {
			const i = labels.findIndex((obj) => obj.uuid === uuid);
			labels.splice(i, 1);
		}
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
		$activeValue = options[$activeIndex].val;
		console.log(options[$activeIndex]);
		setFocus();
	}

	setContext<API>('radioGroupAPI', {
		ariaID,
		activeIndex,
		activeValue,
		registerElement,
		registerNode,
		unregisterElement,
		handleClick
	});

	onDestroy(() => {
		options = [];
		labels = [];
	});
</script>

<div {id} role="radiogroup" class={`${$$props.class}`} aria-labelledby={labelledBy}>
	<slot />
</div>
