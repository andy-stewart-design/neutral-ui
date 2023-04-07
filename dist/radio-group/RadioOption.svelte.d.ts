import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: string | number;
        index?: number | undefined;
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
export type RadioOptionProps = typeof __propDef.props;
export type RadioOptionEvents = typeof __propDef.events;
export type RadioOptionSlots = typeof __propDef.slots;
export default class RadioOption extends SvelteComponentTyped<RadioOptionProps, RadioOptionEvents, RadioOptionSlots> {
}
export {};
