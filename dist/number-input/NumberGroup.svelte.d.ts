import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        value: number;
        max?: string | number | undefined;
        min?: string | number | undefined;
        step?: string | number | undefined;
        bigStep?: string | number | undefined;
        placeholder?: string | number | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NumberGroupProps = typeof __propDef.props;
export type NumberGroupEvents = typeof __propDef.events;
export type NumberGroupSlots = typeof __propDef.slots;
export default class NumberGroup extends SvelteComponentTyped<NumberGroupProps, NumberGroupEvents, NumberGroupSlots> {
}
export {};
