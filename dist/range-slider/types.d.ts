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
    isDisabled: Writable<boolean>;
}
export interface SliderAPI {
    groupID: string;
    disabled: Writable<boolean>;
    value: number;
    min: number;
    max: number;
    posX: Writable<number>;
    handleKeydown: (e: KeyboardEvent) => void;
    handleMousedown: (event: MouseEvent) => void;
    handleMousemove: (event: MouseEvent) => void;
    handleTouchstart: (event: TouchEvent) => void;
}
export interface RangeSliderAPI {
    groupID: string;
    activeValue: Writable<number>;
    min: Writable<string | number>;
    max: Writable<string | number>;
}
