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
      <img src={logo} alt="AHRO" width="100" class="footer__logo" />

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
    <div class="footer__bottom">
      <div>
        <span class="footer__copyright"
          >{@html "&copy"} {new Date().getFullYear()} AHRO</span
        >
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and Conditions</a>
        <a href="/">Cookie Policy</a>
      </div>
      <div>
        <a href="/"> Facebook </a>
        <a href="/"> Twitter </a>
        <a href="/"> Instagram </a>
      </div>
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

      @media screen and (min-width: 768px) {
        width: clamp(10rem, 10vw, 20rem);
      }
    }
    .sections-list {
      display: flex;
      width: 100%;
      gap: 4rem;
      flex-direction: column;
      border-bottom: 1px solid var(--input-border-grey);
      padding-bottom: 4rem;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        gap: clamp(5rem, 3vw, 10rem);
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
        &:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }
      }
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 4rem;
      flex-direction: column;
      gap: 3rem;

      @media screen and (min-width: 1024px) {
        flex-direction: row-reverse;
        gap: 3rem;
      }

      a {
        &:hover {
          color: var(--primary-color);
        }
      }

      & > * {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3rem;
      }
      @media screen and (min-width: 768px) {
        & > * {
          flex-direction: row;
        }
      }
    }
    &__copyright {
      color: var(--text-grey);
      font-size: 1.6rem;
    }
  }
</style>
