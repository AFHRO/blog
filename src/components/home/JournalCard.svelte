<script lang="ts">
  import type { Journal } from "src/types/journal";

  export let journal: Journal;
</script>

<div
  class="flex md:items-center justify-between flex-col md:flex-row hover:border-l-4 py-5 hover:border-primary hover:cursor-pointer hover:px-2 transition-all duration-300 ease-in-out"
>
  <div class="max-w-[60rem]">
    <h3 class="text-primary font-bold">
      {journal.title}
    </h3>
    <p>
      {journal.description}
    </p>
  </div>
  <p class="text-[1.5rem]">
    {journal.date}
  </p>
</div>
