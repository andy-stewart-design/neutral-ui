export function getElementWidth(el) {
    const { left, right } = el.getBoundingClientRect();
    const width = right - left;
    return { left, right, width };
}
