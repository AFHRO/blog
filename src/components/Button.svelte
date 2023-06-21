<script lang="ts">
  import LinkArrow from "./icons/LinkArrow.svelte";

  export let variant: "text" | "link" | "primary" | "secondary" = "primary";
  export let size: "sm" | "md" | "lg" = "md";
  export let disabled = false;
  export let block = false;
  export let showLinkArrow = false;
  export let color: string | undefined = undefined;

  $: isPrimaryOrSecondary = ["primary", "secondary"].includes(variant);
</script>

<button
  class:text-white={isPrimaryOrSecondary && !color}
  class:p-6={isPrimaryOrSecondary && size === "lg"}
  class:p-4={isPrimaryOrSecondary && size === "md"}
  class:px-4={isPrimaryOrSecondary && size === "sm"}
  class:py-2={isPrimaryOrSecondary && size === "sm"}
  class:text-[`${color}`]={isPrimaryOrSecondary && color}
  class:border-white={variant === "secondary" && !color}
  class:border-solid={variant === "secondary"}
  class:bg-secondary={variant === "primary"}
  class:hover:bg-secondaryDark={variant === "primary"}
  class:btn--sm={size === "sm"}
  class:btn--md={size === "md"}
  class:btn--lg={size === "lg"}
  {disabled}
  class:min-w-[20rem]={["primary", "secondary"].includes(variant) &&
    size === "lg"}
  class:min-w-[15rem]={["primary", "secondary"].includes(variant) &&
    size === "md"}
  class:min-w-[10rem]={["primary", "secondary"].includes(variant) &&
    size === "sm"}
  class:inline-block={["primary", "secondary"].includes(variant)}
  class:w-full={block}
  class:cursor-not-allowed={disabled}
  class:hover:space-x-200={showLinkArrow}
  class={`btn${$$props.class ? " " + $$props.class : ""}`}
  style:color
>
  <slot />
  {#if showLinkArrow}
    <span class="btn__link-arrow">
      <LinkArrow />
    </span>
  {/if}
</button>

<style lang="scss">
  button {
    .btn__link-arrow {
      transition: all 0.3s ease-in-out;
      display: inline-block;
    }
    &:hover {
      .btn__link-arrow {
        transform: translateX(1rem);
      }
    }
  }
</style>
