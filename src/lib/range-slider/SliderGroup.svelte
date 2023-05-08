<script lang="ts">
	// TODO: Finish refactor of API

	import { setContext } from 'svelte';
	import DescriptionContext from '../description/DescriptionContext.svelte';
	import LabelContext from '../label/LabelContext.svelte';
	import { LIB_PREFIX, SLIDER_GROUP_CONTEXT, getID } from '$lib/utils/ui';
	import type { RangeSliderGroupAPI } from './types';

	export { className as class };

	let className: string | undefined = '';
	if (className === '') className = undefined;

	const role = 'slider';
	const uuid = getID();
	const group = `${role}-${uuid}`;
	const id = `${LIB_PREFIX}-${group}-group`;

	setContext<RangeSliderGroupAPI>(SLIDER_GROUP_CONTEXT, { groupID: group });
</script>

<div class={className}>
	<LabelContext {group}>
		<DescriptionContext {group}>
			<slot />
		</DescriptionContext>
	</LabelContext>
</div>
