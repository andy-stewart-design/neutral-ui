<script lang="ts">
	import { getContext } from 'svelte';
	//@ts-expect-error
	const { ariaID, updateValue, handleKeydown } = getContext('switchGroupAPI');
	const id = `neutral-switch-${ariaID}-label`;
</script>

<label
	{id}
	for={`headlessui-switch-${ariaID}`}
	on:click={updateValue}
	on:keydown={(e) => handleKeydown(e)}
	tabindex="-1"
>
	<slot />
</label>
