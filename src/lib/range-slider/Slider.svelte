<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { SLIDER_GROUP_CONTEXT, SLIDER_CONTEXT } from '$lib/utils/ui';
	import { clamp } from '$lib/utils/math';
	import type { RangeSliderAPI, RangeSliderGroupAPI } from './types';

	export let size = 24;
	export let sizeUnit: 'px' | '%' | 'rem' | 'em' = 'px';
	export let thumbWidth = size;

	export let value: number;
	export let min: string | number = 0;
	export let max: string | number = 10;
	export let step: string | number = 1;
	export let bigStep: string | number = 2;
	export let disabled = false;
	export { className as class };

	const { groupID } = getContext<RangeSliderGroupAPI>(SLIDER_GROUP_CONTEXT);
	let rangeContainer: HTMLDivElement;
	let dragging = false;

	let className: string | undefined = '';
	if (className === '') className = undefined;

	let activeValue = writable(value);
	let activeMin = writable(min);
	let activeMax = writable(max);

	$: setBounds(min, max);
	$: activeValue.set(value);

	setContext<RangeSliderAPI>(SLIDER_CONTEXT, {
		groupID,
		activeValue,
		min: activeMin,
		max: activeMax,
		size: { height: size, width: thumbWidth, unit: sizeUnit }
	});

	function calculateValue(n: number) {
		const { left, width } = getElementWidth(rangeContainer);
		const nextValue =
			Number(min) +
			Math.round(((Number(max) - Number(min)) * ((n - left) / width)) / Number(step)) *
				Number(step);
		return clamp(nextValue, Number(min), Number(max));
	}

	function setValue(n: number) {
		value = n;
	}

	function setBounds(min: string | number, max: string | number) {
		activeMin.set(min);
		activeMax.set(max);
		if (value > Number(max)) setValue(Number(max));
		else if (value < Number(min)) setValue(Number(min));
	}

	function handleKeydown(event: KeyboardEvent) {
		max = Number(max);
		min = Number(min);
		step = Number(step);
		bigStep = Number(bigStep);
		if (disabled) return;
		if (
			(event.shiftKey && event.key === 'ArrowRight') ||
			(event.shiftKey && event.key === 'ArrowUp') ||
			event.key === 'PageUp'
		) {
			if (value <= max - bigStep) setValue(value + bigStep);
			else if (value > max - bigStep && value < max) setValue(max);
		} else if (
			(event.shiftKey && event.key === 'ArrowLeft') ||
			(event.shiftKey && event.key === 'ArrowDown') ||
			event.key === 'PageDown'
		) {
			if (value >= min + bigStep) setValue(value - bigStep);
			else if (value < min + bigStep && value > min) setValue(min);
		} else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
			if (value <= max - step) setValue(value + step);
			else if (value > max - step && value < max) setValue(max);
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
			if (value >= min + step) setValue(value - step);
			else if (value < min + step && value > min) setValue(min);
		} else if (event.key === 'End' && value < max) setValue(max);
		else if (event.key === 'Home' && value > min) setValue(min);
	}

	function handleTouchstart(event: TouchEvent) {
		if (disabled) return;
		handleTouchmove(event);
		window.addEventListener('touchmove', handleTouchmove);
		window.addEventListener('touchend', handleTouchend);
	}

	function handleTouchmove(event: TouchEvent) {
		event.preventDefault();
		if (disabled) return;
		dragging = true;
		const mouseX = event.touches[0].clientX;
		setValue(calculateValue(mouseX));
	}

	function handleTouchend() {
		if (disabled) return;
		dragging = false;
		window.removeEventListener('touchmove', handleTouchmove);
		window.removeEventListener('touchend', handleTouchend);
	}

	function handleMousedown(event: MouseEvent) {
		if (disabled) return;
		handleMousemove(event);
		dragging = true;
		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event: MouseEvent) {
		event.preventDefault();
		if (disabled) return;
		const mouseX = event.clientX;
		setValue(calculateValue(mouseX));
	}

	function handleMouseup(event: MouseEvent) {
		if (disabled) return;
		handleMousemove(event);
		dragging = false;
		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	function getElementWidth(el: HTMLElement) {
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
