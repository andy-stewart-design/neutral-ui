<script>// TODO: Clean up components
// TODO: Allow Scrolling (V2)
import { getID, LIB_PREFIX, LISTBOX_CONTEXT } from '../utils/ui';
import { setContext, createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';
import { error } from '@sveltejs/kit';
export let value;
export let multiple = false;
export { className as class };
let className = '';
if (multiple && typeof value !== 'object') {
    throw error(500, {
        message: 'When using a multiselect listbox, you must pass an array of strings or numbers as the listbox value.'
    });
}
else if (!multiple && typeof value === 'object') {
    throw error(500, {
        message: 'When using a single select listbox, you must pass an string or number as the listbox value.'
    });
}
const role = 'listbox';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-${group}`;
const isOpen = writable(false);
const activeIndex = writable(0);
const selectedIndex = writable(multiple ? [] : 0);
let options = [];
$: len = options.length - 1;
const dispatch = createEventDispatcher();
const registerOption = (uuid, val) => {
    options = [...options, { uuid, val }];
    const i = options.findIndex((obj) => obj.uuid === uuid);
    if (multiple && typeof value === 'object' && typeof $selectedIndex === 'object') {
        if (value.includes(val) && !$selectedIndex.includes(i)) {
            $selectedIndex = [...$selectedIndex, i];
        }
    }
    else {
        if (value === val) {
            activeIndex.set(i);
            selectedIndex.set(i);
        }
    }
    return i;
};
const unregisterOption = (uuid) => {
    const i = options.findIndex((obj) => obj.uuid === uuid);
    options.splice(i, 1);
};
const setActive = (type) => {
    if (type === 'dec') {
        $activeIndex <= 0 ? ($activeIndex = len) : ($activeIndex -= 1);
    }
    else if (type === 'inc') {
        $activeIndex >= len ? ($activeIndex = 0) : ($activeIndex += 1);
    }
};
const setIsOpen = (b) => {
    if (b)
        $isOpen = b;
    else
        $isOpen = !$isOpen;
    const btn = document.querySelector(`#${LIB_PREFIX}-${group}-button`);
    if (!$isOpen && btn instanceof HTMLElement) {
        btn.focus();
    }
};
const setSelected = () => {
    if (multiple && typeof value === 'object' && typeof $selectedIndex === 'object') {
        const nextValue = options[$activeIndex].val;
        if (value.includes(nextValue)) {
            value = value.filter((v) => v !== nextValue);
            $selectedIndex = $selectedIndex.filter((i) => i !== $activeIndex);
        }
        else {
            value = [...value, nextValue];
            $selectedIndex = [...$selectedIndex, $activeIndex];
        }
    }
    else {
        value = options[$activeIndex].val;
        $selectedIndex = $activeIndex;
    }
    dispatch('change');
};
const api = {
    groupID: group,
    multiselect: multiple,
    activeIndex,
    setActive,
    selectedIndex,
    setSelected,
    isOpen,
    setIsOpen,
    registerOption,
    unregisterOption
};
setContext(LISTBOX_CONTEXT, api);
</script>

<div {id} class={className} style:position="relative">
	<div>Active: {$activeIndex} Selected: {$selectedIndex}</div>
	<slot isOpen={$isOpen} />
</div>
