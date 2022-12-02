import type { Writable } from 'svelte/store';

export interface RangeAPI {
	parentID: string;
	value: number;
	min: number;
	max: number;
	posX: Writable<number>;
	handleKeydown: (e: KeyboardEvent) => void;
	handleMousedown: (event: MouseEvent) => void;
	handleMousemove: (event: MouseEvent) => void;
	handleTouchstart: (event: TouchEvent) => void;
	focusThumb: () => void;
	disabled: boolean;
}
