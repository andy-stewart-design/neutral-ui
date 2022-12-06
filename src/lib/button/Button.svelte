<script lang="ts">
	export let label: string | undefined = undefined;
	export let disabled = false;
	export { className as class };

	let className = '';

	const ariaID = crypto.randomUUID().split('-').pop()!;
	const role = 'button';
	const id = `nui-${role}-${ariaID}`;
	const tabindex = '0';

	let attributes: {} = { id, role, type: role, tabindex };
	if (label) attributes = { name: label, ['aria-label']: label, ...attributes };
</script>

<button {...attributes} class={className} on:click {disabled} aria-disabled={disabled}>
	<span style:display="block" aria-hidden="true">
		<slot name="start" />
	</span>
	<slot />
	<span style:display="block" aria-hidden="true">
		<slot name="end" />
	</span>
</button>
