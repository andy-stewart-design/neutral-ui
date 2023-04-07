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
export type RangeSliderThumbProps = typeof __propDef.props;
export type RangeSliderThumbEvents = typeof __propDef.events;
export type RangeSliderThumbSlots = typeof __propDef.slots;
export default class RangeSliderThumb extends SvelteComponentTyped<RangeSliderThumbProps, RangeSliderThumbEvents, RangeSliderThumbSlots> {
}
export {};
