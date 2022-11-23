<script lang="ts">
	import { setContext } from 'svelte';
	import type { SwitchAPI } from './types';

	export let value: boolean;
	const ariaID = crypto.randomUUID().split('-').pop()!;
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

	setContext<SwitchAPI>('switchGroupAPI', { ariaID, updateValue, handleKeydown });
</script>

<slot name="start" />
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
<slot name="end" />
