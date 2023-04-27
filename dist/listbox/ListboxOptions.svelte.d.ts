import { SvelteComponentTyped } from "svelte";
import type { AriaOrientation } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        orientation?: AriaOrientation;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListboxOptionsProps = typeof __propDef.props;
export type ListboxOptionsEvents = typeof __propDef.events;
export type ListboxOptionsSlots = typeof __propDef.slots;
export default class ListboxOptions extends SvelteComponentTyped<ListboxOptionsProps, ListboxOptionsEvents, ListboxOptionsSlots> {
}
export {};
