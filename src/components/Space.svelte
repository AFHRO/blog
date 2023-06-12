<script lang="ts">
  export let gap = 10;
  export let direction: "row" | "column" = "row";

  let classes = `space${$$props.class ? ` ${$$props.class}` : ""}`;

  if (direction === "row") {
    classes += " space--row";
  } else if (direction === "column") {
    classes += " space--column";
  }
</script>

<div style="gap: {gap}px;" {...$$props} class={classes}>
  <slot />
</div>

<style lang="scss">
  .space {
    display: flex;
    width: fit-content;
    align-items: center;
    flex-direction: column;

    &--row {
      flex-direction: row;
    }
  }
</style>
