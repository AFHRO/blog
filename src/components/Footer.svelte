<script>
  import Container from "./Container.svelte";
  import Space from "./Space.svelte";
  import logo from "$lib/Logo With Text Under.svg";

  const linksArray = [
    {
      title: "About",
      links: [
        {
          title: "Our People",
          url: "/",
        },
        {
          title: "FAQs",
          url: "/",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Feedback and Appeals",
          url: "/",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          title: "Scientific Publishing",
          url: "/",
        },
        {
          title: "Conferences",
          url: "/",
        },
        {
          title: "Clinical Research",
          url: "/",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          title: "info@afhro.org",
          url: "mailto:info@afhro.org",
        },
        {
          title: "+447503568624",
          url: "tel:+447503568624",
        },
        {
          title:
            "The Pentagon Centre <br/> 38 Washington Street <br/>Glasgow<br/>G3 8AZ <br/>",
          url: "/",
        },
      ],
    },
  ];
</script>

<footer class="footer">
  <Container class="footer__container">
    <div class="sections-list">
      <img src={logo} alt="AHRO" width="150" class="footer__logo" />

      {#each linksArray as linkObject}
        <section class="footer__section">
          <h5>{linkObject.title}</h5>
          <Space direction="column">
            {#each linkObject.links as link}
              <a href={link.url}>{@html link.title}</a>
            {/each}
          </Space>
        </section>
      {/each}
    </div>
  </Container>
</footer>

<style lang="scss">
  :global(.footer__container) {
    background-color: var(--primary-background-color);
    padding: 60px 0;
  }

  .footer {
    margin-top: 10rem;
    padding-top: 4rem;
    padding-bottom: 4rem;

    &__logo {
      align-self: flex-start;
    }
    .sections-list {
      display: flex;

      width: 100%;
      gap: 4rem;
      flex-direction: column;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: clamp(5rem, 10vw, 10rem);
      }
      margin: 0 auto;
    }
    &__section {
      h5 {
        margin-bottom: 2rem;
        color: var(--text-grey);
        text-transform: uppercase;
      }
      a {
        width: 100%;
      }
    }
  }
</style>
