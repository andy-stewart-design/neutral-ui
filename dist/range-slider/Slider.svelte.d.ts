import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number | undefined;
        sizeUnit?: "em" | "px" | "%" | "rem" | undefined;
        thumbWidth?: number | undefined;
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
        default: {
            dragging: boolean;
        };
    };
};
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
export default class Slider extends SvelteComponentTyped<SliderProps, SliderEvents, SliderSlots> {
}
export {};
