import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load({ url }) {
    const {searchParams} = url;

    const search=searchParams.get('search') ||undefined;

    const page=searchParams.get('page') || 1;

    const postsData = await fetchPostsFromContentful(+page,9,search);

    return {...postsData, search, page};

}
