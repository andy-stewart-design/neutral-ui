<script lang="ts">
	// TODO button component
	// TODO Look for ways to optimize component structure
	// util for generating IDs?
	// TODO Radio Description
	// TODO popover component
	// TODO figure out how to set up docs site

	import '../app.css';
	import '../lib/base.css';
	import { RadioGroup, RadioLabel, RadioOption, RadioDescription } from '$lib/radio-group';
	import Switch from '$lib/switch/Switch.svelte';
	import SwitchLabel from '$lib/switch/SwitchLabel.svelte';
	import RangeSlider from '$lib/range-slider/RangeSlider.svelte';
	import RangeSliderTrack from '$lib/range-slider/RangeSliderTrack.svelte';
	import NumberInput from '$lib/number-input/NumberInput.svelte';
	import { NumberIncrement } from '../lib/index';
	import NumberDecrement from '$lib/number-input/NumberDecrement.svelte';
	import NumberLabel from '$lib/number-input/NumberLabel.svelte';
	import NumberDescription from '$lib/number-input/NumberDescription.svelte';
	import NumberError from '$lib/number-input/NumberError.svelte';
	import RangeSliderThumb from '$lib/range-slider/RangeSliderThumb.svelte';
	import RangeSliderProgress from '$lib/range-slider/RangeSliderProgress.svelte';
	import RangeSliderLabel from '$lib/range-slider/RangeSliderLabel.svelte';
	import Button from '$lib/button/Button.svelte';
	import { clsx } from '$lib/utils/clsx';
	import LabelContext from '$lib/label/LabelContext.svelte';
	import Label from '$lib/label/Label.svelte';

	let flip = 'default';
	let options = [
		{ val: 'flipped', text: 'Flipped' },
		{ val: 'foobar', text: 'Foobar' },
		{ val: 'default', text: 'Default' },
		{ val: 'skejf', text: 'Skejf' }
	];

	let count = 1;
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
		<NumberInput value="10" min="-10" max="20" class="border border-black/10 py-2 px-3 grow-0">
			<NumberLabel class="text-sm" slot="label">This is a label</NumberLabel>
			<div class="absolute top-0 right-1 flex items-center h-full">
				<NumberDecrement class="py-0.5 pt-px px-3 select-none border-r border-black/10">
					-
				</NumberDecrement>
				<NumberIncrement class="py-0.5 pt-px px-3 select-none">+</NumberIncrement>
			</div>
			<NumberDescription slot="description" class="text-xs">
				Select a number between -10 and 20
			</NumberDescription>
			<NumberError slot="error" class="text-xs text-red-500">You goofed!</NumberError>
		</NumberInput>
	</div>

	<div class="p-8">
		<div class="flex items-center gap-2">
			<!-- <Switch
				bind:value={isActive}
				class="relative flex shrink-0 bg-blue-200 cursor-pointer p-0.5 pr-[1.625rem] rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
			>
				<div
					class="w-6 h-6 bg-blue-600 rounded-full transition-transform"
					class:translate-x-full={isActive}
					aria-hidden="true"
				/>
				<SwitchLabel slot="end"><span>{isActive}</span></SwitchLabel>
			</Switch> -->
		</div>
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
