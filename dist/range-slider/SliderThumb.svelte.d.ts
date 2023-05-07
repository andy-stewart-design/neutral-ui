import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SliderThumbProps = typeof __propDef.props;
export type SliderThumbEvents = typeof __propDef.events;
export type SliderThumbSlots = typeof __propDef.slots;
export default class SliderThumb extends SvelteComponentTyped<SliderThumbProps, SliderThumbEvents, SliderThumbSlots> {
}
export {};
