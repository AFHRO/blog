<script lang="ts">
  import type { Journal } from "src/types/journal";
  import firstNWords from "src/utils/firstNWords";

  export let journal: Journal;
</script>

<div
  class="flex md:items-center justify-between flex-col md:flex-row hover:border-l-4 py-5 space-y-5 hover:border-primary hover:cursor-pointer hover:px-2 transition-all duration-300 ease-in-out"
>
  <div class="max-w-[60rem]">
    <h3 class="text-primary font-bold">
      {journal.title}
    </h3>
    <p>
      {firstNWords(journal.description, 20)}
    </p>
  </div>
  <p class="font-bold text-[1.5rem]">
    {journal.date}
  </p>
</div>
