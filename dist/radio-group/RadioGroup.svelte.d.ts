import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        value: string | number;
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
export type RadioGroupProps = typeof __propDef.props;
export type RadioGroupEvents = typeof __propDef.events;
export type RadioGroupSlots = typeof __propDef.slots;
export default class RadioGroup extends SvelteComponentTyped<RadioGroupProps, RadioGroupEvents, RadioGroupSlots> {
}
export {};
