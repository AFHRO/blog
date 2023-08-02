<script lang="ts">
  import { onMount } from "svelte";
  import Container from "src/components/Container.svelte";
  import Button from "src/components/Button.svelte";
  import HeroVideo from "./HeroVideo.svelte";
  import { PUBLIC_SITE_NAME } from "$env/static/public";

  const isPublishingSite = PUBLIC_SITE_NAME === "AHRO Scientific Publishing";

  onMount(() => {
    const video: any = document.getElementById("background-video");
    if (video) {
      video.play();
    }
  });
</script>

<header class="hero ui-hero">
  <div class="bg-video-wrapper relative lg:h-full w-full">
    <div class="'w-full h-full absolute top-0 right-0 bottom-0 left-0 z-10">
      <div class="w-full h-full">
        <img
          src={"https://res.cloudinary.com/ahromaster/image/upload/c_scale,w_1119/v1687769742/hero-image-min_imhqll.png"}
          width="1920"
          height="1080"
          alt="Two Scientists in the laboratory"
          loading="eager"
          data-nuxt-img=""
          sizes="(max-width: 744px) 100vw, (max-width: 1280px) 100vw, 100vw"
          aria-hidden="false"
          class="ratio-content h-full w-full object-cover"
        />
      </div>
    </div>
    <HeroVideo />
  </div>

  <div
    class="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.7)]"
  />

  <div class="container absolute bottom-[15vh] left-0 right-0 m-auto">
    <Container class="cols-container container">
      <div
        class="relative z-40 xs:w-6-cols md:w-8-cols lg:ml-2-cols lg:w-8-cols lg:max-w-[100rem]"
      >
        {#if isPublishingSite}
          <h1 class="text-white font-bold">
            Empowering Scientific Discoveries
          </h1>
        {:else}
          <h1 class="text-white font-bold">
            Championing the <span class="text-secondary">One Health</span> agenda
          </h1>
        {/if}

        <p class="text-white mt-5">
          {isPublishingSite
            ? " Home to Africa Health Research Organization and AHRO Care Agency, we champion global health. With 25+ indexed journals, our double-blind peer-review process ensures excellence."
            : "We are a global health research institute that aims to improve the health of people and their environments, through high-quality research and capacity building."}
        </p>
        <div class="mt-10">
          <a href="/" aria-label={`Learn more about ${PUBLIC_SITE_NAME}`}
            ><Button showLinkArrow size="lg" variant="primary"
              >Learn more</Button
            >
          </a>
        </div>
      </div>
    </Container>
  </div>
</header>

<style>
  .hero {
    position: relative;
  }
  .bg-video-wrapper {
    height: 100vh;
    @media screen and (min-width: 1024px) {
    }
    width: 100%;
    overflow: hidden;
  }
  header {
    height: 100vh;
  }

  h1 {
    font-size: clamp(2.5rem, 5vmax, 6rem);
    line-height: 1.1;
  }
</style>
