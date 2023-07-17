<script lang="ts">
  import PostsContainer from "../../components/PostsContainer.svelte";
  import PageHead from "src/components/PageHead.svelte";

  export let data: any;

  $: posts = data?.posts ?? [];
  $: totalCount = data?.total;
</script>

<PageHead
  metaContent={{
    title: "AHRO Blog",
    description: "Read AHRO's latest articles on global health.",
  }}
/>
<PostsContainer {posts} category={undefined} {totalCount} />
