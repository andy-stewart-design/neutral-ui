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
	import {
		SliderGroup,
		SliderThumb,
		SliderProgress,
		SliderTrack,
		SliderLabel
	} from '$lib/range-slider';
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '$lib/listbox';

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

	let listboxValue = ['Option 0'];
</script>

<div style:margin-bottom="2rem">
	<div class="p-8 pb-0">
		<h1 style:margin-bottom="1rem">
			The orientation is <strong class="font-extrabold">{flip}</strong>
		</h1>
	</div>

	<div class="p-8 pb-0">
		<p>The listbox value is {listboxValue}</p>
		<Listbox
			multi
			atLeast="1"
			bind:value={listboxValue}
			let:isOpen
			on:change={() => console.log('Changed!')}
		>
			<ListboxButton>{isOpen ? 'Close' : 'Open'} Modal</ListboxButton>
			<ListboxOptions
				class="absolute w-32 translate-y-4 border border-black/5 bg-white py-1 opacity-0 shadow-lg transition-all duration-300 focus:border focus:border-blue-500 focus:outline-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100"
			>
				{#each new Array(4) as _, i}
					<ListboxOption
						value={`Option ${i}`}
						class="group flex gap-1 px-4 py-2 text-sm hover:bg-black/10 data-[active=true]:bg-black data-[active=true]:text-white"
					>
						<span class="opacity-0 group-data-[selected=true]:opacity-100">
							<svg viewBox="0 0 16 16" width="16" height="16">
								<path d="M2 9 L6 13 L14 5" stroke="currentColor" fill="none" stroke-width="1.5" />
							</svg>
						</span>
						{`Option ${i}`}
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</Listbox>
	</div>

	<div class="flex flex-col gap-2 p-8">
		<RadioGroup
			bind:value={flip}
			on:change={() => console.log('size updated')}
			class="grid w-full gap-3"
		>
			<RadioLabel class="text-sm font-semibold">Squiggle Orientation</RadioLabel>
			<div class="flex w-full">
				{#each options as option}
					<RadioOption
						value={option.val}
						class="group grow focus-visible:outline-1 focus-visible:outline-blue-500"
					>
						<!-- <Label>Squiggle Orientation</Label> -->

						<span
							class="inline-block w-full border border-r-0 border-gray-900/10 px-3 py-2 text-center font-medium group-last-of-type:border-r group-aria-checked:bg-blue-500 group-aria-checked:text-white"
						>
							{option.text}
						</span>
					</RadioOption>
				{/each}
			</div>
			<RadioDescription class="text-sm text-black/60">
				Select an orientation for your squiggle
			</RadioDescription>
		</RadioGroup>
	</div>

	<div class="flex gap-2 p-8">
		<Button class="flex gap-2 bg-black px-4 py-3 text-white" on:click={() => alert('hello')}>
			<svelte:fragment slot="start">+</svelte:fragment>
			Test Button
		</Button>
	</div>

	<div class="flex flex-col gap-2 p-8">
		<div>The current count is: {count}</div>
		<NumberGroup bind:value={count} max="30" class="grid max-w-sm gap-3">
			<NumberLabel hidden>Count</NumberLabel>
			<div class="relative">
				<NumberInput class="w-full border border-black/10 px-2.5 py-2" />
				<div class="absolute right-0 top-0 flex h-full pr-2">
					<NumberDecrement class="flex grow items-center px-2 py-1">
						<svg viewBox="0 0 12 12" width="12" height="12">
							<path d="M1 6 L11 6" stroke="currentColor" stroke-width="1.25" />
						</svg>
					</NumberDecrement>
					<NumberIncrement class="flex grow items-center p-1">
						<svg viewBox="0 0 12 12" width="12" height="12">
							<path d="M1 6 L11 6 M6 1 L6 11" stroke="currentColor" stroke-width="1.25" />
						</svg>
					</NumberIncrement>
				</div>
			</div>
		</NumberGroup>
	</div>

	<div class="flex gap-4 p-8">
		<SwitchGroup class="flex items-center justify-between gap-4">
			<SwitchLabel class="grow select-none">Active</SwitchLabel>
			<Switch
				bind:value={isActive}
				class="group relative flex w-12 rounded-full border border-blue-900/10 bg-blue-500/10 p-0.5 transition-colors after:absolute after:-bottom-1 after:-left-1 after:-right-1 after:-top-1 after:rounded-full after:border after:border-blue-500 after:opacity-0 focus:outline-none focus-visible:after:opacity-100 aria-checked:bg-blue-500"
			>
				<SwitchThumb
					class="inline-block h-5 w-5 rounded-full bg-blue-500 transition-all group-aria-checked:translate-x-[22px] group-aria-checked:bg-white"
				/>
			</Switch>
		</SwitchGroup>
		{isActive}
	</div>

	<div class="p-8">
		<p>{slider.val}</p>
		<div class="grid max-w-lg gap-4">
			<SliderGroup
				bind:value={slider.val}
				min={slider.min}
				max={slider.max}
				step={slider.step}
				bigStep={slider.bigStep}
				size={32}
			>
				<SliderLabel slot="label">Line Width</SliderLabel>
				<SliderTrack class="h-8 overflow-hidden rounded-full bg-gray-700">
					<SliderProgress class="h-full w-full origin-left bg-blue-600" />
				</SliderTrack>
				<SliderThumb
					class="top-0 block rounded-full border-4 border-blue-600 bg-slate-50 focus-visible:bg-cyan-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-cyan-400"
				/>
			</SliderGroup>
		</div>
	</div>
	<div class="p-8">
		<div class="grid max-w-lg gap-4">
			<SliderGroup
				bind:value={slider.val}
				min={slider.min}
				max={slider.max}
				step={slider.step}
				bigStep={slider.bigStep}
			>
				<SliderLabel slot="label">Line Width</SliderLabel>
				<SliderTrack class="h-1 overflow-hidden rounded-full bg-gray-700">
					<SliderProgress class="h-full w-full origin-left bg-blue-600" />
				</SliderTrack>
				<SliderThumb
					class="top-0 block rounded-full border-2 border-blue-600 bg-slate-50 focus-visible:bg-cyan-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-cyan-400"
				/>
			</SliderGroup>
		</div>
	</div>
</div>

<style global lang="postcss">
	.thumb {
		@apply h-6 w-6 cursor-pointer rounded-full border border-white bg-purple-600;
	}
	.thumb.active {
		@apply bg-green-500;
	}
	.radio-option.checked {
		@apply bg-purple-600;
	}
</style>
