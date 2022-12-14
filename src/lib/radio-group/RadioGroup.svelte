<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { setAria } from '$lib/actions/setAria';
	import type { API, ElementType, OptionsArray, LabelsArray, Value } from './types';

	export let value: Value;
	export { className as class };
	let className = '';

	let activeValue = writable(value);
	$: activeValue.set(value);
	$: value = $activeValue;

	let activeIndex = writable(0);
	let options: OptionsArray[] = [];
	let labels: LabelsArray[] = [];

	const ariaID = crypto.randomUUID().split('-').pop()!;
	const id = `nui-radiogroup-${ariaID}`;

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
		setFocus();
	}

	setContext<API>('radioGroupAPI', {
		groupID: id,
		activeIndex,
		activeValue,
		registerElement,
		registerNode,
		unregisterElement,
		handleClick,
		setFocus
	});

	onDestroy(() => {
		options = [];
		labels = [];
	});
</script>

<div {id} role="radiogroup" class={className} use:setAria={{ id }}>
	<slot />
</div>
