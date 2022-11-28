export function getElementWidth(el: HTMLElement) {
	const { left, right } = el.getBoundingClientRect();
	const width = right - left;
	return { left, right, width };
}
