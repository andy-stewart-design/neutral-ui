export function setAria(node: HTMLElement, { id }: { id: string }) {
	const label = `#${id}-label`;
	const labelEl = document.querySelector(label);
	if (labelEl) node.setAttribute('aria-labelledby', label);
}
