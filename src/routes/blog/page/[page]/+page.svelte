<script lang="ts">
  import PostsContainer from "src/components/PostsContainer.svelte";

  export let data: any;

  $: posts = data?.posts ?? [];

  $: page = data?.page ?? 1;
</script>

{#key posts}
  <PostsContainer {posts} currentPage={page} category={undefined} />
{/key}
