<script>import { getContext } from 'svelte';
import { SLIDER_CONTEXT } from '../utils/ui';
import { map } from '../utils/math';
export { className as class };
let className = '';
const { activeValue, min, max, size } = getContext(SLIDER_CONTEXT);
let offset = size.width / 2;
$: posX = map($activeValue, Number($min), Number($max), 0, 100);
$: padding = map(posX, 0, 100, offset, -offset);
</script>

<div class={className} style:width={`calc(${posX}% + ${padding}px)`} />
