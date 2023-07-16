import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load({params,url}) {

	const {category} = params;

	const {searchParams} = url;

	const page=searchParams.get('page')||1;

	const postsData=await fetchPostsFromContentful(+page,9,undefined,category);

	const {posts,total}=postsData;






	return {posts, total, page,category};
	
}
