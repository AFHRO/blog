import fetchPosts from "src/utils/fetchPosts";

export async function load() {
  const recentPosts = await fetchPosts(1, 3);

  if(!recentPosts) {
    return {
      recentPosts: [],
    }
  }
  return {
    recentPosts,
  };
}


