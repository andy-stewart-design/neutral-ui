<script>import { getContext } from 'svelte';
import { LIB_PREFIX, SLIDER_CONTEXT } from '../utils/ui';
export { className as class };
let className = '';
const { groupID, activeValue, min, max, size } = getContext(SLIDER_CONTEXT);
$: posX = map($activeValue, Number($min), Number($max), 0, 100);
function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
</script>

<!-- <div style:position="absolute" style:top="50%" style:left="0" style:width="100%">
	<div class="relative w-full">
		<div
			id={`${LIB_PREFIX}-${groupID}`}
			class={className}
			style:position="absolute"
			style:top="50%"
			style:left={`${posX}%`}
			style:translate="-50% -50%"
			style:width={`${size}px`}
			style:height={`${size}px`}
			role="slider"
			tabindex="0"
			aria-valuenow={$activeValue}
			aria-valuemin={Number($min)}
			aria-valuemax={Number($max)}
			aria-orientation="horizontal"
		/>
	</div>
</div> -->
<div
	id={`${LIB_PREFIX}-${groupID}`}
	class={className}
	style:position="relative"
	style:width={`${size.width}${size.unit}`}
	style:height={`${size.height}${size.unit}`}
	style:margin-left={`${posX}%`}
	style:translate="-50% 0"
	role="slider"
	tabindex="0"
	aria-valuenow={$activeValue}
	aria-valuemin={Number($min)}
	aria-valuemax={Number($max)}
	aria-orientation="horizontal"
/>
