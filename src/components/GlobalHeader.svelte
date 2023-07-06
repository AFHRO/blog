<script lang="ts">
  import navLinks from "src/utils/navLinks";
  import colors from "src/utils/colors";
  import Button from "./Button.svelte";
  import Container from "./Container.svelte";
  import LogoIcon from "$lib/logo-icon.png";
  import LogoIconPrimary from "$lib/logo-icon-primary.png";
  import { PUBLIC_SITE_NAME } from "$env/static/public";
  import { page } from "$app/stores";
  import routePaths from "src/utils/routePaths";

  export let hasScrolledDown: boolean | null;

  export let toggleMenu: () => void;

  export let showMenu: boolean;

  $: isHomePage = $page.url.pathname === routePaths.home;

  $: isTransparent = isHomePage ? !hasScrolledDown : false;
  $: linksClasses = isTransparent
    ? " text-white hover:text-primary hover:underline"
    : " text-primary hover:text-primary hover:underline";
</script>

{#if typeof hasScrolledDown === "boolean" || !isHomePage}
  <div
    class={"fixed top-0 left-0 right-0 z-[60] py-10 xs:h-40 md:h-50 md:py-22  transition-all duration-300" +
      (!isTransparent ? " bg-primary lg:bg-white" : "")}
    class:lg:shadow-md={!isTransparent}
    class:sticky={!isTransparent}
  >
    <Container class="container m-auto">
      <div class="cols-container items-center flex space-x-5 justify-between">
        <a
          href="/"
          class="relative flex align-baseline xs:w-3-cols md:w-3-cols lg:w-2-cols items-center space-x-2 transition-colors duration-300 z-[99]"
          class:lg:text-primary={!isTransparent}
          class:lg:text-white={!!isTransparent}
          class:text-white={true}
        >
          <span class="sr-only">Home</span>
          <span class="w-[7rem]">
            <img src={!isTransparent ? LogoIconPrimary : LogoIcon} alt="logo" />
          </span>
          <div
            class="ml-2 text-[1.4rem] md:text-[1.7rem] font-bold w-[20rem] md:w-[25rem]"
          >
            AFRICA HEALTH RESEARCH ORGANISATION
          </div>
        </a>

        <div class="lg:w-6-cols hidden lg:block">
          <nav>
            <h2 class="sr-only">Main Navigation</h2>
            <ul
              class={"flex flex-row flex-wrap items-baseline p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-20 md:mt-0"}
            >
              {#each navLinks as link}
                <li class="ml-24 first:ml-0 mt-1 text-[1.6rem]">
                  <a
                    class={"transition-colors duration-300" + linksClasses}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              {/each}
              <li class="ml-24 first:ml-0 mt-1">
                <a href={"/"} aria-label={`Donate to ${PUBLIC_SITE_NAME}`}>
                  <Button
                    color={!isTransparent ? colors.secondary : undefined}
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

        <button
          on:click={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          class="w-[5rem] h-[5rem] rounded-lg focus:outline-none z-[99] lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="w-[5rem] h-[5rem] nav__toggle-icon"
            class:--active={showMenu}
          />
        </button>
      </div>
    </Container>
  </div>
{/if}

<style lang="scss">
  .nav__toggle-icon {
    position: relative;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 4rem;
      height: 2px;
      background-color: #fff;
      transition: all 0.2s ease-in-out;
      position: absolute;
      left: 0;
      right: 0;
    }

    &::before {
      top: 0.4rem;
    }

    &::after {
      top: 1.5rem;
    }

    &.--active {
      &::before {
        transform: rotate(45deg) translate3d(3px, 3px, 0);
      }

      &::after {
        transform: translate3d(0, -4px, 0) rotate(-45deg);
      }
    }
  }
</style>
