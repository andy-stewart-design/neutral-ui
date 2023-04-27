<script lang="ts">
	import { getContext } from 'svelte';
	import { LIB_PREFIX, LISTBOX_CONTEXT } from '$lib/utils/ui';
	import type { AriaOrientation, ListboxAPI } from './types';
	import type { Action } from 'svelte/action';

	type CallbackFunction = (any?: any) => unknown;

	export { className as class };
	let className: string = '';

	export let orientation: AriaOrientation = 'vertical';

	const listboxAPI = getContext<ListboxAPI>(LISTBOX_CONTEXT);
	const { groupID, multiselect, isOpen, setIsOpen, setSelected, setActive } = listboxAPI;

	$: if (!listboxAPI) {
		throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
	}

	const role = 'options';
	const id = `${LIB_PREFIX}-${groupID}-${role}`;

	const handleKeyDown = (e: KeyboardEvent) => {
		if (!$isOpen) return;
		if (e.key === 'Escape') {
			setIsOpen();
		} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
			setActive('dec');
		} else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
			setActive('inc');
		} else if (e.key === 'Enter' || e.key === ' ') {
			setSelected();
			!multiselect && setIsOpen(false);
		}
	};

	const focusOnMount: Action<HTMLElement, CallbackFunction> = (node, callbackFunction) => {
		node.focus();
		return;
	};

	const clickOutside: Action<HTMLElement, CallbackFunction> = (element, callbackFunction) => {
		const handleClick = ({ target }: MouseEvent) => {
			if (!element.contains(target as Node)) {
				callbackFunction && callbackFunction();
			}
		};

		setTimeout(() => window.addEventListener('click', handleClick), 0);

		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				window.removeEventListener('click', handleClick);
			}
		};
	};

	const handleClickOutside = () => setIsOpen(false);
</script>

{#if $isOpen}
	<ul
		{id}
		class={className}
		role="listbox"
		on:keydown|preventDefault={handleKeyDown}
		aria-labelledby={`${groupID}-button`}
		aria-orientation={orientation}
		tabindex="0"
		data-state={$isOpen ? 'open' : 'close'}
		style:z-index="1000"
		use:focusOnMount
		use:clickOutside={handleClickOutside}
	>
		<slot />
	</ul>
{/if}
