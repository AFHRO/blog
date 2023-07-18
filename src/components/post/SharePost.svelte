<script lang="ts">
  import { page } from "$app/stores";
  import FacebookIcon from "../icons/FacebookIcon.svelte";
  import LinkedinIcon from "../icons/LinkedinIcon.svelte";
  import TwitterIcon from "../icons/TwitterIcon.svelte";

  let pageURL = $page.url.origin + $page.url.pathname + "/";

  let encodedUrl = encodeURIComponent(pageURL);

  const buttons = [
    {
      name: "facebook",
      url: "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl,
      Icon: FacebookIcon,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite?url=" + encodedUrl,
      Icon: LinkedinIcon,
    },
    {
      name: "twitter",
      url: "https://twitter.com/intent/tweet?url=" + encodedUrl,
      Icon: TwitterIcon,
    },
  ];
</script>

<div
  class="lg:sticky top-[26rem] mt-10 left-0 right-0 my-auto text-center lg:text-left"
>
  <p class="text-3xl lg:w-[15rem]">Share this post</p>
  <div class="mt-5 flex gap-10 justify-center lg:justify-start h-[20rem]">
    {#each buttons as { Icon, url, name }}
      <a
        href={url}
        aria-label={`Share this article on ${name}`}
        target="_blank"
      >
        <div class="block w-10">
          <Icon />
        </div>
      </a>
    {/each}
  </div>
</div>
