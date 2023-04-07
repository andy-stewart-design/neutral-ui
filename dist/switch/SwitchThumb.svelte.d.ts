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
export type SwitchThumbProps = typeof __propDef.props;
export type SwitchThumbEvents = typeof __propDef.events;
export type SwitchThumbSlots = typeof __propDef.slots;
export default class SwitchThumb extends SvelteComponentTyped<SwitchThumbProps, SwitchThumbEvents, SwitchThumbSlots> {
}
export {};
