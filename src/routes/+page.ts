import fetchPosts from "src/utils/fetchPosts";

export async function load() {
  const recentPosts = await fetchPosts(1, 3);

  return {
    recentPosts,
  };
}
