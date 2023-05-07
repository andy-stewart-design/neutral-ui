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
export type SliderTrackProps = typeof __propDef.props;
export type SliderTrackEvents = typeof __propDef.events;
export type SliderTrackSlots = typeof __propDef.slots;
export default class SliderTrack extends SvelteComponentTyped<SliderTrackProps, SliderTrackEvents, SliderTrackSlots> {
}
export {};
