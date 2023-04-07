<script lang="ts">
	// TODO button component
	// TODO Look for ways to optimize component structure
	// TODO Radio Description
	// TODO popover component
	// TODO figure out how to set up docs site

	import '../app.css';
	import '../lib/base.css';
	import { RadioGroup, RadioLabel, RadioOption, RadioDescription } from '$lib/radio-group';
	import { SwitchGroup, Switch, SwitchLabel, SwitchThumb } from '$lib/switch';
	import RangeSlider from '$lib/range-slider/RangeSlider.svelte';
	import RangeSliderTrack from '$lib/range-slider/RangeSliderTrack.svelte';
	import NumberError from '$lib/number-input/NumberError.svelte';
	import RangeSliderThumb from '$lib/range-slider/RangeSliderThumb.svelte';
	import RangeSliderProgress from '$lib/range-slider/RangeSliderProgress.svelte';
	import RangeSliderLabel from '$lib/range-slider/RangeSliderLabel.svelte';
	import Button from '$lib/button/Button.svelte';
	import { clsx } from '$lib/utils/clsx';
	import {
		NumberGroup,
		NumberLabel,
		NumberInput,
		NumberIncrement,
		NumberDecrement
	} from '$lib/number-input';

	let flip = 'default';
	let options = [
		{ val: 'flipped', text: 'Flipped' },
		{ val: 'foobar', text: 'Foobar' },
		{ val: 'default', text: 'Default' },
		{ val: 'skejf', text: 'Skejf' }
	];

	let count: number;
	let countOptions = [
		{ val: 1, text: 1 },
		{ val: 2, text: 2 },
		{ val: 3, text: 3 },
		{ val: 4, text: 4 }
	];

	let isActive = true;

	let slider = {
		val: 15,
		min: 0,
		max: 40,
		step: 0.1,
		bigStep: 1,
		name: 'test slider'
	};
</script>

<div style:margin-bottom="2rem">
	<div class="p-8 pb-0">
		<h1 style:margin-bottom="1rem">
			The orientation is <strong class="font-extrabold">{flip}</strong>
		</h1>
	</div>

	<div class="flex flex-col gap-2 p-8">
		<RadioGroup
			bind:value={flip}
			on:change={() => console.log('size updated')}
			class="grid gap-3 w-full"
		>
			<RadioLabel class="font-semibold text-sm">Squiggle Orientation</RadioLabel>
			<div class="flex w-full">
				{#each options as option}
					<RadioOption
						value={option.val}
						class="group grow focus-visible:outline-blue-500 focus-visible:outline-1"
					>
						<!-- <Label>Squiggle Orientation</Label> -->

						<span
							class="inline-block font-medium text-center w-full py-2 px-3 border border-gray-900/10 border-r-0 group-last-of-type:border-r group-aria-checked:bg-blue-500 group-aria-checked:text-white"
						>
							{option.text}
						</span>
					</RadioOption>
				{/each}
			</div>
			<RadioDescription class="text-sm text-black/60"
				>Select an orientation for your squiggle</RadioDescription
			>
		</RadioGroup>
	</div>

	<div class="flex gap-2 p-8">
		<Button class="flex gap-2 text-white bg-black py-3 px-4" on:click={() => alert('hello')}>
			<svelte:fragment slot="start">+</svelte:fragment>
			Test Button
		</Button>
	</div>

	<div class="flex flex-col gap-2 p-8">
		<div>The current count is: {count}</div>
		<NumberGroup bind:value={count} max="30" class="grid gap-3 max-w-sm">
			<NumberLabel hidden>Count</NumberLabel>
			<div class="relative">
				<NumberInput class="border border-black/10 w-full py-2 px-2.5" />
				<div class="absolute top-0 right-0 flex h-full pr-2">
					<NumberDecrement class="grow flex items-center py-1 px-2">
						<svg viewBox="0 0 12 12" width="12" height="12">
							<path d="M1 6 L11 6" stroke="currentColor" stroke-width="1.25" />
						</svg>
					</NumberDecrement>
					<NumberIncrement class="grow flex items-center p-1">
						<svg viewBox="0 0 12 12" width="12" height="12">
							<path d="M1 6 L11 6 M6 1 L6 11" stroke="currentColor" stroke-width="1.25" />
						</svg>
					</NumberIncrement>
				</div>
			</div>
		</NumberGroup>
	</div>

	<div class="flex gap-4 p-8">
		<SwitchGroup class="flex justify-between items-center gap-4">
			<SwitchLabel class="grow select-none">Active</SwitchLabel>
			<Switch
				bind:value={isActive}
				class="group relative flex bg-blue-500/10 border border-blue-900/10 w-12 p-0.5 rounded-full transition-colors aria-checked:bg-blue-500 focus:outline-none after:absolute after:-top-1 after:-right-1 after:-bottom-1 after:-left-1 after:border after:border-blue-500 after:rounded-full after:opacity-0 focus-visible:after:opacity-100"
			>
				<SwitchThumb
					class="inline-block w-5 h-5 bg-blue-500 rounded-full transition-all group-aria-checked:translate-x-[22px] group-aria-checked:bg-white"
				/>
			</Switch>
		</SwitchGroup>
		{isActive}
	</div>

	<!-- <RangeSliderGroup class="p-8">
		{slider.val} -->
	<div class="p-8">
		<RangeSlider
			bind:value={slider.val}
			min={slider.min}
			max={slider.max}
			step={slider.step}
			bigStep={slider.bigStep}
			class="relative flex flex-col gap-4 w-full max-w-[400px] py-2"
			let:progress
			let:dragging
			let:disabled
		>
			<div class="flex justify-between text-sm tabular-nums">
				<RangeSliderLabel>This is a label</RangeSliderLabel>
				<p>{slider.val.toFixed(1)}</p>
				<p>{dragging} {progress.toFixed(1)}</p>
			</div>
			<RangeSliderTrack
				class={clsx('h-1.5 bg-gray-200 border-gray-800/5 rounded-full', disabled && 'bg-blue-500')}
			>
				<RangeSliderProgress
					class="bg-gradient-to-r h-1.5 from-purple-300 to-purple-600 rounded-full"
				/>
				<RangeSliderThumb class={dragging ? 'thumb active' : 'thumb'} />
			</RangeSliderTrack>
		</RangeSlider>
	</div>
	<!-- </RangeSliderGroup> -->
</div>

<style global lang="postcss">
	.thumb {
		@apply bg-purple-600 w-6 h-6 border border-white rounded-full cursor-pointer;
	}
	.thumb.active {
		@apply bg-green-500;
	}
	.radio-option.checked {
		@apply bg-purple-600;
	}
</style>
