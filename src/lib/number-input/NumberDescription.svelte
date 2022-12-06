<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI, SpinbuttonRole } from './types';

	export { className as class };
	let className = '';

	const { parentID, register } = getContext<NumberAPI>('NumberAPI');
	const role: SpinbuttonRole = 'description';
	const id = `${parentID}-${role}`;
	register(role, id);

	const attributes = { id };
</script>

<div {...attributes} class={className}>
	<slot />
</div>
