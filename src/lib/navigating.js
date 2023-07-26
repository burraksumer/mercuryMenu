import { derived } from 'svelte/store';
import { navigating } from '$app/stores';

let timer = null;
export const navigationIsDelayed = derived(navigating, (newValue, set) => {
	if (timer) {
		clearTimeout(timer);
	}
	if (newValue) {
		timer = setTimeout(() => {
			set(true), window.scrollTo(0, 0);
		}, 150);
	}
	set(false);
});
