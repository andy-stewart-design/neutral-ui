<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import { getID, LIB_PREFIX, LISTBOX_CONTEXT } from '$lib/utils/ui';
	import type { ListboxAPI, Value } from './types';

	export let value: Value;
	export let index: number = -1;
	export { className as class };
	let className: string = '';

	const listboxAPI = getContext<ListboxAPI>(LISTBOX_CONTEXT);
	$: if (!listboxAPI) {
		throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
	}
	const { groupID, activeOption, isOpen, registerOption, unregisterOption, setIsOpen } = listboxAPI;

	const role = 'option';
	const uuid = getID();
	const group = `${role}-${uuid}`;
	const id = `${LIB_PREFIX}-${groupID}-${group}`;

	if (index < 0) index = registerOption(uuid, value);
	else registerOption(uuid, value);

	onDestroy(() => unregisterOption(uuid));
</script>

<li
	{id}
	class={className}
	role="option"
	tabindex="-1"
	aria-selected="true"
	data-selected={$activeOption === index}
	style:cursor="pointer"
>
	<slot />
</li>
