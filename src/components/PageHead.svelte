<script>
  import metaContent from "src/utils/metaContent";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{metaContent.title}</title>
  <meta name="description" content={metaContent.description} />
  <!-- <meta name="keywords" content={metaContent.keywords} />
    <meta name="author" content={metaContent.author} /> -->
  <meta name="theme-color" content="#0498b4" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@sveltejs" />
  <meta name="twitter:title" content={metaContent.title} />
  <meta name="twitter:description" content={metaContent.description} />
  <meta name="twitter:image" content={metaContent.image} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={metaContent.title} />
  <meta property="og:description" content={metaContent.description} />
  <meta property="og:image" content={metaContent.image} />
  <meta property="og:url" content={metaContent.url} />
  <title>{metaContent.title}</title>
  <meta name={"description"} content={metaContent.description} />
  <meta name="twitter:title" content={metaContent.title} />
  <meta name="twitter:description" content={metaContent.description} />
  <meta property="og:title" content={metaContent.title} />
  <meta property="og:description" content={metaContent.description} />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>
