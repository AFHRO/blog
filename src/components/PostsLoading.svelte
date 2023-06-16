<script>
  import CardSkeleton from "./CardSkeleton.svelte";
</script>

<div class="posts-loading">
  {#each [1, 2, 3] as item}
    <CardSkeleton />
  {/each}
</div>

<style lang="scss">
  .posts-loading {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 16px;
    margin-top: 100px;
    min-height: 50vh;
  }
</style>
