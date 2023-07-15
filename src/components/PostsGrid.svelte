<script lang="ts">
  import type { Post } from "../types/posts";
  import Card from "./Card.svelte";
  import Pagination from "./Pagination.svelte";
  import PostsLoading from "./PostsLoading.svelte";

  export let posts: Post[] = [];
  export let loading = false;
</script>

<title>Blog</title>

<!-- {#if loading}
  <PostsLoading />
{:else if !posts.length}
  <div />
{:else}
  <section class="min-h-[60vh] my-20">
    {#each posts as post, index}
      <Card {post} {index} />
    {/each}
  </section>
{/if} -->
<section class="min-h-[60vh] my-20">
  {#each posts as post, index}
    <Card {post} {index} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 16px;
    margin-top: 100px;
    min-height: 50vh;
  }
</style>
