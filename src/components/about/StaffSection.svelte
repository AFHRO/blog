<script lang="ts">
  import type { Staff } from "src/types/staff";
  import Container from "../Container.svelte";
  import StaffCard from "./StaffCard.svelte";

  export let staffList: Staff[];
</script>

<section class="bg-white">
  <Container>
    <h2 class="text-6xl text-primary mb-24 text-center font-medium">
      Meet our staff
    </h2>
    <div
      class="grid gap-24 justify-between place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    >
      {#each staffList as staff}
        <StaffCard {staff} />
      {/each}
    </div>
  </Container>
</section>
