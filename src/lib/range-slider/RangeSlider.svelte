<script lang="ts">
	// TODO: Refactor to get rid of RangeSliderGroup

	import { getContext } from 'svelte';
	import type { RangeAPI } from './types';

	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;
	export let name: string;

	const { ariaID } = getContext<RangeAPI>('rangeSliderAPI');

	const id = `neutral-rangeslider-${ariaID}`;

	// const defaultValue = value;

	function map(n: number, start1: number, end1: number, start2: number, end2: number): number {
		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
	}

	$: normalizedVal = map(value, min, max, 0, 100);
</script>

<!-- <RangeSliderGroup>
   <RangeSliderLabel />
   <RangeSlider>
      <RangeSliderTrack />
   </RangeSlider>
</RangeSliderGroup> -->

<!-- RangeSliderGroup  -->
<!-- <div> -->
<!-- RangeSliderLabel  -->
<!-- <label for={id}><slot /></label> -->

<!-- <div> -->
<!-- <div class="absolute top-0 left-0 h-2 w-full overflow-hidden rounded-full">
       <div
         class="absolute top-0 left-0 h-full w-full bg-gray-200 dark:bg-gray-700 border border-gray-800/5 dark:border-gray-100/10 rounded-full"
       />
       <div
         class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-cyan-400 dark:from-blue-400 to-cyan-500 dark:to-blue-700 origin-left rounded-full"
         style={`clip-path: polygon(0 0, ${normalizedVal}% 0, ${normalizedVal}% 100%, 0 100%);`}
       />
     </div> -->

<!-- RangeSlider  -->
{#if $$slots.default}
	<div class={`${$$props.class}`}>
		<slot {normalizedVal} {id} />
		<input
			type="range"
			bind:value
			{id}
			{name}
			{min}
			{max}
			{step}
			aria-label={name}
			class="range-reset"
		/>
	</div>
{:else}
	<input
		type="range"
		bind:value
		{id}
		{name}
		{min}
		{max}
		{step}
		aria-label={name}
		class={`${$$props.class}`}
	/>
{/if}

<style scoped>
	.range-reset {
		@apply relative block w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer;
	}
</style>
