<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
const { parentID, focusThumb } = getContext('rangeSliderAPI');
const role = 'label';
const id = `${parentID}-${role}`;
// register(role, id);
const attributes = { id, for: `${parentID}-thumb` };
</script>

<label {...attributes} class={className} on:click|preventDefault={focusThumb}>
	<slot />
</label>
