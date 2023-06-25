<script lang="ts">
  import navLinks from "src/utils/navLinks";
  import LogoIconSvg from "./icons/LogoIconSvg.svelte";
  import colors from "src/utils/colors";
  import Button from "./Button.svelte";

  export let hasScrolledDown: boolean | null;

  export let toggleMenu: () => void;

  $: linksClasses = hasScrolledDown
    ? " text-primary hover:text-primary hover:underline"
    : " text-white hover:text-primary hover:underline";
</script>

{#if typeof hasScrolledDown === "boolean"}
  <div
    class={"fixed top-0 left-0 right-0 z-[60] py-10 xs:h-40 md:h-50 md:py-22  transition-all duration-300" +
      (hasScrolledDown ? " bg-primary lg:bg-white" : "")}
    class:lg:shadow-md={hasScrolledDown}
  >
    <div class="container m-auto">
      <div class="cols-container items-center flex space-x-5 justify-between">
        <a
          href="/"
          class="relative flex align-baseline xs:w-3-cols md:w-3-cols lg:w-2-cols items-center space-x-2 transition-colors duration-300 z-[99]"
          class:lg:text-primary={hasScrolledDown}
          class:lg:text-white={!hasScrolledDown}
          class:text-white={true}
        >
          <span class="sr-only">Home</span>
          <span class="w-[7rem]">
            <LogoIconSvg />
          </span>
          <div class="ml-2 text-[1.7rem] font-bold w-[25rem]">
            AFRICA HEALTH RESEARCH ORGANISATION
          </div>
        </a>

        <div class="lg:w-6-cols hidden lg:block">
          <nav>
            <h2 class="sr-only">Main Navigation</h2>
            <ul
              class={"flex flex-row flex-wrap items-baseline p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0"}
            >
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

        <button
          on:click={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-[99] lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>
{/if}
