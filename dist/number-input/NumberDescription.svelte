<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
if (className === '')
    className = undefined;
const { groupID } = getContext('NumberAPI');
const role = 'description';
const id = `${groupID}-${role}`;
const attributes = { id };
</script>

<div {...attributes} class={className}>
	<slot />
</div>
