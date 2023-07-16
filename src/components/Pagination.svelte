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

  export let totalCount: number = 9;

  const totalPages = Math.ceil(totalCount / 9);

  const getPageNumbers = () => {
    const curr = Number(currentPage);
    const pageRange = 2; // Number of page numbers to display on each side of the current page
    const pageNumbers = [];
    let startPage = Math.max(1, curr - pageRange);
    let endPage = Math.min(totalPages, curr + pageRange);

    if (curr - startPage < pageRange) {
      endPage = Math.min(
        endPage + (pageRange - (curr - startPage)),
        totalPages
      );
    }

    if (endPage - curr < pageRange) {
      startPage = Math.max(startPage - (pageRange - (endPage - curr)), 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

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

  let numbers = getPageNumbers();
</script>

<div class="flex justify-center my-20 text-3xl">
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
      class:font-bold={page === Number(currentPageVal)}
      class:text-4xl={page === Number(currentPageVal)}
      href={getUrl(page)}
      aria-label={`Go to page ${page}`}
    >
      <button>{page}</button></a
    >
  {/each}
  {#if Number(currentPageVal) < totalPages}
    <a
      href={getUrl(Number(currentPageVal || 0) + 1)}
      class="btn-dir"
      aria-label="Go to next page"
    >
      <button
        aria-label="Next"
        disabled={Number(currentPageVal) === totalPages}
      >
        <ChevronRight /></button
      >
    </a>
  {/if}
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
      display: flex;
    }
  }
</style>
