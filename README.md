Just another Sveltekit component library.

```svelte
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
```
