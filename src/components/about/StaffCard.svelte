<script lang="ts">
  import type { Staff } from "src/types/staff";

  export let staff: Staff;
</script>

<div class="flex flex-col items-center pb-10">
  <img
    class="w-[20rem] h-[20rem] rounded-full shadow-lg"
    src={staff.image.url}
    alt={staff.name ? staff.name : "AHRO Staff"}
  />
  <h5 class="mb-4 mt-20 text-3xl font-medium text-secondary text-center">
    {staff.name}
  </h5>
  <span class="text-2xl text-gray-500">{staff.department}</span>
</div>
