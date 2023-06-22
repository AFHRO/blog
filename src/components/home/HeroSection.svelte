<script lang="ts">
  import { onMount } from "svelte";
  import heroVideo from "$lib/hero-alt.mp4";
  import heroImage from "$lib/hero-image.png";
  import LogoSvg from "src/components/icons/LogoSvg.svelte";
  import Container from "src/components/Container.svelte";
  import Button from "src/components/Button.svelte";
  import colors from "src/utils/colors";

  let navLinks = [
    { text: "About", href: "/" },
    { text: "Services", href: "/" },
  ];

  export let scrollY: number | null = null;

  onMount(() => {
    const video: any = document.getElementById("background-video");
    if (video) {
      video.play();
    }
    // scroll to top on page load
    window.scrollTo(0, 0);
  });

  $: hasScrolledDown = Number(scrollY) > 80;

  $: linksClasses = hasScrolledDown
    ? " text-primary hover:text-primary"
    : " text-white hover:text-primary";

  $: ctaBorderClasses = hasScrolledDown ? " border-primary" : " border-white";
</script>

<header class="hero ui-hero theme-dark-gray">
  <div class="theme-light-gray relative h-full w-full">
    <div class="'w-full h-full absolute top-0 right-0 bottom-0 left-0 z-10">
      <div class="w-full h-full">
        <img
          src={heroImage}
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
    <video
      aria-hidden="true"
      muted
      class="relative z-20 h-full w-full object-cover transition-opacity duration-300 pointer visible opacity-100"
      autoplay
      loop
      playsinline
      ><source src={heroVideo} type="video/mp4" /> Your browser does not support
      the video tag.
    </video>
  </div>

  <div
    class={"fixed top-0 left-0 right-0 z-[60] py-10 xs:h-40 md:h-50 md:py-22 theme-dark-gray transition-all duration-300" +
      (hasScrolledDown ? " bg-white" : "")}
  >
    <div class="container m-auto">
      <div class="cols-container items-center flex space-x-5 justify-between">
        <a
          href="/"
          class="relative flex align-baseline xs:w-3-cols md:w-3-cols lg:w-2-cols"
        >
          <LogoSvg invertColor={!hasScrolledDown} />
        </a>
        <div class="hidden md:visible lg:w-6-cols lg:block">
          <nav>
            <h2 class="sr-only">Main Navigation</h2>
            <ul class={"flex flex-row flex-wrap items-baseline"}>
              {#each navLinks as link}
                <li class="ml-24 first:ml-0 mt-1">
                  <a
                    class={"transition-colors duration-300" + linksClasses}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              {/each}
              <li class="ml-24 first:ml-0 mt-1">
                <a href={"/"}>
                  <Button
                    color={hasScrolledDown ? colors.secondary : undefined}
                    showLinkArrow
                    size="sm"
                    variant="secondary"
                  >
                    Donate
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div
    class="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.8)]"
  />

  <div class="container absolute bottom-5 md:bottom-10 left-0 right-0 m-auto">
    <Container class="cols-container container">
      <div
        class="relative z-40 xs:w-6-cols md:w-8-cols lg:ml-2-cols lg:w-8-cols"
      >
        <h1 class="text-white font-bold">
          Championing the <span class="text-secondary">One Health</span> agenda
        </h1>
        <p class="text-white mt-5">
          We are a global health research institute that aims to improve the
          health of people and their environments, through high-quality research
          and capacity building.
        </p>
        <div class="mt-10">
          <a href="/donation"
            ><Button showLinkArrow size="lg" variant="primary"
              >Learn more</Button
            >
          </a>
        </div>
      </div></Container
    >
  </div>
</header>

<style>
  .hero {
    position: relative;
    height: 100vh;
  }

  h1 {
    font-size: clamp(2.5rem, 5vmax, 6rem);
    line-height: 1.1;
  }

  .logo {
    height: 64px;
    width: auto;
    margin-bottom: 24px;
  }

  .nav-link {
    color: #fff;
    margin-right: 16px;
    transition: color 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: #ccc;
  }
</style>
