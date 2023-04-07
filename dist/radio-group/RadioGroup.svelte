<script>import { getID, LIB_PREFIX, RADIO_GROUP_CONTEXT } from '../utils/ui';
import { onDestroy, setContext, createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';
import DescriptionContext from '../description/DescriptionContext.svelte';
import LabelContext from '../label/LabelContext.svelte';
const dispatch = createEventDispatcher();
export { className as class };
let className = '';
export let value;
let activeValue = writable(value);
$: activeValue.set(value);
$: value = $activeValue;
let activeIndex = writable(0);
let options = [];
const role = 'radiogroup';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-${group}`;
function setFocus() {
    options[$activeIndex].node?.focus();
}
function registerOption(uuid, val) {
    options.push({ uuid, val });
    const i = options.findIndex((obj) => obj.uuid === uuid);
    if (val === $activeValue)
        activeIndex.set(i);
    return i;
}
function registerNode(uuid, node) {
    const index = options.findIndex((obj) => obj.uuid === uuid);
    let option = options[index];
    options[index] = { ...option, node };
}
function unregisterOption(uuid) {
    const i = options.findIndex((obj) => obj.uuid === uuid);
    options.splice(i, 1);
}
function handleClick(e) {
    const maxIndex = options.length - 1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if ($activeIndex >= maxIndex)
            $activeIndex = 0;
        else
            $activeIndex++;
    }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if ($activeIndex <= 0)
            $activeIndex = maxIndex;
        else
            $activeIndex--;
    }
    $activeValue = options[$activeIndex].val;
    setFocus();
    dispatch('change');
}
const api = {
    groupID: group,
    activeIndex,
    activeValue,
    registerOption,
    registerNode,
    unregisterOption,
    handleClick,
    setFocus
};
setContext(RADIO_GROUP_CONTEXT, api);
onDestroy(() => (options = []));
</script>

<LabelContext {group} let:labelledby>
	<DescriptionContext {group} let:describedby>
		<div
			{id}
			role="radiogroup"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			class={className}
		>
			<slot />
		</div>
	</DescriptionContext>
</LabelContext>
