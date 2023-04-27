<script>import { getContext, onDestroy } from 'svelte';
import { getID, LIB_PREFIX, LISTBOX_CONTEXT } from '../utils/ui';
export let value;
export let index = -1;
export { className as class };
let className = '';
const listboxAPI = getContext(LISTBOX_CONTEXT);
$: if (!listboxAPI) {
    throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
}
const { groupID, multiselect, activeIndex, selectedIndex, setSelected, registerOption, unregisterOption, setIsOpen } = listboxAPI;
const role = 'option';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-${groupID}-${group}`;
if (index < 0)
    index = registerOption(uuid, value);
else
    registerOption(uuid, value);
$: selected =
    multiselect && typeof $selectedIndex === 'object'
        ? $selectedIndex.includes(index)
        : $selectedIndex === index;
const handleClick = () => {
    $activeIndex = index;
    setSelected();
    !multiselect && setIsOpen(false);
};
onDestroy(() => unregisterOption(uuid));
</script>

<li
	{id}
	class={className}
	role="option"
	tabindex="-1"
	on:click={handleClick}
	on:keydown={() => {}}
	aria-selected="true"
	data-active={$activeIndex === index}
	data-selected={selected}
	style:cursor="pointer"
>
	<slot />
</li>
