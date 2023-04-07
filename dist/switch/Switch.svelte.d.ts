import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: boolean;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            checked: boolean;
        };
    };
};
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponentTyped<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
