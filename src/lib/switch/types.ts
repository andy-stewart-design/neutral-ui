export interface SwitchAPI {
	ariaID: string;
	updateValue: () => void;
	handleKeydown: (e: KeyboardEvent) => void;
}
