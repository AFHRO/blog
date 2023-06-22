<script lang="ts">
  import GlobalFooter from "src/components/GlobalFooter.svelte";
  import HeroSection from "src/components/home/HeroSection.svelte";
  import JournalsSection from "src/components/home/JournalsSection.svelte";
  import RecentArticlesSection from "src/components/home/RecentArticlesSection.svelte";
  import { afterNavigate } from "$app/navigation";

  export let data: any;

  const { recentPosts } = data;

  afterNavigate(() => {
    document.getElementById("page")?.scrollTo(0, 0);
  });

  let scrollY: any = 0;
</script>

<svelte:window bind:scrollY />
<HeroSection {scrollY} />

<main class="bg-white py-[5rem]">
  <RecentArticlesSection {recentPosts} />
  <JournalsSection />
</main>
<GlobalFooter />
