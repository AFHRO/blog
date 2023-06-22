<script lang="ts">
  import RecentArticleCard from "./RecentArticleCard.svelte";
  import type { Post } from "src/types/posts";
  import Container from "../Container.svelte";

  export let recentPosts: Post[] = [];
</script>

<section class="min-h-[400px] py-10">
  <Container class="">
    {#if !recentPosts.length}
      <div />
    {:else}
      <div class="mb-10 flex justify-between items-center">
        <h2 class="text-[3rem] font-extrabold">Latest from us</h2>
        <a href="/blog" class="text-primary-500 hover:underline text-secondary"
          >Visit the blog</a
        >
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each recentPosts as post}
          <li class="flex flex-col">
            <RecentArticleCard {post} />
          </li>
        {/each}
      </ul>
    {/if}
  </Container>
</section>
