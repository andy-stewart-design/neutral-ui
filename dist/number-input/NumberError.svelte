<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
// const { parentID, register } = getContext<NumberAPI>('NumberAPI');
const role = 'error';
// const id = `${parentID}-${role}`;
// register(role, id);
// const attributes = { id };
</script>

<div class={className}>
	<slot />
</div>

<!-- {...attributes} -->
