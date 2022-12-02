<script lang="ts">
	import { setContext } from 'svelte';
	import type { SwitchAPI } from './types';

	export let value: boolean;
	const ariaID = crypto.randomUUID().split('-').pop()!;
	const id = `nui-switch-${ariaID}`;

	function updateValue() {
		value = !value;
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
		}
		updateValue();
	}

	setContext<SwitchAPI>('switchGroupAPI', { ariaID, updateValue, handleKeydown });
</script>

<slot name="start" />
<button
	on:click|preventDefault={updateValue}
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
