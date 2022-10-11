export interface NavigateBack {
	goBack(): void
}

export function canNavigateBack(object: any) {
	return 'goBack' in object
}
