<script>import { setAria } from '../actions/setAria';
import { getContext, onMount } from 'svelte';
const { groupID, activeIndex, activeValue, registerElement, registerNode, unregisterElement, handleClick } = getContext('radioGroupAPI');
export let value;
export let index = -1;
export { className as class };
let className = '';
const role = 'option';
const uuid = crypto.randomUUID();
let optionRef;
if (index < 0)
    index = registerElement(role, uuid, value);
else
    registerElement(role, uuid, value);
const id = `${groupID}-${role}-${index}`;
$: checked = $activeValue === value;
function setActive(i, v) {
    $activeIndex = i;
    $activeValue = v;
}
onMount(() => {
    registerNode(uuid, optionRef);
    return () => {
        unregisterElement(role, uuid);
    };
});
</script>

<div
	bind:this={optionRef}
	on:click|preventDefault={() => setActive(index, value)}
	on:keydown={handleClick}
	use:setAria={{ id }}
	{id}
	role="radio"
	aria-checked={checked}
	tabindex={checked ? 0 : -1}
	class={className}
	style:display="inline-block"
	style:cursor="pointer"
>
	<slot {checked} />
</div>
