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
export type ListboxButtonProps = typeof __propDef.props;
export type ListboxButtonEvents = typeof __propDef.events;
export type ListboxButtonSlots = typeof __propDef.slots;
export default class ListboxButton extends SvelteComponentTyped<ListboxButtonProps, ListboxButtonEvents, ListboxButtonSlots> {
}
export {};
