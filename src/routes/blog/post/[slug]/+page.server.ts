import { PUBLIC_BREVO_API_KEY, PUBLIC_BREVO_BLOG_LIST_ID } from '$env/static/public';
import { error, type Actions } from '@sveltejs/kit';
import fetchPostBySlug from 'src/utils/fetchPostBySlug.js';


export const load = async ({ params }) => {
    const post = await fetchPostBySlug(params.slug);
  
    if(!post) {
      throw error(404, 'Post not found');
    }
  
    return post;
  };

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
                    listIds: [Number(PUBLIC_BREVO_BLOG_LIST_ID)]
                })
            });

            if ([200,201].includes(res.status)) {
                return {
                    subscribed: true,
                }
            }
        } catch (e) {
            return {
                subsribed: false,
            }

        }

    }
};



