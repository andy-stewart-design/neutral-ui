import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        padding?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RangeSliderTrackProps = typeof __propDef.props;
export type RangeSliderTrackEvents = typeof __propDef.events;
export type RangeSliderTrackSlots = typeof __propDef.slots;
export default class RangeSliderTrack extends SvelteComponentTyped<RangeSliderTrackProps, RangeSliderTrackEvents, RangeSliderTrackSlots> {
}
export {};
