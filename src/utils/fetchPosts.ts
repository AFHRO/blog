
import { fetchPostsFromContentful } from "./fetchPostsFromContentful";
import fetchPostsFromWP from "./fetchPostsFromWP";

const fetchPosts = async (page: number = 1, size = 9) => {

const postsData= await fetchPostsFromContentful(page, size);

  return postsData;
  
};

export default fetchPosts;