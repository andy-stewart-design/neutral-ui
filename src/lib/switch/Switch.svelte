<script lang="ts">
	import { setContext } from 'svelte';

	export let value: boolean;
	const ariaID = crypto.randomUUID().split('-').pop() as string;
	const id = `neutral-switch-${ariaID}`;

	function updateValue() {
		value = !value;
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			console.log('working');
		}
		updateValue();
	}

	setContext('switchGroupAPI', { ariaID, updateValue, handleKeydown });
</script>

<button
	on:click={updateValue}
	{id}
	role="switch"
	class={`${$$props.class}`}
	type="button"
	tabindex="0"
	aria-checked={value}
>
	<slot />
</button>
<slot name="label" />
