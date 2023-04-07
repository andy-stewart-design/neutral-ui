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
export type SwitchLabelProps = typeof __propDef.props;
export type SwitchLabelEvents = typeof __propDef.events;
export type SwitchLabelSlots = typeof __propDef.slots;
export default class SwitchLabel extends SvelteComponentTyped<SwitchLabelProps, SwitchLabelEvents, SwitchLabelSlots> {
}
export {};
