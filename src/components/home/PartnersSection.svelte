<script>
  import Container from "../Container.svelte";
  import partnersSvg from "$lib/partners.svg";
</script>

<section>
  <Container class="overflow-hidden">
    <h2 class="text-[3rem] font-extrabold">Our Partners</h2>
    <p class="my-5">
      We believe in the power of collaboration and fostering meaningful
      partnerships to drive innovation in global health.
    </p>

    <div
      class="partners-div"
      style={`background-image: url(${partnersSvg});`}
      role="img"
      aria-label="Partners of AHRO"
    />
  </Container>
</section>

<style lang="scss">
  .partners-div {
    animation: scroll 75s linear infinite;
    width: 168rem;
    max-width: 100%;
    height: 20rem;
  }

  @keyframes scroll {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -2956px;
    }
  }
</style>
