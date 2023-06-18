<script lang="ts">
  import type { Post } from "src/types/posts";
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import searchPosts from "../../../utils/searchPosts";
  import PostsContainer from "../../../components/PostsContainer.svelte";
  let pageNumber: any = 1;

  // Access and use the query parameters

  let searchText: any = "";

  let posts: Post[] = [];
  let loading = false;

  $: searchText = $page.url.searchParams.get("search");

  $: pageNumber = $page.url.searchParams.get("page") || 1;

  afterNavigate(async () => {
    posts = [];
    loading = true;
    posts = await searchPosts(searchText, pageNumber);
    loading = false;
  });
</script>

<PostsContainer {posts} {loading} currentPage={pageNumber} />
