<script lang="ts">
  import { fade } from "svelte/transition";
  import PostBody from "../../../../components/post/PostBody.svelte";
  import PostHero from "../../../../components/post/PostHero.svelte";
  import transformWordPressPost from "../../../../utils/transformWordPressPost";
  import PageHead from "src/components/PageHead.svelte";
  import type { Post } from "src/types/posts";
  import { page } from "$app/stores";

  export let data: Post;

  /** @type {import('./$types').ActionData} */
  export let form: any;

  $: post = transformWordPressPost(data);

  let { subscribed } = form || {};

  const description =
    post?.excerpt || "Read this article on AHRO Blog: " + post?.title;
</script>

<!-- <PageHead
  metaContent={{
    title: post?.title ? `${post?.title} | AHRO Blog` : "AHRO Blog",
    description:
      post?.excerpt || "Read this article on AHRO Blog: " + post?.title,
    image: post?.featured_media,
  }}
/> -->
<svelte:head>
  <title>{post.title}</title>
  <meta
    name="description"
    content={"Read this article on AHRO Blog: " + post?.title}
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={post.featured_media} />
  <meta property="og:url" content={$page.url.pathname} />

  <meta name="author" content={post.author} />
  <meta name={"description"} content={description} />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={post.featured_media} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ahro" />
</svelte:head>
<section in:fade={{ delay: 500, duration: 500 }} out:fade class="min-h-[100vh]">
  <PostHero {post} />

  <PostBody content={data?.content} {subscribed} />
</section>

<style lang="scss">
</style>
