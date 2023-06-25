<script lang="ts">
  let showMenu = false;
  import { page } from "$app/stores";
  import LogoIconSvg from "src/components/icons/LogoIconSvg.svelte";

  let navLinks = [
    { text: "About", href: "/" },
    { text: "Services", href: "/" },
    { text: "Publishing", href: "/publishing" },
  ];

  function toggleMenu() {
    showMenu = !showMenu;
  }

  export let scrollY: number | null = null;
  $: hasScrolledDown = Number(scrollY) > 80;

  $: currentPath = $page.url.pathname;
</script>

<nav class="bg-white border-gray-20">
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center text-primary w-[5rem]">
      <LogoIconSvg />
    </a>
    <button
      on:click={toggleMenu}
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
    <div
      class:hidden={showMenu}
      class="hidden w-full md:block md:w-auto"
      id="navbar-default"
    >
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:bg-white"
      >
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100"
              class:text-white={currentPath === link.href}
              class:bg-primary={currentPath === link.href}
              class:text-primary={currentPath !== link.href}
              >{link.text}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
<slot />
