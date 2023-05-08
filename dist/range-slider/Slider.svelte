<script>import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { SLIDER_GROUP_CONTEXT, SLIDER_CONTEXT } from '../utils/ui';
import { clamp } from '../utils/math';
export let size = 24;
export let sizeUnit = 'px';
export let thumbWidth = size;
export let value;
export let min = 0;
export let max = 10;
export let step = 1;
export let bigStep = 2;
export let disabled = false;
export { className as class };
const { groupID } = getContext(SLIDER_GROUP_CONTEXT);
let rangeContainer;
let dragging = false;
let className = '';
if (className === '')
    className = undefined;
let activeValue = writable(value);
let activeMin = writable(min);
let activeMax = writable(max);
$: activeValue.set(value);
$: setBounds(min, max);
setContext(SLIDER_CONTEXT, {
    groupID,
    activeValue,
    min: activeMin,
    max: activeMax,
    size: { height: size, width: thumbWidth, unit: sizeUnit }
});
function calculateValue(n) {
    const { left, width } = getElementWidth(rangeContainer);
    const nextValue = Number(min) +
        Math.round(((Number(max) - Number(min)) * ((n - left) / width)) / Number(step)) *
            Number(step);
    return clamp(nextValue, Number(min), Number(max));
}
function setValue(n) {
    value = n;
}
function setBounds(min, max) {
    activeMin.set(min);
    activeMax.set(max);
    if (value > Number(max))
        setValue(Number(max));
    else if (value < Number(min))
        setValue(Number(min));
}
function handleKeydown(event) {
    max = Number(max);
    min = Number(min);
    step = Number(step);
    bigStep = Number(bigStep);
    if (disabled)
        return;
    if ((event.shiftKey && event.key === 'ArrowRight') ||
        (event.shiftKey && event.key === 'ArrowUp') ||
        event.key === 'PageUp') {
        if (value <= max - bigStep)
            setValue(value + bigStep);
        else if (value > max - bigStep && value < max)
            setValue(max);
    }
    else if ((event.shiftKey && event.key === 'ArrowLeft') ||
        (event.shiftKey && event.key === 'ArrowDown') ||
        event.key === 'PageDown') {
        if (value >= min + bigStep)
            setValue(value - bigStep);
        else if (value < min + bigStep && value > min)
            setValue(min);
    }
    else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        if (value <= max - step)
            setValue(value + step);
        else if (value > max - step && value < max)
            setValue(max);
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        if (value >= min + step)
            setValue(value - step);
        else if (value < min + step && value > min)
            setValue(min);
    }
    else if (event.key === 'End' && value < max)
        setValue(max);
    else if (event.key === 'Home' && value > min)
        setValue(min);
}
function handleTouchstart(event) {
    if (disabled)
        return;
    handleTouchmove(event);
    window.addEventListener('touchmove', handleTouchmove);
    window.addEventListener('touchend', handleTouchend);
}
function handleTouchmove(event) {
    event.preventDefault();
    if (disabled)
        return;
    dragging = true;
    const mouseX = event.touches[0].clientX;
    setValue(calculateValue(mouseX));
}
function handleTouchend() {
    if (disabled)
        return;
    dragging = false;
    window.removeEventListener('touchmove', handleTouchmove);
    window.removeEventListener('touchend', handleTouchend);
}
function handleMousedown(event) {
    if (disabled)
        return;
    handleMousemove(event);
    dragging = true;
    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
}
function handleMousemove(event) {
    event.preventDefault();
    if (disabled)
        return;
    const mouseX = event.clientX;
    setValue(calculateValue(mouseX));
}
function handleMouseup(event) {
    if (disabled)
        return;
    handleMousemove(event);
    dragging = false;
    window.removeEventListener('mousemove', handleMousemove);
    window.removeEventListener('mouseup', handleMouseup);
}
function getElementWidth(el) {
    const { left, right } = el.getBoundingClientRect();
    const width = right - left;
    return { left, right, width };
}
</script>

<div
	class={className}
	style:position="relative"
	style:height={`${size}${sizeUnit}`}
	style:cursor="ew-resize"
	style:padding-left={`${thumbWidth / 2}${sizeUnit}`}
	style:padding-right={`${thumbWidth / 2}${sizeUnit}`}
	on:keydown={handleKeydown}
	on:touchstart={handleTouchstart}
	on:mousedown={handleMousedown}
>
	<div style:position="relative" bind:this={rangeContainer}>
		<slot {dragging} />
	</div>
</div>
