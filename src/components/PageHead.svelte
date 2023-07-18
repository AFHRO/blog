<script lang="ts">
  import defaultMetaContent from "src/utils/defaultMetaContent";

  interface MetaContent {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    keywords?: string | string[];
    author?: string;
  }

  export let metaContent: MetaContent | undefined = defaultMetaContent;
  metaContent = { ...defaultMetaContent, ...metaContent };

  const { title, description, keywords, image, url, author } = metaContent;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:url" content={url} />
  {#if keywords}
    {#if typeof keywords === "string"}
      <meta name="keywords" content={keywords} />
    {:else}
      <meta name="keywords" content={keywords.join(", ")} />
    {/if}
  {/if}
  <meta name="author" content={author} />
  <meta name={"description"} content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ahro" />
</svelte:head>
