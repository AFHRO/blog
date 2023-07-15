import { fetchPostsFromContentful } from 'src/utils/fetchPostsFromContentful.js';

export async function load({params,url}) {

	const {category} = params;

	const {searchParams} = url;

	const page=searchParams.get('page')||1;

	const posts=await fetchPostsFromContentful(+page,9,undefined,category);






	return {posts,page,category};
	
}
