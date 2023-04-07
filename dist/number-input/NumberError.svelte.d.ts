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
export type NumberErrorProps = typeof __propDef.props;
export type NumberErrorEvents = typeof __propDef.events;
export type NumberErrorSlots = typeof __propDef.slots;
export default class NumberError extends SvelteComponentTyped<NumberErrorProps, NumberErrorEvents, NumberErrorSlots> {
}
export {};
