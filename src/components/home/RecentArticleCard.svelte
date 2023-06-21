<script lang="ts">
  import htmlCodeToSymbol from "src/utils/htmlCodeToSymbol";
  import { onMount } from "svelte";
  import { PUBLIC_BLOG_URL } from "$env/static/public";
  import type { Post } from "src/types/posts";

  export let post: Post;
  let categoryName = "";

  const postTitle =
    post.title.length > 90 ? `${post.title.substring(0, 50)}...` : post.title;

  onMount(async () => {
    const categoryId = post.categories[0];
    let res = await fetch(`${PUBLIC_BLOG_URL}/categories/${categoryId}`);
    const category = await res.json();

    categoryName = category.name;

    // break at 10th character
    categoryName =
      categoryName.length > 15
        ? `${categoryName.substring(0, 15)}...`
        : categoryName;
  });
</script>

<a href={`/blog/post/${post.slug}`} class="rounded-lg h-full">
  <img
    class="h-[30rem] w-full object-cover rounded-t-lg border border-gray-200"
    src={post.featured_media}
    alt={post.title}
  />
  <div>
    <h3 class="text-3xl font-semibold my-5 hover:underline">
      {@html htmlCodeToSymbol(postTitle)}
    </h3>

    <p class="text-md">
      {post.date}
    </p>
  </div>
</a>
