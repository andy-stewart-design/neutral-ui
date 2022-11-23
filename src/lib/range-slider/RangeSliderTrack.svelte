<script lang="ts">
	export let clipVal: number;
</script>

<div
	class={`${$$props.class}`}
	style={`clip-path: polygon(0 0, ${clipVal}% 0, ${clipVal}% 100%, 0 100%);`}
/>
