<script>import { getContext } from 'svelte';
import { LIB_PREFIX, LISTBOX_CONTEXT } from '../utils/ui';
export { className as class };
let className = '';
export let orientation = 'vertical';
let node;
let listener = false;
const listboxAPI = getContext(LISTBOX_CONTEXT);
const { groupID, multiselect, isOpen, setIsOpen, setSelected, setActive } = listboxAPI;
$: if (!listboxAPI) {
    throw new Error('<ListboxButton /> elements must be used inside a <Listbox />.');
}
const role = 'options';
const id = `${LIB_PREFIX}-${groupID}-${role}`;
const handleKeyDown = (e) => {
    if (!$isOpen)
        return;
    if (e.key === 'Escape') {
        setIsOpen();
    }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActive('dec');
    }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActive('inc');
    }
    else if (e.key === 'Enter' || e.key === ' ') {
        setSelected();
        !multiselect && setIsOpen(false);
    }
};
$: handleChange($isOpen);
const handleChange = (isOpen) => {
    if (isOpen) {
        setTimeout(() => {
            node.focus();
            window.addEventListener('click', handleClick);
            listener = true;
        }, 25);
    }
    else if (listener) {
        window.removeEventListener('click', handleClick);
        listener = false;
    }
};
const handleClick = ({ target }) => {
    if (!node.contains(target)) {
        handleClickOutside();
    }
};
const handleClickOutside = () => setIsOpen(false);
// const focusOnMount: Action<HTMLElement, CallbackFunction> = (node) => {
// 	node.focus();
// 	return;
// };
// const clickOutside: Action<HTMLElement, CallbackFunction> = (element, callbackFunction) => {
// 	const handleClick = ({ target }: MouseEvent) => {
// 		if (!element.contains(target as Node)) {
// 			callbackFunction && callbackFunction();
// 		}
// 	};
// 	setTimeout(() => window.addEventListener('click', handleClick), 0);
// 	return {
// 		update(newCallbackFunction) {
// 			callbackFunction = newCallbackFunction;
// 		},
// 		destroy() {
// 			window.removeEventListener('click', handleClick);
// 		}
// 	};
// };
</script>

<!-- {#if $isOpen} -->
<ul
	{id}
	bind:this={node}
	class={className}
	role="listbox"
	on:keydown|preventDefault={handleKeyDown}
	aria-labelledby={`${groupID}-button`}
	aria-orientation={orientation}
	tabindex="0"
	data-state={$isOpen ? 'open' : 'closed'}
	style:visibility={$isOpen ? 'visible' : 'hidden'}
	style:z-index="1000"
>
	<slot />
</ul>
<!-- {/if} -->
<!-- use:focusOnMount -->
<!-- use:clickOutside={handleClickOutside} -->
