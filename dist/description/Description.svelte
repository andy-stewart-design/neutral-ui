<script>import { getContext } from 'svelte';
import { getID, DESCR_CONTEXT_NAME, LIB_PREFIX } from '../utils/ui';
export { className as class };
let className;
const role = 'description';
const contextProvider = getContext(DESCR_CONTEXT_NAME);
const uuid = getID();
const id = `${LIB_PREFIX}-${contextProvider.group}-${role}`;
if (!contextProvider) {
    throw new Error('You used a <Description /> component, but it is not inside a relevant parent.');
}
contextProvider.register(uuid);
</script>

<div {id} class={className}>
	<slot />
</div>
