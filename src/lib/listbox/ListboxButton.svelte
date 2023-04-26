<script lang="ts">
	import { getContext } from 'svelte';
	import { LIB_PREFIX, LISTBOX_CONTEXT } from '$lib/utils/ui';
	import type { ListboxAPI } from './types';

	export { className as class };
	let className: string = '';

	const listboxAPI = getContext<ListboxAPI>(LISTBOX_CONTEXT);
	const { groupID, isOpen, setIsOpen } = listboxAPI;

	$: if (!listboxAPI) {
		throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
	}

	const role = 'button';
	const id = `${LIB_PREFIX}-${groupID}-${role}`;
</script>

<button
	{id}
	class={className}
	on:click={() => setIsOpen()}
	type="button"
	aria-haspopup="true"
	aria-expanded={$isOpen}
	data-state={$isOpen}
	aria-controls={`${LIB_PREFIX}-${groupID}-options`}
>
	<slot />
</button>
