import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NumberDecrementProps = typeof __propDef.props;
export type NumberDecrementEvents = typeof __propDef.events;
export type NumberDecrementSlots = typeof __propDef.slots;
export default class NumberDecrement extends SvelteComponentTyped<NumberDecrementProps, NumberDecrementEvents, NumberDecrementSlots> {
}
export {};
