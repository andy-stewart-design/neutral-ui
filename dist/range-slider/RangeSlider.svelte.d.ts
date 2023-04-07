import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: number;
        min: number;
        max: number;
        step: number;
        bigStep: number;
        disabled?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            resetValue: () => void;
            progress: number;
            dragging: boolean;
            disabled: boolean;
        };
    };
};
export type RangeSliderProps = typeof __propDef.props;
export type RangeSliderEvents = typeof __propDef.events;
export type RangeSliderSlots = typeof __propDef.slots;
export default class RangeSlider extends SvelteComponentTyped<RangeSliderProps, RangeSliderEvents, RangeSliderSlots> {
}
export {};
