<script lang="ts">
	// TODO switch from $$props.class to {export className as class}
	// TODO button component
	// TODO refactor radio label to accept either icon or text and handle accesibility issues
	// TODO Look for ways to optimize component structure
	// TODO combobox component
	// TODO figure out how to set up docs site

	import '../app.css';
	import '../lib/base.css';
	import RadioGroup from '$lib/radio-group/RadioGroup.svelte';
	import RadioGroupOption from '$lib/radio-group/RadioGroupOption.svelte';
	import RadioGroupLabel from '$lib/radio-group/RadioGroupLabel.svelte';
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

	let flip = 'default';
	let options = [
		{ val: 'flipped', text: 'Flipped' },
		{ val: 'foobar', text: 'Foobar' },
		{ val: 'default', text: 'Default' },
		{ val: 'skejf', text: 'Skejf' }
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
		<h1 style:margin-bottom="1rem">The orientation is {flip}</h1>
	</div>

	<div class="flex flex-col gap-2 p-8">
		<RadioGroup bind:value={flip} class="flex flex-col gap-3 grow">
			<RadioGroupLabel visible>Squiggle Orientation</RadioGroupLabel>
			<div class="flex">
				{#each options as option}
					<RadioGroupOption value={option.val} let:checked class="grow">
						<span
							class="radio-option block text-center text-white border border-gray-100/10 bg-gray-800 transition-colors ease-out py-4 px-6"
							class:checked>{option.text}</span
						>
					</RadioGroupOption>
				{/each}
			</div>
		</RadioGroup>
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
			<Switch
				bind:value={isActive}
				class="relative flex shrink-0 bg-blue-200 cursor-pointer p-0.5 pr-[1.625rem] rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
			>
				<div
					class="w-6 h-6 bg-blue-600 rounded-full transition-transform"
					class:translate-x-full={isActive}
					aria-hidden="true"
				/>
				<SwitchLabel slot="end"><span>{isActive}</span></SwitchLabel>
			</Switch>
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
		>
			<div class="flex justify-between text-sm tabular-nums">
				<RangeSliderLabel>This is a label</RangeSliderLabel>
				<p>{slider.val.toFixed(1)}</p>
				<p>{dragging} {progress.toFixed(1)}</p>
			</div>
			<RangeSliderTrack class="h-1.5 bg-gray-200 border-gray-800/5 rounded-full">
				<RangeSliderProgress
					class="bg-gradient-to-r h-1.5 from-purple-300 to-purple-600 rounded-full"
				/>
				<RangeSliderThumb class={dragging ? 'thumb active' : 'thumb'} />
			</RangeSliderTrack>
		</RangeSlider>
	</div>
	<!-- </RangeSliderGroup> -->
</div>

<style global>
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
