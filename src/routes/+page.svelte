<script lang="ts">
  import GlobalFooter from "src/components/GlobalFooter.svelte";
  import HeroSection from "src/components/home/HeroSection.svelte";
  import RecentArticlesSection from "src/components/home/RecentArticlesSection.svelte";

  export let data: any;

  const { recentPosts } = data;
</script>

<HeroSection />
<main class="bg-white">
  <RecentArticlesSection {recentPosts} />
</main>
<GlobalFooter />
