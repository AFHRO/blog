<script>
  import Container from "./Container.svelte";
  import Space from "./Space.svelte";
  import footerLinks, { footerSocialLinks } from "src/utils/footerLinks";
  import logoIcon from "$lib/logo-icon.png";
</script>

<footer class="bg-primary text-white py-20 text-[1.5rem]">
  <Container>
    <div
      class="sections-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 justify-between"
    >
      <div class="flex flex-col gap-y-10 align-middle">
        <div class="space-y-4 max-w-[18rem]">
          <img src={logoIcon} width="100" alt="AHRO logo" />
          <h3 class="text-[1.2rem]">AFRICA HEALTH RESEARCH ORGANISATION</h3>
        </div>

        <div class="flex space-x-10 text-xl">
          {#each footerSocialLinks as { Icon, name, link }}
            <a
              href={link}
              class="hover:scale-125 transition-transform"
              aria-label={`Check out our ${name} page`}
            >
              <Icon />
            </a>
          {/each}
        </div>
        <span class="footer__copyright"
          >{@html "&copy"} {new Date().getFullYear()} AHRO</span
        >
      </div>

      {#each footerLinks as linkObject}
        <section class="footer__section">
          <h4 class="font-extrabold text-4xl mb-10">{linkObject.title}</h4>
          <Space direction="column">
            {#each linkObject.links as link}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full hover:underline text-[1.5rem]"
                >{@html link.title}</a
              >
            {/each}
          </Space>
        </section>
      {/each}
    </div>
    <!-- <div
      class="flex flex-col-reverse md:flex-row justify-between text-xl w-full"
    >
      <a href="/" aria-label='Learn about our privacy policy' class="text-[1.5rem]">Privacy Policy</a>
      <a href="/" aria-label='Visit terms page' class="text-[1.5rem]">Terms and Conditions</a>
      <a href="/" aria-label='Check cookie policy' class="text-[1.5rem]">Cookie Policy</a>
    </div> -->
  </Container>
</footer>
