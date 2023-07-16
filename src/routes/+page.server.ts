import fetchPosts from "src/utils/fetchPosts";

export async function load() {
  const recentPostsData = await fetchPosts(1, 3);
  const {posts:recentPosts}=recentPostsData;
  if(!recentPosts) {
    return {
      recentPosts: [],
    }
  }
  return {
    recentPosts,
  };
}


