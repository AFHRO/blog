<script lang="ts">
  import "@fontsource-variable/mulish";
  import Footer from "src/components/Footer.svelte";
  import Header from "src/components/Header.svelte";
  import { fade } from "svelte/transition";
</script>

<Header />
<main class="main-wrapper" in:fade={{ delay: 0 }}>
  <slot class="main" />
</main>



<style lang="scss">
  .main-wrapper {
    padding-top: 100px;
    @media (min-width: 768px) {
      min-height: calc(100vh - 600px);
    }
  }
</style>
