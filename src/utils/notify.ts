import { defaultNotification, notification } from "src/stores"

const notify = (options: {
    message: string,
    description?: string,
    type?: string,
    show?: boolean,
    duration?: number,
}) => {

    notification.set({...defaultNotification,... options});

    // setTimeout(
    //     () => {
    //     notification.set(defaultNotification);
    //     },
    //     options.duration || 3000
    // );

}

export default notify;