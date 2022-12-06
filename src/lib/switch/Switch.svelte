<script lang="ts">
	import { setContext } from 'svelte';
	import type { SwitchAPI } from './types';

	export let value: boolean;
	export { className as class };

	let className = '';
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

	setContext<SwitchAPI>('switchGroupAPI', { groupID: id, updateValue, handleKeydown });
</script>

<slot name="start" />
<button
	on:click|preventDefault={updateValue}
	{id}
	role="switch"
	class={className}
	type="button"
	tabindex="0"
	aria-checked={value}
	aria-labelledby={`${id}-label`}
>
	<slot />
</button>
<slot name="end" />
