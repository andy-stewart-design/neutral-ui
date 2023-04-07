<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
const { parentID, posX } = getContext('rangeSliderAPI');
const role = 'progress';
const id = `${parentID}-${role}`;
</script>

<div
	{id}
	class={className}
	style:position="absolute"
	style:translate="0% -50%"
	style:width={`${$posX}%`}
	style:transform-origin="left"
	style:pointer-events="none"
	aria-hidden="true"
/>
<!-- style={`clip-path: polygon(0 0, ${$normalValue}% 0, ${$normalValue}% 100%, 0 100%);`} -->
