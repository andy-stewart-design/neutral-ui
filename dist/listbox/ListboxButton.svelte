<script>import { getContext } from 'svelte';
import { LIB_PREFIX, LISTBOX_CONTEXT } from '../utils/ui';
export { className as class };
let className = '';
const listboxAPI = getContext(LISTBOX_CONTEXT);
$: if (!listboxAPI) {
    throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
}
const { groupID, isOpen, setIsOpen } = listboxAPI;
const role = 'button';
const id = `${LIB_PREFIX}-${groupID}-${role}`;
const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
        setIsOpen(true);
};
</script>

<button
	{id}
	class={className}
	on:click={() => setIsOpen()}
	on:keydown={handleKeyDown}
	type="button"
	aria-haspopup="true"
	aria-expanded={$isOpen}
	data-state={$isOpen}
	aria-controls={`${LIB_PREFIX}-${groupID}-options`}
>
	<slot />
</button>
