<script lang="ts">
	import '../app.css';
	import RadioGroup from '$lib/radio-group/RadioGroup.svelte';
	import RadioGroupOption from '$lib/radio-group/RadioGroupOption.svelte';
	import RadioGroupLabel from '$lib/radio-group/RadioGroupLabel.svelte';
	import Switch from '$lib/switch/Switch.svelte';
	import SwitchLabel from '$lib/switch/SwitchLabel.svelte';
	import RangeSlider from '$lib/range-slider/RangeSlider.svelte';
	// import RangeSliderGroup from '$lib/range-slider/RangeSliderGroup.svelte';
	import RangeSliderTrack from '$lib/range-slider/RangeSliderTrack.svelte';
	import NumberInput from '$lib/number-input/NumberInput.svelte';
	import NumberIncrement from '$lib/number-input/NumberIncrement.svelte';
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
	<h1 style:margin-bottom="1rem">The orientation is {flip}</h1>

	<div class="container">
		<RadioGroup bind:value={flip} class="lorem">
			<RadioGroupLabel>Squiggle Orientation</RadioGroupLabel>
			{#each options as option}
				<RadioGroupOption value={option.val} let:checked class="ispum">
					<RadioGroupLabel inner class="radio-group-option">
						<span class="inner" class:checked>{option.text}</span>
					</RadioGroupLabel>
				</RadioGroupOption>
			{/each}
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
		>
			<div class="flex justify-between text-sm tabular-nums">
				<RangeSliderLabel>This is a label</RangeSliderLabel>
				<p>{slider.val.toFixed(1)}</p>
				<p>{progress.toFixed(1)}</p>
			</div>
			<RangeSliderTrack class="h-1.5 bg-gray-200 border-gray-800/5 rounded-full">
				<RangeSliderProgress
					class="bg-gradient-to-r h-1.5 from-purple-300 to-purple-600 rounded-full"
				/>
				<RangeSliderThumb
					class="bg-purple-600 w-5 h-5 border border-white rounded-full cursor-pointer"
				/>
			</RangeSliderTrack>
		</RangeSlider>
	</div>
	<!-- </RangeSliderGroup> -->
</div>

<style global>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		display: flex;
		background: aliceblue;
	}
	.lorem {
		display: flex;
		flex-grow: 1;
		background: blue;
	}
	.ispum {
		display: flex;
		flex-grow: 1;
	}
	.radio-group-option {
		display: grid;
		text-align: center;
		border-width: 1px;
		border-color: rgb(31 41 55 / 0.1);
		--tw-bg-opacity: 1;
		background-color: rgb(229 231 235 / var(--tw-bg-opacity));
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		/* padding: 1rem 1.5rem; */
		width: 100%;
	}

	@media (prefers-color-scheme: dark) {
		.radio-group-option {
			color: white;
			border-color: rgb(243 244 246 / 0.1);
			--tw-bg-opacity: 1;
			background-color: rgb(55 65 81 / var(--tw-bg-opacity));
		}
	}

	.inner {
		padding: 1rem 1.5rem;
	}

	.checked {
		--tw-bg-opacity: 1;
		background-color: rgb(34 211 238 / var(--tw-bg-opacity));
	}

	@media (prefers-color-scheme: dark) {
		.checked {
			--tw-bg-opacity: 1;
			background-color: rgb(37 99 235 / var(--tw-bg-opacity));
		}
	}
</style>
