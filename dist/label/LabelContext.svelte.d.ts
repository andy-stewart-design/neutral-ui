import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        group: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            labelledby: string | undefined;
        };
    };
};
export type LabelContextProps = typeof __propDef.props;
export type LabelContextEvents = typeof __propDef.events;
export type LabelContextSlots = typeof __propDef.slots;
export default class LabelContext extends SvelteComponentTyped<LabelContextProps, LabelContextEvents, LabelContextSlots> {
}
export {};
