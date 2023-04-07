import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeSliderGroupProps = typeof __propDef.props;
export type RangeSliderGroupEvents = typeof __propDef.events;
export type RangeSliderGroupSlots = typeof __propDef.slots;
export default class RangeSliderGroup extends SvelteComponentTyped<RangeSliderGroupProps, RangeSliderGroupEvents, RangeSliderGroupSlots> {
}
export {};
