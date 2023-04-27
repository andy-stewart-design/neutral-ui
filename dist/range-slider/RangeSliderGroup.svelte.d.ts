import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: number;
        min: number;
        max: number;
        step: number;
        bigStep: number;
        disabled?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RangeSliderGroupProps = typeof __propDef.props;
export type RangeSliderGroupEvents = typeof __propDef.events;
export type RangeSliderGroupSlots = typeof __propDef.slots;
export default class RangeSliderGroup extends SvelteComponentTyped<RangeSliderGroupProps, RangeSliderGroupEvents, RangeSliderGroupSlots> {
}
export {};
