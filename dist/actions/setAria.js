export function setAria(node, { id }) {
    const label = `#${id}-label`;
    const labelEl = document.querySelector(label);
    if (labelEl)
        node.setAttribute('aria-labelledby', label);
}
