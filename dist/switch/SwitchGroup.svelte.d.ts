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
export type SwitchGroupProps = typeof __propDef.props;
export type SwitchGroupEvents = typeof __propDef.events;
export type SwitchGroupSlots = typeof __propDef.slots;
export default class SwitchGroup extends SvelteComponentTyped<SwitchGroupProps, SwitchGroupEvents, SwitchGroupSlots> {
}
export {};
