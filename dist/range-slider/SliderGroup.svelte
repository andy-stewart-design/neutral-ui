<script>// TODO: Finish refactor of API
import { setContext } from 'svelte';
import DescriptionContext from '../description/DescriptionContext.svelte';
import LabelContext from '../label/LabelContext.svelte';
import { LIB_PREFIX, SLIDER_GROUP_CONTEXT, getID } from '../utils/ui';
export { className as class };
let className = '';
if (className === '')
    className = undefined;
const role = 'slider';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-${group}-group`;
setContext(SLIDER_GROUP_CONTEXT, { groupID: group });
</script>

<div class={className}>
	<LabelContext {group}>
		<DescriptionContext {group}>
			<slot />
		</DescriptionContext>
	</LabelContext>
</div>
