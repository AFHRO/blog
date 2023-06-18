<script lang="ts">
  import PostsGrid from "../components/PostsGrid.svelte";
  import type { Post } from "../types/posts";
  import Container from "./Container.svelte";

  export let posts: Post[] = [];
  export let loading = false;

  export let currentPage: number | string = 1;

  import { page } from "$app/stores";
  import { afterNavigate, goto } from "$app/navigation";
  import { onMount } from "svelte";

  let searchTextValue: any = "";

  $: searchTextInUrl = $page.url.searchParams.get("search");

  onMount(() => {
    searchTextValue = searchTextInUrl;
  });
</script>

<Container>
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
      {#if searchTextValue}
        Search results for "{searchTextInUrl}"
      {/if}
    </h1>
  </div>
  <PostsGrid {posts} {loading} {currentPage} />
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
