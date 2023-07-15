import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load({params}) {

	const {page} = params

	const posts=await fetchPostsFromContentful(+page,9,);

	return {posts,page};
	
}
