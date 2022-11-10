import type { Writable } from 'svelte/store';

export type Value = string | number;

export interface OptionsArray {
	node: HTMLElement;
	value: Value;
	uuid?: string;
}

export interface API {
	ariaID: string;
	activeIndex: Writable<number>;
	activeValue: Writable<string | number>;
	registerInput: (node: HTMLElement, value: Value, uuid: string) => number;
	unregisterInput: (uuid: string) => void;
	handleClick: (e: KeyboardEvent) => void;
}
