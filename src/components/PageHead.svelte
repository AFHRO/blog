<script lang="ts">
  import defaultMetaContent from "src/utils/defaultMetaContent";

  interface MetaContent {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    keywords?: string | string[];
  }

  export let metaContent: MetaContent | undefined = defaultMetaContent;
  metaContent = { ...defaultMetaContent, ...metaContent };

  const { title, description, keywords, image, url } = metaContent;
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- <meta name="keywords" content={keywords} />
    <meta name="author" content={author} /> -->
  <meta name="theme-color" content="#0498b4" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@sveltejs" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:url" content={url} />
  <title>{title}</title>
  <meta name={"description"} content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>
