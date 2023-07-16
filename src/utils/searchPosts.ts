import { fetchPostsFromContentful } from "./fetchPostsFromContentful";
import fetchPostsFromWP from "./fetchPostsFromWP";


const searchPosts = async (searchQuery?: string, page: number = 1) => {
  
  const postsData= await fetchPostsFromContentful(page, 9, searchQuery);

  return postsData;
};

export default searchPosts;
