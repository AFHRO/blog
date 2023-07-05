<script lang="ts">
  import { fade } from "svelte/transition";
  import PostBody from "../../../../components/post/PostBody.svelte";
  import PostHero from "../../../../components/post/PostHero.svelte";
  import transformWordPressPost from "../../../../utils/transformWordPressPost";

  export let data: any;
</script>

<section in:fade={{ delay: 500, duration: 500 }} out:fade class="min-h-[100vh]">
  <PostHero post={transformWordPressPost(data)} />
  <PostBody content={data?.content} />
</section>

<style lang="scss">
</style>
