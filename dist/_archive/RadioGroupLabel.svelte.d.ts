import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RadioGroupLabelProps = typeof __propDef.props;
export type RadioGroupLabelEvents = typeof __propDef.events;
export type RadioGroupLabelSlots = typeof __propDef.slots;
export default class RadioGroupLabel extends SvelteComponentTyped<RadioGroupLabelProps, RadioGroupLabelEvents, RadioGroupLabelSlots> {
}
export {};
