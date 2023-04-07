import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NumberLabelProps = typeof __propDef.props;
export type NumberLabelEvents = typeof __propDef.events;
export type NumberLabelSlots = typeof __propDef.slots;
export default class NumberLabel extends SvelteComponentTyped<NumberLabelProps, NumberLabelEvents, NumberLabelSlots> {
}
export {};
