import { PUBLIC_BREVO_API_KEY, PUBLIC_BREVO_BLOG_LIST_ID } from '$env/static/public';
import type { Actions } from '@sveltejs/kit';



export const actions:Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request?.formData();
            const email = formData.get('email');

            if (!email) return;

            const res = await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    'api-key': PUBLIC_BREVO_API_KEY
                },
                body: JSON.stringify({
                    email,
                    listIds: [PUBLIC_BREVO_BLOG_LIST_ID]
                })
            });


            if ([200,201].includes(res.status)) {
                return {
                    subscribed: true,
                }
            }
        } catch (e) {
            return {
                subsribed: false
            }

        }

    }
};



