<script lang="ts">
	import { getContext } from 'svelte';
	import type { NumberAPI, SpinbuttonRole } from './types';

	export { className as class };
	let className: string | undefined = '';
	if (className === '') className = undefined;

	const { groupID } = getContext<NumberAPI>('NumberAPI');
	const role: SpinbuttonRole = 'description';
	const id = `${groupID}-${role}`;

	const attributes = { id };
</script>

<div {...attributes} class={className}>
	<slot />
</div>
