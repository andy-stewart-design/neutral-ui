<script>import { getContext } from 'svelte';
export { className as class };
let className = '';
const { parentID, value, min, max, posX, handleKeydown, handleMousedown, handleTouchstart, disabled } = getContext('rangeSliderAPI');
const role = 'thumb';
const id = `${parentID}-${role}`;
</script>

<div
	{id}
	class={className}
	style:position="absolute"
	style:translate="-50% -50%"
	style:left={`${$posX}%`}
	style:cursor="inherit"
	role="slider"
	tabindex="0"
	aria-valuemax={value}
	aria-valuemin={min}
	aria-valuenow={max}
	aria-disabled={disabled}
	aria-labelledby={`${parentID}-label`}
	aria-orientation="horizontal"
/>
