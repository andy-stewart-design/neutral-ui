<script lang="ts">
	export { className as class };
	let className: string | undefined = '';
</script>

<div
	class={className}
	style:position="absolute"
	style:top="50%"
	style:left="-12px"
	style:right="-12px"
	style:translate="0 -50%"
>
	<slot />
</div>
