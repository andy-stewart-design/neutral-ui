<script lang="ts">
	import RadioGroup from '$lib/radio-group/RadioGroup.svelte';
	import RadioGroupOption from '$lib/radio-group/RadioGroupOption.svelte';
	import RadioGroupLabel from '$lib/radio-group/RadioGroupLabel.svelte';

	const options = [
		{ val: 'flipped', text: 'Flipped' },
		{ val: 'foobar', text: 'Foobar' },
		{ val: 'default', text: 'Default' },
		{ val: 'skejf', text: 'Skejf' }
	];
	let flip = 'default';
</script>

<div style:margin-bottom="2rem">
	<h1 style:margin-bottom="1rem">The orientation is {flip}</h1>

	<div class="container">
		<RadioGroup bind:value={flip} class="lorem">
			<RadioGroupLabel>Squiggle Orientation</RadioGroupLabel>
			{#each options as option, index}
				<RadioGroupOption value={option.val} let:checked class="ispum">
					<RadioGroupLabel inner class="radio-group-option">
						<!-- {option.text} -->
						<span class="inner" class:checked>{option.text}</span>
					</RadioGroupLabel>
				</RadioGroupOption>
			{/each}
		</RadioGroup>
	</div>
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
