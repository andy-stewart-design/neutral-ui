<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { map, clamp } from '$lib/utils/math';
	import { getElementWidth } from '$lib/utils/getElementWidth';
	import type { RangeAPI } from './types';

	let rangeContainer: HTMLElement;
	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;
	export let bigStep: number;
	export let disabled = false;

	const defaultValue = value;
	let posX = writable(map(value, min, max, 0, 100));

	const ariaID = crypto.randomUUID().split('-').pop()!;
	const id = `nui-rangeslider-${ariaID}`;

	function resetValue() {
		if (disabled) return;
		value = defaultValue;
		posX.set(map(value, min, max, 0, 100));
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;
		if (
			(event.shiftKey && event.key === 'ArrowRight') ||
			(event.shiftKey && event.key === 'ArrowUp') ||
			event.key === 'PageUp'
		) {
			if (value <= max - bigStep) value += bigStep;
			else if (value > max - bigStep && value < max) value = max;
		} else if (
			(event.shiftKey && event.key === 'ArrowLeft') ||
			(event.shiftKey && event.key === 'ArrowDown') ||
			event.key === 'PageDown'
		) {
			if (value >= min + bigStep) value -= bigStep;
			else if (value < min + bigStep && value > min) value = min;
		} else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
			if (value <= max - step) value += step;
			else if (value > max - step && value < max) value = max;
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
			if (value >= min + step) value -= step;
			else if (value < min + step && value > min) value = min;
		} else if (event.key === 'End' && value < max) value = max;
		else if (event.key === 'Home' && value > min) value = min;
		posX.set(map(value, min, max, 0, 100));
	}

	function handleMousemove(event: MouseEvent) {
		if (disabled) return;
		const { left, width } = getElementWidth(rangeContainer);
		const mouseX = event.clientX;
		const nextValue = min + Math.round(((max - min) * ((mouseX - left) / width)) / step) * step;
		value = clamp(nextValue, min, max);
		posX.set(map(value, min, max, 0, 100));
	}

	function handleMousedown(event: MouseEvent) {
		if (disabled) return;
		handleMousemove(event);
		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMouseup(event: MouseEvent) {
		if (disabled) return;
		handleMousemove(event);
		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	function focusThumb() {
		const thumb: HTMLElement | null = document.querySelector(`#${id}-thumb`);
		thumb?.focus();
	}

	setContext<RangeAPI>('rangeSliderAPI', {
		parentID: id,
		value,
		min,
		max,
		posX,
		handleKeydown,
		handleMousedown,
		handleMousemove,
		focusThumb,
		disabled
	});
</script>

<div
	bind:this={rangeContainer}
	{id}
	{disabled}
	class={`${$$props.class}`}
	style:position="relative"
	role="presentation"
	tabindex="-1"
>
	<slot {resetValue} />
</div>
