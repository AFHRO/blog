<script>
  import defaultMetaContent from "src/utils/defaultMetaContent";

  export let metaContent = defaultMetaContent;
  metaContent = { ...defaultMetaContent, ...metaContent };
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{defaultMetaContent.title}</title>
  <meta name="description" content={defaultMetaContent.description} />
  <!-- <meta name="keywords" content={defaultMetaContent.keywords} />
    <meta name="author" content={defaultMetaContent.author} /> -->
  <meta name="theme-color" content="#0498b4" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@sveltejs" />
  <meta name="twitter:title" content={defaultMetaContent.title} />
  <meta name="twitter:description" content={defaultMetaContent.description} />
  <meta name="twitter:image" content={defaultMetaContent.image} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={defaultMetaContent.title} />
  <meta property="og:description" content={defaultMetaContent.description} />
  <meta property="og:image" content={defaultMetaContent.image} />
  <meta property="og:url" content={defaultMetaContent.url} />
  <title>{defaultMetaContent.title}</title>
  <meta name={"description"} content={defaultMetaContent.description} />
  <meta name="twitter:title" content={defaultMetaContent.title} />
  <meta name="twitter:description" content={defaultMetaContent.description} />
  <meta property="og:title" content={defaultMetaContent.title} />
  <meta property="og:description" content={defaultMetaContent.description} />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>
