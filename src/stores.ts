import { writable } from "svelte/store";
import type { Notification } from "./types/notification";

export const defaultNotification: Notification = {
    message: '',
    description: '',
    type: '',
    show: false,
    duration: 3000,
}

export const notification=writable(defaultNotification);


