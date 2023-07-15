<script lang="ts">
  import PostsContainer from "src/components/PostsContainer.svelte";
  import type { Post } from "src/types/posts";
  import { afterNavigate } from "$app/navigation";
  import fetchPosts from "src/utils/fetchPosts";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { category } = data || {};

  $: posts = data?.posts || [];

  // let posts: Post[] = [];
  let loading = false;
</script>

{#key posts}
  <PostsContainer {posts} {loading} currentPage={data.page} {category} />
{/key}
