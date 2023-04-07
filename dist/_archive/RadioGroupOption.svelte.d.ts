import { SvelteComponentTyped } from "svelte";
import type { Value } from '../radio-group/types';
declare const __propDef: {
    props: {
        value: Value;
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
export type RadioGroupOptionProps = typeof __propDef.props;
export type RadioGroupOptionEvents = typeof __propDef.events;
export type RadioGroupOptionSlots = typeof __propDef.slots;
export default class RadioGroupOption extends SvelteComponentTyped<RadioGroupOptionProps, RadioGroupOptionEvents, RadioGroupOptionSlots> {
}
export {};
