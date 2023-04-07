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
export type NumberDescriptionProps = typeof __propDef.props;
export type NumberDescriptionEvents = typeof __propDef.events;
export type NumberDescriptionSlots = typeof __propDef.slots;
export default class NumberDescription extends SvelteComponentTyped<NumberDescriptionProps, NumberDescriptionEvents, NumberDescriptionSlots> {
}
export {};
