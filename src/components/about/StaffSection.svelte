<script lang="ts">
  import type { Staff } from "src/types/staff";
  import Container from "../Container.svelte";
  import StaffCard from "./StaffCard.svelte";

  export let staffList: Staff[];
</script>

<section class="bg-white">
  <Container>
    <div class="text-center lg:text-left lg:max-w-[70rem]">
      <h2 class="text-6xl text-primary mb-5 font-medium">
        The passionat people that drive our success
      </h2>
      <p class="mb-20 text-gray-500">
        A team of talented individuals who are passionate about advancing
        scientific knowledge. From esteemed researchers and seasoned editors to
        talented designers and meticulous proofreaders.
      </p>
    </div>
    <div
      class="grid gap-24 justify-between place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    >
      {#each staffList as staff}
        <StaffCard {staff} />
      {/each}
    </div>
  </Container>
</section>
