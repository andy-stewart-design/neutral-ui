<script>import { setContext } from 'svelte';
import DescriptionContext from '../description/DescriptionContext.svelte';
import LabelContext from '../label/LabelContext.svelte';
import { getID, LIB_PREFIX, SWITCH_CONTEXT } from '../utils/ui';
export { className as class };
let className = '';
const role = 'switch';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-switchgroup-${uuid}`;
setContext(SWITCH_CONTEXT, { groupID: group });
</script>

<LabelContext {group} let:labelledby>
	<DescriptionContext {group} let:describedby>
		<div {id} aria-labelledby={labelledby} aria-describedby={describedby} class={className}>
			<slot />
		</div>
	</DescriptionContext>
</LabelContext>
