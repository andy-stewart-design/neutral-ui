import { SvelteComponentTyped } from "svelte";
import type { Value } from './types';
declare const __propDef: {
    props: {
        value: Value;
        index?: number | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListboxOptionProps = typeof __propDef.props;
export type ListboxOptionEvents = typeof __propDef.events;
export type ListboxOptionSlots = typeof __propDef.slots;
export default class ListboxOption extends SvelteComponentTyped<ListboxOptionProps, ListboxOptionEvents, ListboxOptionSlots> {
}
export {};
