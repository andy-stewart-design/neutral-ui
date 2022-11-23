export type SpinbuttonRole = 'label' | 'description' | 'error';

export interface NumberAPI {
	ariaID: string;
	parentID: string;
	register: (role: SpinbuttonRole, id: string) => void;
	incValue: (e: MouseEvent) => void;
	decValue: (e: MouseEvent) => void;
}
