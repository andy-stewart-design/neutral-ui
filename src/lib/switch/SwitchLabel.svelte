<script lang="ts">
	import { getContext } from 'svelte';
	import type { SwitchAPI } from './types';

	const { ariaID } = getContext<SwitchAPI>('switchGroupAPI');
	const id = `nui-switch-${ariaID}-label`;
</script>

<label {id} for={`nui-switch-${ariaID}`} tabindex="-1">
	<slot />
</label>
