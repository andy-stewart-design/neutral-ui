import { SvelteComponentTyped } from "svelte";
import type { Value } from './types';
declare const __propDef: {
    props: {
        value: Value | Value[];
        multiple?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            isOpen: boolean;
        };
    };
};
export type ListboxProps = typeof __propDef.props;
export type ListboxEvents = typeof __propDef.events;
export type ListboxSlots = typeof __propDef.slots;
export default class Listbox extends SvelteComponentTyped<ListboxProps, ListboxEvents, ListboxSlots> {
}
export {};
