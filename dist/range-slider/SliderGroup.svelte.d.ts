import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        height?: string | undefined;
        value: number;
        min?: string | number | undefined;
        max?: string | number | undefined;
        step?: string | number | undefined;
        bigStep?: string | number | undefined;
        disabled?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
        default: {
            dragging: boolean;
        };
    };
};
export type SliderGroupProps = typeof __propDef.props;
export type SliderGroupEvents = typeof __propDef.events;
export type SliderGroupSlots = typeof __propDef.slots;
export default class SliderGroup extends SvelteComponentTyped<SliderGroupProps, SliderGroupEvents, SliderGroupSlots> {
}
export {};
