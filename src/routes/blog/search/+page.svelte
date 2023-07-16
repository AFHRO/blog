<script lang="ts">
  import PostsContainer from "../../../components/PostsContainer.svelte";

  export let data: any;

  $: currentPage = data?.page ?? 1;

  $: totalCount = data?.total ?? 1;

  $: posts = data?.posts ?? [];
</script>

<PostsContainer {posts} {currentPage} {totalCount} />
