<script lang="ts">
  import routePaths from "src/utils/routePaths";
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";

  let scrollY = 0;

  export let categories: Array<{ title: string; slug: string }> = [];
</script>

<header class={scrollY > 0 ? "scrolled" : undefined}>
  <Container class="header__container">
    <nav class="py-10">
      <a href="/" class="header__logo-wrapper" aria-label="Home">
        <Logo />
      </a>

      <ul class="lg:flex gap-[5vw] text-primary hidden">
        <li>
          <a href={routePaths.blog} aria-label="See all blog posts">All</a>
        </li>
        {#each categories as category}
          <li>
            <a
              href={`${routePaths.blog}/category/${category.slug}`}
              aria-label={`Go to the ${category.title} category`}
            >
              {category.title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </Container>
</header>
<svelte:window bind:scrollY />

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--primary-background-color);
    z-index: 1000;
    /* background: linear-gradient( var(--primary-background-color) 90%, transparent 100%); */

    &.scrolled {
      box-shadow: var(--input-box-shadow);
    }
  }

  .header {
    &__logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  :global(.logo) {
    width: 200px;
  }
  :global(.header__container) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }

    li {
      list-style: none;

      a {
        font-size: 18px;
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
