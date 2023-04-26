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
	activeOption: Writable<number>;
	isOpen: Writable<boolean>;
	setIsOpen: (b?: boolean) => void;
	incActiveOption: () => number;
	decActiveOption: () => number;
	registerOption: (uuid: string, val: string | number) => number;
	unregisterOption: (uuid: string) => void;
}
