<script lang="ts">
  import { onMount } from "svelte";
  import PostsContainer from "../../components/PostsContainer.svelte";
  import type { Post } from "../../types/posts";
  import fetchPosts from "../../utils/fetchPosts";
  import PageHead from "src/components/PageHead.svelte";

  let posts: Post[] = [];
  let loading = false;

  onMount(async () => {
    posts = [];
    loading = true;
    posts = await fetchPosts();
    loading = false;
  });
</script>

<PageHead
  metaContent={{
    title: "AHRO Blog",
    description: "Read AHRO's latest articles on global health.",
  }}
/>
<PostsContainer {posts} {loading} />
