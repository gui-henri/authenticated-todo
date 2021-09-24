import { writable } from 'svelte/store'

export const token = writable("")
export const userName = writable("")
export const userImage = writable("")
export const userTodos = writable([])