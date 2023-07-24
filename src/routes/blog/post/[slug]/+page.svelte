<script lang="ts">
  import { fade } from "svelte/transition";
  import PostBody from "../../../../components/post/PostBody.svelte";
  import PostHero from "../../../../components/post/PostHero.svelte";
  import transformWordPressPost from "../../../../utils/transformWordPressPost";
  import PageHead from "src/components/PageHead.svelte";
  import type { Post } from "src/types/posts";
  import { page } from "$app/stores";
  import Notification from "src/components/Notification.svelte";
  import notify from "src/utils/notify";
  import { onMount } from "svelte";

  export let data: Post;

  /** @type {import('./$types').ActionData} */
  export let form: any;

  $: post = transformWordPressPost(data);

  let { subscribed } = form || {};
  onMount(() => {
    notify({
      message: "Subscribed!",
      description: "Thank you for joining our newsletter!",
    });

    setTimeout(() => {
      notify({
        message: "scribed!",
        description: "Thank you for joining our newsletter!",
      });
    }, 10000);
  });
</script>

<PageHead
  metaContent={{
    title: post?.title ? `${post?.title} | AHRO Blog` : "AHRO Blog",
    description:
      post?.excerpt || "Read this article on AHRO Blog: " + post?.title,
    image: post?.featured_media,
  }}
/>

<section in:fade={{ delay: 500, duration: 500 }} out:fade class="min-h-[100vh]">
  <PostHero {post} />

  <PostBody content={data?.content} />
</section>

<style lang="scss">
</style>
