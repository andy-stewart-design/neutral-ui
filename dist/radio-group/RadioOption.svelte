<script>import { getContext, onMount } from 'svelte';
import { getID, LIB_PREFIX, RADIO_GROUP_CONTEXT } from '../utils/ui';
// import DescriptionContext from '../description/DescriptionContext.svelte';
import LabelContext from '../label/LabelContext.svelte';
const radioGroupAPI = getContext(RADIO_GROUP_CONTEXT);
const { groupID, activeIndex, activeValue } = radioGroupAPI;
$: if (!radioGroupAPI) {
    throw new Error('<Radio.Option /> elements must be used inside a <Radio.Group />.');
}
export let value;
export let index = -1;
export { className as class };
let className = '';
const role = 'option';
let optionRef;
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-${groupID}-${group}`;
// const id = `${RADIO_GROUP_CONTEXT}-${groupID}-${role}-${uuid}`;
if (index < 0)
    index = radioGroupAPI.registerOption(uuid, value);
else
    radioGroupAPI.registerOption(uuid, value);
$: checked = $activeValue === value;
function setActive(i, v) {
    $activeIndex = i;
    $activeValue = v;
}
onMount(() => {
    radioGroupAPI.registerNode(uuid, optionRef);
    return () => radioGroupAPI.unregisterOption(uuid);
});
</script>

<!-- <DescriptionContext let:describedby> -->
<LabelContext {group} let:labelledby>
	<div
		bind:this={optionRef}
		on:click|preventDefault={() => setActive(index, value)}
		on:keydown={radioGroupAPI.handleClick}
		{id}
		role="radio"
		aria-checked={checked}
		tabindex={checked ? 0 : -1}
		aria-labelledby={labelledby}
		class={className}
		style:cursor="pointer"
	>
		<slot {checked} />
	</div>
</LabelContext>
<!-- </DescriptionContext> -->
<!-- aria-describedby={describedby} -->
