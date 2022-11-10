<script lang="ts">
	import { getContext } from 'svelte';
	import type { API } from './types';

	export let visible = false;

	const { ariaID } = getContext<API>('radioGroupAPI');
</script>

<label
	id={`radiogroup-${ariaID}-label`}
	for={`radiogroup-${ariaID}`}
	class={`${$$props.class}`}
	class:sr-only={!visible}
	role="none"
>
	<slot />
</label>

<style scoped>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
