<script>import { getContext } from 'svelte';
import { LIB_PREFIX, NUMBER_GROUP_CONTEXT } from '../utils/ui';
const switchGroupContext = getContext(NUMBER_GROUP_CONTEXT);
const { activeValue, groupID, step, bigStep, clampValue } = switchGroupContext;
export { className as class };
let className = '';
if (className === '')
    className = undefined;
function incValue(e) {
    if ($activeValue === undefined)
        $activeValue = 0;
    if (e.shiftKey)
        $activeValue += Number(bigStep);
    else
        $activeValue += Number(step);
    clampValue();
}
const id = `${LIB_PREFIX}-${groupID}-increment`;
</script>

<div role="button" {id} class={className} on:click={incValue} aria-hidden>
	<slot />
</div>
