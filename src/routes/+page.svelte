<script lang="ts">
  import HeroSection from "src/components/home/HeroSection.svelte";
  import JournalsSection from "src/components/home/JournalsSection.svelte";
  import PartnersSection from "src/components/home/PartnersSection.svelte";
  import RecentArticlesSection from "src/components/home/RecentArticlesSection.svelte";

  export let data: any;

  const { recentPosts } = data;
</script>

<HeroSection />

<main class="bg-white py-[5rem] min-h-[100vh]">
  {#if recentPosts.length}
    <RecentArticlesSection {recentPosts} />
  {/if}
  <JournalsSection />
  <PartnersSection />
</main>
