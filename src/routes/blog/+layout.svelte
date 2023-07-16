<script lang="ts">
  import "@fontsource-variable/mulish";
  import Header from "src/components/Header.svelte";
  import { fade } from "svelte/transition";

  export let data: any;

  const { categories } = data || {};
</script>

<Header {categories} />
<main class="main-wrapper min-h-[70vh] pt-20" in:fade={{ delay: 0 }}>
  <slot class="main" />
</main>
