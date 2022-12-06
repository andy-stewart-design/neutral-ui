<script lang="ts">
	import { getContext } from 'svelte';
	import type { SwitchAPI } from './types';

	export { className as class };
	let className = '';

	const { groupID } = getContext<SwitchAPI>('switchGroupAPI');
	const role = 'thumb';
	const id = `${groupID}-${role}`;
</script>

<div {id} class={className} aria-hidden="true">
	<slot />
</div>
