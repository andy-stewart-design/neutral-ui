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
export type NumberIncrementProps = typeof __propDef.props;
export type NumberIncrementEvents = typeof __propDef.events;
export type NumberIncrementSlots = typeof __propDef.slots;
export default class NumberIncrement extends SvelteComponentTyped<NumberIncrementProps, NumberIncrementEvents, NumberIncrementSlots> {
}
export {};
