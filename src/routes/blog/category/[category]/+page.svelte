<script lang="ts">
  import PostsContainer from "src/components/PostsContainer.svelte";
  import type { Post } from "src/types/posts";
  import { afterNavigate } from "$app/navigation";
  import fetchPosts from "src/utils/fetchPosts";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { category } = data || {};

  $: posts = data?.posts || [];
  $: totalCount = data?.total;
</script>

{#key posts}
  <PostsContainer {posts} {totalCount} currentPage={data.page} {category} />
{/key}
