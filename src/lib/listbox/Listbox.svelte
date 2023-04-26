<script lang="ts">
	import { getID, LIB_PREFIX, LISTBOX_CONTEXT } from '$lib/utils/ui';
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ListboxAPI, Option, Value } from './types';

	export { className as class };
	let className: string = '';

	const role = 'listbox';
	const uuid = getID();
	const group = `${role}-${uuid}`;
	const id = `${LIB_PREFIX}-${group}`;

	const isOpen = writable(false);
	const activeOption = writable(0);
	let options: Option[] = [];
	$: len = options.length - 1;

	$: console.log('active option:', $activeOption);
	$: console.log('options:', options);

	const registerOption = (uuid: string, val: Value) => {
		options = [...options, { uuid, val }];
		const i = options.findIndex((obj) => obj.uuid === uuid);
		// if (val === $activeValue) activeIndex.set(i);
		return i;
	};

	const unregisterOption = (uuid: string) => {
		const i = options.findIndex((obj) => obj.uuid === uuid);
		options.splice(i, 1);
	};

	const incActiveOption = () => ($activeOption >= len ? ($activeOption = 0) : ($activeOption += 1));
	const decActiveOption = () => ($activeOption <= 0 ? ($activeOption = len) : ($activeOption -= 1));

	const setIsOpen = (b?: boolean) => {
		if (b) $isOpen = b;
		else $isOpen = !$isOpen;
	};

	const api = {
		groupID: group,
		activeOption,
		isOpen,
		setIsOpen,
		incActiveOption,
		decActiveOption,
		registerOption,
		unregisterOption
	};

	setContext<ListboxAPI>(LISTBOX_CONTEXT, api);
</script>

<div {id} class={className} style:position="relative">
	<slot isOpen={$isOpen} />
</div>
