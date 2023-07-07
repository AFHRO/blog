<script lang="ts">
  import "@fontsource-variable/mulish";
  import "../app.css";

  import GlobalFooter from "src/components/GlobalFooter.svelte";
  import MobileNav from "src/components/MobileNav.svelte";

  import GlobalHeader from "src/components/GlobalHeader.svelte";
  import GTagManagerScript from "src/components/GTagManagerScript.svelte";

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
  let scrollY: any = null;

  $: hasScrolledDown =
    typeof scrollY === "number" ? Number(scrollY) > 80 : null;
</script>

<GTagManagerScript />

<svelte:window bind:scrollY />

<GlobalHeader {hasScrolledDown} {showMenu} {toggleMenu} />
<MobileNav {showMenu} />
<slot class="main min-h-[60vh]" />
<GlobalFooter />

<style lang="scss">
  :global(:root) {
    --primary-color: #0498b4;
    --primary-background-color: #f5f5f5;
    --text-black: #191a1c;
    --text-grey: #252526;
    --secondary-background-color: #f2f2f2;
    --input-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    --skeleton-background-grey: #e0e0e0;
    --input-border-grey: #d4d4d4;
  }

  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  :global(html) {
    font-size: 62.5%;
    font-family: "Mulish Variable", Geneva, Tahoma, sans-serif;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }
  :global(body) {
    line-height: 1.5;
    color: var(--text-black);
    background-color: var(--primary-background-color);
  }

  ::global(*) {
    margin: 0;
    padding: 0;
  }

  /* links */
  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  /* inputs */
  :global(input) {
    font-family: inherit;
    font-family: "Mulish Variable", sans-serif;
    letter-spacing: 3;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
    outline: none;
  }

  /* resets */
  :global(ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  :global(p) {
    margin: 0;
    padding: 0;
  }

  :global(img) {
    display: block;
    max-width: 100%;
  }

  :global(button) {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  :global(svg) {
    fill: currentColor;
  }

  :global(h1) {
    font-size: 4rem;
  }

  :global(h2) {
    font-size: 3.2rem;
  }

  :global(h3) {
    font-size: 2.4rem;
  }

  :global(h4) {
    font-size: 2.2rem;
  }

  :global(h5) {
    font-size: 2rem;
  }

  :global(h6) {
    font-size: 2rem;
  }

  :global(p) {
    font-size: 2rem;
  }

  :global(a) {
    font-size: inherit;
  }

  :global(input) {
    font-size: 2rem;
  }

  :global(button) {
    font-size: 2rem;
  }

  :global(.cols-container) {
    display: flex;
    /* flex-flow: row wrap; */
    margin-left: calc(var(--inner-gutter) * -1);
  }
</style>
