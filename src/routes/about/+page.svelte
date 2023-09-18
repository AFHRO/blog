<script lang="ts">
  import PageMain from "src/components/PageMain.svelte";
  import HeroSection from "src/components/about/HeroSection.svelte";
  import StaffSection from "src/components/about/StaffSection.svelte";

  export let data: any;
</script>

<PageMain>
  <HeroSection />
  <!-- <StaffSection staffList={data?.items || []} /> -->
</PageMain>
