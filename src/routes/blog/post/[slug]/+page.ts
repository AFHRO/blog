import { error } from "@sveltejs/kit";
import fetchPostBySlug from "../../../../utils/fetchPostBySlug.js";

export const load = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug);

  if(!post) {
    throw error(404, 'Post not found');
  }

  return post;
};
