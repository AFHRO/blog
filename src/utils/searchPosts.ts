import { PUBLIC_BLOG_URL } from "$env/static/public";
import transformWordPressPost from "./transformWordPressPost";

const searchPosts = async (searchQuery?: string, page: number = 1) => {
  const response = await fetch(
    `${PUBLIC_BLOG_URL}/posts?_embed&page=${page}&per_page=9${
      searchQuery ? `&search=${searchQuery}` : ""
    }`
  );
  const posts = await response.json();
  return posts.map(transformWordPressPost);
};

export default searchPosts;
