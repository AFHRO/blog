import { PUBLIC_BLOG_URL } from "$env/static/public";
import transformWordPressPost from "./transformWordPressPost";

const fetchPosts = async (page: number = 1, size = 9) => {
  const response = await fetch(
    `${PUBLIC_BLOG_URL}/posts?_embed&page=${page}&per_page=${size}`
  );
  const posts = await response.json();
  return posts.map(transformWordPressPost);
};

export default fetchPosts;
