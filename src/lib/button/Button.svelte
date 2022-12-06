<script lang="ts">
	export let label: string | undefined = undefined;
	export let disabled = false;
	export { className as class };

	let className = '';

	const ariaID = crypto.randomUUID().split('-').pop()!;
	const role = 'button';
	const id = `nui-${role}-${ariaID}`;
	const tabindex = '0';

	let attributes: {} = { id, role, type: role, disabled, ['aria-disabled']: disabled, tabindex };
	if (label) attributes = { name: label, ['aria-label']: label, ...attributes };
</script>

<button {...attributes} class={className} on:click>
	<slot />
</button>
