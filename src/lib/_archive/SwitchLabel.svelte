<script lang="ts">
	import { getContext } from 'svelte';
	import type { SwitchAPI } from '../switch/types';

	export { className as class };
	let className = '';

	const { groupID } = getContext<SwitchAPI>('switchGroupAPI');
	const id = `${groupID}-label`;
</script>

<label {id} for={groupID} class={className} tabindex="-1">
	<slot />
</label>
