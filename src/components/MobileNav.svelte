<script lang="ts">
  import colors from "src/utils/colors";
  import Button from "./Button.svelte";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import navLinks from "src/utils/navLinks";
  import Container from "./Container.svelte";

  export let showMenu: boolean;

  $: links = showMenu ? navLinks : [];
</script>

<div
  class="fixed w-full bg-primary transition-all duration-150 z-50 top-0 bottom-0 left-0 right-0"
  id="navbar--mobile"
  class:h-[0]={!showMenu}
  class:h-[100.9vh]={showMenu}
>
  <Container class="w-full h-full">
    <ul class="flex flex-col items-center justify-center space-y-10 h-full">
      {#each links as link, index}
        <li
          class="w-full mt-4 text-white"
          in:fly={{ delay: (index + 1) * 200 }}
          out:fly={{ delay: (index + 1) * 2 }}
        >
          <a href={link.href}>
            {link.text}
          </a>
        </li>
      {/each}
      {#if showMenu}
        <li
          class="w-full mt-[5rem]"
          in:fly={{ delay: (links.length + 1) * 200 }}
          out:fly={{ delay: (links.length + 1) * 2 }}
        >
          <a href={"/"}>
            <Button showLinkArrow size="sm" variant="secondary" block>
              Donate
            </Button>
          </a>
        </li>
      {/if}
    </ul></Container
  >
</div>
