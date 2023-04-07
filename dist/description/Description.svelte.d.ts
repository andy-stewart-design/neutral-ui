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
export type DescriptionProps = typeof __propDef.props;
export type DescriptionEvents = typeof __propDef.events;
export type DescriptionSlots = typeof __propDef.slots;
export default class Description extends SvelteComponentTyped<DescriptionProps, DescriptionEvents, DescriptionSlots> {
}
export {};
