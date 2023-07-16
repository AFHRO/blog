import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load({params}) {

	const {page} = params

	const postsData=await fetchPostsFromContentful(+page,9,);

	const {posts,total}=postsData;

	return {posts,total,page};
	
}
