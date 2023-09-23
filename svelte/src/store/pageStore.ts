import { writable, type Writable } from 'svelte/store';

export const isHome: Writable<boolean> = writable(true);
export const isExperience: Writable<boolean> = writable(false);