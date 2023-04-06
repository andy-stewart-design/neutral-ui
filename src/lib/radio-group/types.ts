import type { Writable } from 'svelte/store';

export type Value = string | number;
export type ElementType = 'option' | 'label';

export interface OptionsArray {
	val: Value;
	uuid: string;
	node?: HTMLElement;
}

export interface LabelsArray {
	uuid: string;
}

export interface API {
	groupID: string;
	activeIndex: Writable<number>;
	activeValue: Writable<string | number>;
	registerElement: (type: ElementType, uuid: string, value?: Value) => number;
	registerNode: (uuid: string, node: HTMLElement) => void;
	unregisterElement: (type: ElementType, uuid: string) => void;
	handleClick: (e: KeyboardEvent) => void;
	setFocus: () => void;
}

export interface RadioGroupAPI {
	groupID: string;
	activeIndex: Writable<number>;
	activeValue: Writable<string | number>;
	registerOption: (uuid: string, value: string | number) => number;
	registerNode: (uuid: string, node: HTMLElement) => void;
	unregisterOption: (uuid: string) => void;
	handleClick: (e: KeyboardEvent) => void;
	setFocus: () => void;
}
