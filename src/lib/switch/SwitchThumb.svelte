<script lang="ts">
	import { getContext } from 'svelte';
	import type { SwitchAPI } from './types';
	import { LIB_PREFIX, SWITCH_CONTEXT } from '$lib/utils/ui';

	export { className as class };
	let className = '';

	const switchGroupContext = getContext<SwitchAPI>(SWITCH_CONTEXT);

	if (!switchGroupContext) {
		throw new Error(
			'You used a <SwitchThumb /> component, but it is not inside a relevant parent.'
		);
	}

	const role = 'thumb';
	const id = `${LIB_PREFIX}-${switchGroupContext.groupID}-${role}`;
</script>

<div {id} class={className} aria-hidden="true">
	<slot />
</div>
