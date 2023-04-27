export interface ContextProvider {
    register: (ID: string) => void;
    group: string | undefined;
}
export declare const LIB_PREFIX = "nui";
export declare const DESCR_CONTEXT_NAME: string;
export declare const LABEL_CONTEXT_NAME: string;
export declare const RADIO_GROUP_CONTEXT: string;
export declare const NUMBER_GROUP_CONTEXT: string;
export declare const SWITCH_CONTEXT: string;
export declare const SLIDER_CONTEXT: string;
export declare const LISTBOX_CONTEXT: string;
export declare const getID: () => string;
export declare const srOnly = "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;";
