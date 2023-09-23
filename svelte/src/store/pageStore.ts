import { writable, type Writable } from 'svelte/store';

export const isHome: Writable<boolean> = writable(true);
export const isProjects: Writable<boolean> = writable(false);
export const isCertifications: Writable<boolean> = writable(false);
export const isSkills: Writable<boolean> = writable(false);
