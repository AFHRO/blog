<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import routePaths from "src/utils/routePaths";

  import ChevronLeft from "./icons/ChevronLeft.svelte";
  import ChevronRight from "./icons/ChevronRight.svelte";
  let currentPageVal: string | number | null = "1";

  export let currentPage: number | string = 1;

  export let category: string | undefined;

  const searchText = $page.url.searchParams.get("search");
  const getUrl = (currentPage: number) => {
    if (category)
      return `${routePaths.blog}/category/${category}?page=${currentPage}`;
    if (searchText)
      return `${routePaths.blog}/search?search=${searchText}&page=${currentPage}`;
    return `${routePaths.blog}/page/${currentPage}`;
  };

  $: currentPageVal = searchText
    ? $page.url.searchParams.get("page") || "1"
    : currentPage;

  afterNavigate(() => {
    currentPageVal = currentPage;
  });

  let numbers = [1, 2, 3, 4, 5];
  if (Number(currentPageVal) > 3) {
    numbers = [
      Number(currentPageVal) - 2,
      Number(currentPageVal) - 1,
      Number(currentPageVal),
      Number(currentPageVal) + 1,
      Number(currentPageVal) + 2,
    ];
  }
</script>

<div class="flex justify-center my-20">
  {#if Number(currentPageVal) > 1}
    <a
      href={getUrl(Number(currentPageVal) - 1)}
      class="btn-dir"
      aria-label="Go to previous page"
    >
      <button aria-label="Previous" disabled={Number(currentPageVal) === 1}>
        <ChevronLeft />
      </button>
    </a>
  {/if}
  {#each numbers as page}
    <a
      class={page === Number(currentPageVal) ? "active" : ""}
      href={getUrl(page)}
    >
      <button>{page}</button></a
    >
  {/each}

  <a
    href={getUrl(Number(currentPageVal || 0) + 1)}
    class="btn-dir"
    aria-label="Go to next page"
  >
    <button aria-label="Next" disabled={Number(currentPageVal) === 5}
      ><ChevronRight /></button
    >
  </a>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 20px;
  }

  button {
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    user-select: none;
    font-size: 18px;
    color: var(--text-black);
    background: none;
    outline: none;
    border: none;
  }

  .active {
    button {
      color: var(--primary-color);
    }
  }

  .btn-dir {
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;

    button {
      font-size: 1rem;
      display: flex;
    }
  }
</style>
