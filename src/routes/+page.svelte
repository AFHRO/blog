<script lang="ts">
  import GlobalFooter from "src/components/GlobalFooter.svelte";
  import HeroSection from "src/components/home/HeroSection.svelte";
  import JournalsSection from "src/components/home/JournalsSection.svelte";
  import RecentArticlesSection from "src/components/home/RecentArticlesSection.svelte";

  export let data: any;

  const { recentPosts } = data;
</script>

<HeroSection />
<main class="bg-white py-[5rem]">
  <RecentArticlesSection {recentPosts} />
  <JournalsSection />
</main>
<GlobalFooter />
