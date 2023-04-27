<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import DescriptionContext from '../description/DescriptionContext.svelte';
import LabelContext from '../label/LabelContext.svelte';
import { LIB_PREFIX, SLIDER_CONTEXT, getID } from '../utils/ui';
import { map, clamp } from '../utils/math';
import { getElementWidth } from '../utils/getElementWidth';
export let value;
export let min;
export let max;
export let step;
export let bigStep;
export let disabled = false;
export { className as class };
let isDisabled = writable(disabled);
$: isDisabled.set(disabled);
$: disabled = $isDisabled;
let className = '';
if (className === '')
    className = undefined;
let rangeContainer;
const role = 'slider';
const uuid = getID();
const group = `${role}-${uuid}`;
const id = `${LIB_PREFIX}-rangeslider-${uuid}`;
const defaultValue = value;
let posX = writable(map(value, min, max, 0, 100));
let dragging = false;
function resetValue() {
    if (disabled)
        return;
    value = defaultValue;
    posX.set(map(value, min, max, 0, 100));
}
function handleKeydown(event) {
    if (disabled)
        return;
    if ((event.shiftKey && event.key === 'ArrowRight') ||
        (event.shiftKey && event.key === 'ArrowUp') ||
        event.key === 'PageUp') {
        if (value <= max - bigStep)
            value += bigStep;
        else if (value > max - bigStep && value < max)
            value = max;
    }
    else if ((event.shiftKey && event.key === 'ArrowLeft') ||
        (event.shiftKey && event.key === 'ArrowDown') ||
        event.key === 'PageDown') {
        if (value >= min + bigStep)
            value -= bigStep;
        else if (value < min + bigStep && value > min)
            value = min;
    }
    else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        if (value <= max - step)
            value += step;
        else if (value > max - step && value < max)
            value = max;
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        if (value >= min + step)
            value -= step;
        else if (value < min + step && value > min)
            value = min;
    }
    else if (event.key === 'End' && value < max)
        value = max;
    else if (event.key === 'Home' && value > min)
        value = min;
    posX.set(map(value, min, max, 0, 100));
}
function calculateValue(n) {
    const { left, width } = getElementWidth(rangeContainer);
    const nextValue = min + Math.round(((max - min) * ((n - left) / width)) / step) * step;
    return clamp(nextValue, min, max);
}
function handleTouchmove(event) {
    event.preventDefault();
    if (disabled)
        return;
    dragging = true;
    const mouseX = event.touches[0].clientX;
    value = calculateValue(mouseX);
    posX.set(map(value, min, max, 0, 100));
}
function handleTouchstart(event) {
    if (disabled)
        return;
    handleTouchmove(event);
    window.addEventListener('touchmove', handleTouchmove);
    window.addEventListener('touchend', handleTouchend);
}
function handleTouchend(event) {
    if (disabled)
        return;
    dragging = false;
    window.removeEventListener('touchmove', handleTouchmove);
    window.removeEventListener('touchend', handleTouchend);
}
function handleMousemove(event) {
    event.preventDefault();
    if (disabled)
        return;
    const mouseX = event.clientX;
    value = calculateValue(mouseX);
    posX.set(map(value, min, max, 0, 100));
}
function handleMousedown(event) {
    if (disabled)
        return;
    handleMousemove(event);
    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
}
function handleMouseup(event) {
    if (disabled)
        return;
    handleMousemove(event);
    window.removeEventListener('mousemove', handleMousemove);
    window.removeEventListener('mouseup', handleMouseup);
}
setContext(SLIDER_CONTEXT, {
    groupID: group,
    disabled: isDisabled,
    value,
    min,
    max,
    posX,
    handleKeydown,
    handleMousedown,
    handleMousemove,
    handleTouchstart
});
</script>

<LabelContext {group} let:labelledby>
	<DescriptionContext {group} let:describedby>
		<div
			{id}
			bind:this={rangeContainer}
			role="radiogroup"
			aria-labelledby={labelledby}
			aria-describedby={describedby}
			class={className}
		>
			<slot {resetValue} {dragging} />
		</div>
	</DescriptionContext>
</LabelContext>
