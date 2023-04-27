import type { Writable } from 'svelte/store';
export type Value = string | number;
export type AriaOrientation = 'vertical' | 'horizontal' | null | undefined;
export interface Option {
    val: Value;
    uuid: string;
    node?: HTMLElement;
}
export interface ListboxAPI {
    groupID: string;
    multiselect: boolean;
    activeIndex: Writable<number>;
    setActive: (type: 'inc' | 'dec') => void;
    selectedIndex: Writable<number | number[]>;
    isOpen: Writable<boolean>;
    setIsOpen: (b?: boolean) => void;
    setSelected: () => void;
    registerOption: (uuid: string, val: string | number) => number;
    unregisterOption: (uuid: string) => void;
}
