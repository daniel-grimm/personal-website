import { writable } from 'svelte/store';

function determinePage() {
    const { subscribe, set, update } = writable(0);

    return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
        setHome: () => update((n) => {n + 2})
	};
}

export const page = determinePage();