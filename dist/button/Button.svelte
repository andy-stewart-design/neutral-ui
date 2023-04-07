<script>export let label = undefined;
export let disabled = false;
export let tabindex = '0';
export { className as class };
let className = '';
const ariaID = crypto.randomUUID().split('-').pop();
const role = 'button';
const id = `nui-${role}-${ariaID}`;
let attributes = { id, role, type: role, tabindex };
if (label)
    attributes = { name: label, ['aria-label']: label, ...attributes };
</script>

<button {...attributes} class={className} on:click {disabled} aria-disabled={disabled}>
	{#if $$slots.start}
		<span style:display="block" aria-hidden="true">
			<slot name="start" />
		</span>
	{/if}
	<slot />
	{#if $$slots.end}
		<span style:display="block" aria-hidden="true">
			<slot name="end" />
		</span>
	{/if}
</button>
