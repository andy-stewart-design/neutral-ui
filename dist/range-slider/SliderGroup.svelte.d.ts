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
export type SliderGroupProps = typeof __propDef.props;
export type SliderGroupEvents = typeof __propDef.events;
export type SliderGroupSlots = typeof __propDef.slots;
export default class SliderGroup extends SvelteComponentTyped<SliderGroupProps, SliderGroupEvents, SliderGroupSlots> {
}
export {};
