<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { NumberAPI, SpinbuttonRole } from './types';

	export let value: number | string | null = null;
	export let max: number | string = 9007199254740991;
	export let min: number | string = -max;
	export let step = 1;
	export let bigStep = 10;
	export let placeholder = '00';
	export { className as class };
	let className = '';

	const role = 'spinbutton';
	const ariaID = crypto.randomUUID().split('-').pop()!;
	const id = `nui-${role}-${ariaID}`;

	let isValid = true;
	let labelID: Writable<string | undefined> = writable(undefined);
	let descriptionID: Writable<string | undefined> = writable(undefined);
	let errorID: Writable<string | undefined> = writable(undefined);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') clampValue();
		else if (e.key === 'Home') value = min;
		else if (e.key === 'End') value = max;
		else if ((e.shiftKey && e.key === 'ArrowUp') || e.key === 'PageUp') {
			e.preventDefault();
			value = Number(value) + bigStep;
			clampValue();
		} else if ((e.shiftKey && e.key === 'ArrowDown') || e.key === 'PageDown') {
			e.preventDefault();
			value = Number(value) - bigStep;
			clampValue();
		}
	}

	function checkValid() {
		value === null ? (isValid = false) : (isValid = true);
	}

	function clampValue() {
		if (value && value > max) value = max;
		if (value && value < min) value = min;
	}

	function incValue(e: MouseEvent) {
		const val = Number(value);
		if (e.shiftKey) value = val + bigStep;
		else value = val + step;
		clampValue();
	}

	function decValue(e: MouseEvent) {
		const val = Number(value);
		if (e.shiftKey) value = val - bigStep;
		else value = val - step;
		clampValue();
	}

	function register(role: SpinbuttonRole, id: string) {
		if (role === 'label') $labelID = id;
		else if (role === 'description') $descriptionID = id;
		else if (role === 'error') $errorID = id;
	}

	setContext<NumberAPI>('NumberAPI', {
		ariaID,
		parentID: id,
		register,
		incValue,
		decValue
	});

	let attributes = { id, min, max, placeholder, step, role };
</script>

<slot name="label" />
<div style:position="relative" style:display="flex">
	<slot name="start" />
	<input
		class={`nui-input ${className}`}
		bind:value
		{...attributes}
		on:keydown={handleKeyDown}
		on:keyup={checkValid}
		on:blur={clampValue}
		type="number"
		pattern="[0-9]*"
		aria-labelledby={$labelID}
		aria-describedby={!isValid ? $errorID : $descriptionID}
		aria-valuenow={Number(value)}
		aria-valuemin={Number(min)}
		aria-valuemax={Number(max)}
		aria-invalid={!isValid}
		autocomplete="off"
	/>
	<slot />
</div>
{#if isValid}
	<slot name="description" />
{:else}
	<slot name="error" />
{/if}
