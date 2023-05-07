<script lang="ts">
	// TODO: Clean up components
	// TODO: Allow Scrolling (V2)

	import { getID, LIB_PREFIX, LISTBOX_CONTEXT } from '$lib/utils/ui';
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { ListboxAPI, Option, Value } from './types';

	export let value: Value | Value[];
	export let multi = false;
	export let atLeast: string | number = 0;
	export { className as class };
	let className: string = '';

	if (multi && typeof value !== 'object') {
		throw new Error(
			'When using a multiselect listbox, you must pass an array of strings or numbers as the listbox value.'
		);
	} else if (!multi && typeof value === 'object') {
		throw new Error(
			'When using a single select listbox, you must pass an string or number as the listbox value.'
		);
	}

	const role = 'listbox';
	const uuid = getID();
	const group = `${role}-${uuid}`;
	const id = `${LIB_PREFIX}-${group}`;

	const isOpen = writable(false);
	const activeIndex = writable(0);
	const selectedIndex: Writable<number | number[]> = writable(multi ? [] : 0);
	let options: Option[] = [];
	$: len = options.length - 1;

	const dispatch = createEventDispatcher();

	const registerOption = (uuid: string, val: Value) => {
		options = [...options, { uuid, val }];
		const i = options.findIndex((obj) => obj.uuid === uuid);
		if (multi && typeof value === 'object' && typeof $selectedIndex === 'object') {
			if (value.includes(val) && !$selectedIndex.includes(i)) {
				$selectedIndex = [...$selectedIndex, i];
			}
		} else {
			if (value === val) {
				activeIndex.set(i);
				selectedIndex.set(i);
			}
		}
		return i;
	};

	const unregisterOption = (uuid: string) => {
		const i = options.findIndex((obj) => obj.uuid === uuid);
		options.splice(i, 1);
	};

	const setIsOpen = (b?: boolean) => {
		if (b) $isOpen = b;
		else $isOpen = !$isOpen;

		const btn = document.querySelector(`#${LIB_PREFIX}-${group}-button`);
		if (!$isOpen && btn instanceof HTMLElement) {
			btn.focus();
		}
	};

	const setActive = (type: 'inc' | 'dec') => {
		if (type === 'dec') {
			$activeIndex <= 0 ? ($activeIndex = len) : ($activeIndex -= 1);
		} else if (type === 'inc') {
			$activeIndex >= len ? ($activeIndex = 0) : ($activeIndex += 1);
		}
	};

	const setSelected = () => {
		if (multi && typeof value === 'object' && typeof $selectedIndex === 'object') {
			const nextValue = options[$activeIndex].val;
			if (value.includes(nextValue)) {
				if (value.length <= Number(atLeast)) return;
				value = value.filter((v) => v !== nextValue);
				$selectedIndex = $selectedIndex.filter((i) => i !== $activeIndex);
			} else {
				value = [...value, nextValue];
				$selectedIndex = [...$selectedIndex, $activeIndex];
			}
		} else {
			value = options[$activeIndex].val;
			$selectedIndex = $activeIndex;
		}
		dispatch('change');
	};

	const api = {
		groupID: group,
		multiselect: multi,
		activeIndex,
		setActive,
		selectedIndex,
		setSelected,
		isOpen,
		setIsOpen,
		registerOption,
		unregisterOption
	};

	setContext<ListboxAPI>(LISTBOX_CONTEXT, api);
</script>

<div {id} class={className} data-state={$isOpen ? 'open' : 'closed'} style:position="relative">
	<slot isOpen={$isOpen} />
</div>
