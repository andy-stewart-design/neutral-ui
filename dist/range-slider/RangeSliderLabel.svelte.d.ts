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
export type RangeSliderLabelProps = typeof __propDef.props;
export type RangeSliderLabelEvents = typeof __propDef.events;
export type RangeSliderLabelSlots = typeof __propDef.slots;
export default class RangeSliderLabel extends SvelteComponentTyped<RangeSliderLabelProps, RangeSliderLabelEvents, RangeSliderLabelSlots> {
}
export {};
