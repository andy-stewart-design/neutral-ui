import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeSliderProgressProps = typeof __propDef.props;
export type RangeSliderProgressEvents = typeof __propDef.events;
export type RangeSliderProgressSlots = typeof __propDef.slots;
export default class RangeSliderProgress extends SvelteComponentTyped<RangeSliderProgressProps, RangeSliderProgressEvents, RangeSliderProgressSlots> {
}
export {};
