<script lang="ts">
	import { getContext } from 'svelte';
	import type { SwitchAPI } from './types';

	const { ariaID, updateValue, handleKeydown } = getContext<SwitchAPI>('switchGroupAPI');
	const id = `neutral-switch-${ariaID}-label`;
</script>

<label
	{id}
	for={`neutral-switch-${ariaID}`}
	on:click={updateValue}
	on:keydown={(e) => handleKeydown(e)}
	tabindex="-1"
>
	<slot />
</label>
