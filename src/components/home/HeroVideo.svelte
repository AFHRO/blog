<script lang="ts">
  import { onMount } from "svelte";
  import { Cloudinary } from "@cloudinary/url-gen";
  import { PUBLIC_CLOUDINARY_CLOUD_NAME } from "$env/static/public";

  let videoUrl: string;

  onMount(() => {
    const cloudinaryInstance = new Cloudinary({
      cloud: {
        cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME,
      },
    });
    const video = cloudinaryInstance
      .video("hero-alt_xvpfey")
      .format("auto")
      .quality("auto");

    videoUrl = video.toURL();
  });
</script>

<video
  aria-hidden="true"
  muted
  class="relative z-20 h-full w-full object-cover transition-opacity duration-300 pointer visible opacity-100"
  autoplay
  loop
  playsinline
  ><source src={videoUrl} type="video/mp4" /> Your browser does not support the video
  tag.
</video>
