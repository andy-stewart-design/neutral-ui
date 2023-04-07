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
            describedby: string | undefined;
        };
    };
};
export type DescriptionContextProps = typeof __propDef.props;
export type DescriptionContextEvents = typeof __propDef.events;
export type DescriptionContextSlots = typeof __propDef.slots;
export default class DescriptionContext extends SvelteComponentTyped<DescriptionContextProps, DescriptionContextEvents, DescriptionContextSlots> {
}
export {};
