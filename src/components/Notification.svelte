<script lang="ts">
  import { fly } from "svelte/transition";
  import { notification } from "src/stores";

  let notificationObject: any;

  notification.subscribe((value) => {
    notificationObject = value;
  });

  $: message = notificationObject?.message;
  $: description = notificationObject?.description;
  $: duration = notificationObject?.duration;

  $: if (message) {
    const dialog = document.getElementById("notification");

    if (dialog) {
      dialog.show();
    }
  }

  $: setTimeout(() => {
    if (typeof document === "undefined") return;
    const dialog = document.getElementById("notification");

    if (!dialog || !message) return;

    dialog.close();
  }, Number(duration) + 1000);

  let messageOpen = false;

  $: setTimeout(() => {
    messageOpen = true;
  }, 300);

  $: setTimeout(() => {
    messageOpen = false;
  }, Number(duration));
</script>

<dialog id="notification" class="relative w-full">
  {#if messageOpen}
    <div
      class="bg-secondaryLight text-white fixed right-10 bottom-10 w-auto p-5 rounded-md shadow-md z-50"
      in:fly={{ x: 100 }}
      out:fly={{ x: 100 }}
    >
      <h3>{message}</h3>
      <p>{description}</p>
    </div>
  {/if}
</dialog>
