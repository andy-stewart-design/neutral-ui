<script>export { className as class };
let className = '';
import { getContext } from 'svelte';
import { SLIDER_CONTEXT } from '../utils/ui';
const { size } = getContext(SLIDER_CONTEXT);
let offset = size.width / 2;
</script>

<div
	class={className}
	style:position="absolute"
	style:top="50%"
	style:left={`-${offset}${size.unit}`}
	style:right={`-${offset}${size.unit}`}
	style:translate="0 -50%"
>
	<slot />
</div>
