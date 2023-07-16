<script lang="ts">
  import htmlCodeToSymbol from "src/utils/htmlCodeToSymbol";
  import { onMount } from "svelte";
  import { PUBLIC_BLOG_URL } from "$env/static/public";
  import type { Post } from "src/types/posts";
  import routePaths from "src/utils/routePaths";

  export let post: Post;

  const postTitle =
    post.title.length > 90 ? `${post.title.substring(0, 50)}...` : post.title;
</script>

<a
  href={`${routePaths.blogPost}/${post.slug}`}
  class="rounded-lg h-full hover:scale-[1.02] transition-all"
>
  <img
    class="h-[30rem] w-full object-cover rounded-t-lg border border-gray-200"
    src={post.featured_media}
    alt={post.title}
  />
  <div>
    <h3 class="text-3xl text-primary font-semibold my-5 hover:underline">
      {@html htmlCodeToSymbol(postTitle)}
    </h3>

    <p class="text-md">
      {post.date}
    </p>
  </div>
</a>
