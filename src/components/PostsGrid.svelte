<script lang="ts">
  import type { Post } from "../types/posts";
  import Card from "./Card.svelte";

  export let posts: Post[] = [];
</script>

<title>Blog</title>

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
    min-height: 50vh;
  }
</style>
