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
export type SliderProgressProps = typeof __propDef.props;
export type SliderProgressEvents = typeof __propDef.events;
export type SliderProgressSlots = typeof __propDef.slots;
export default class SliderProgress extends SvelteComponentTyped<SliderProgressProps, SliderProgressEvents, SliderProgressSlots> {
}
export {};
