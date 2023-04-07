<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
const { groupID } = getContext('switchGroupAPI');
const id = `${groupID}-label`;
</script>

<label {id} for={groupID} class={className} tabindex="-1">
	<slot />
</label>
