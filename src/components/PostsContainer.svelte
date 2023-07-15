<script lang="ts">
  import PostsGrid from "../components/PostsGrid.svelte";
  import type { Post } from "../types/posts";
  import Container from "./Container.svelte";

  export let posts: Post[] = [];
  export let loading = false;

  export let currentPage: number | string = 1;

  export let category: string | undefined;

  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Pagination from "./Pagination.svelte";

  let searchTextValue: any = "";

  $: searchTextInUrl = $page.url.searchParams.get("search");

  onMount(() => {
    searchTextValue = searchTextInUrl;
  });
</script>

<Container class="my-20">
  <form
    on:submit|preventDefault={(e) => {
      e.preventDefault();

      goto(`/blog/search?search=${searchTextValue}`, {
        replaceState: true,
      });
    }}
  >
    <input placeholder="Search..." bind:value={searchTextValue} />
  </form>
  <div class="container__heading">
    <h1>
      {#if searchTextInUrl}
        Search results for "{searchTextInUrl}"
      {/if}
    </h1>
  </div>
  <PostsGrid {posts} {loading} />
  {#if posts.length >= 9}
    <Pagination {currentPage} {category} />
  {/if}
</Container>

<style>
  input {
    box-sizing: border-box;
    width: 100%;
    max-width: 300px;
    padding: 16px;
    border: none;
    border-radius: 16px;
    font-size: 16px;
    color: var(--text-black);
    box-shadow: var(--input-box-shadow);
  }
  .container__heading {
    margin-top: 32px;
    margin-bottom: 16px;
  }
</style>
