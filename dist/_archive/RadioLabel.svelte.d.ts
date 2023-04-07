import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RadioLabelProps = typeof __propDef.props;
export type RadioLabelEvents = typeof __propDef.events;
export type RadioLabelSlots = typeof __propDef.slots;
export default class RadioLabel extends SvelteComponentTyped<RadioLabelProps, RadioLabelEvents, RadioLabelSlots> {
}
export {};
