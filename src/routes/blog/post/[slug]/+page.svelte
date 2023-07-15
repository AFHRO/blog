<script lang="ts">
  import { fade } from "svelte/transition";
  import PostBody from "../../../../components/post/PostBody.svelte";
  import PostHero from "../../../../components/post/PostHero.svelte";
  import transformWordPressPost from "../../../../utils/transformWordPressPost";
  import PageHead from "src/components/PageHead.svelte";
  import type { Post } from "src/types/posts";
  import type { ActionData } from "./$types";

  export let data: Post;

  export let form: ActionData;

  $: post = transformWordPressPost(data);

  let { subscribed } = form || {};
</script>

<PageHead
  metaContent={{
    title: post?.title ? `${post?.title} | AHRO Blog` : "AHRO Blog",
    description: post?.excerpt,
    image: post?.featured_media,
  }}
/>

<section in:fade={{ delay: 500, duration: 500 }} out:fade class="min-h-[100vh]">
  <PostHero {post} />

  <PostBody content={data?.content} {subscribed} />
</section>

<style lang="scss">
</style>
