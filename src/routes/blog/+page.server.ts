import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load() {



	const postsData=await fetchPostsFromContentful(1,9,);

	const {posts,total}=postsData;

	return {posts,total};
	
}
