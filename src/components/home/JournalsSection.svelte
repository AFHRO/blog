<script>
  import Container from "../Container.svelte";
  import JournalCard from "./JournalCard.svelte";

  const journals = [
    {
      title: "AHRO Review of Dentistry",
      link: "https://www.scienceopen.com/collection/AHRO_ReviewDentistry",
      image: "https://www.jamanetwork.com/Content/images/JAMA-logo.png",
      date: "2022-03-03",
      description:
        "international open-access journal that covers all aspects of dental sciences.",
    },
    {
      title: "AHRO Review of Pharmaceutics and Pharmacology",
      link: "https://www.scienceopen.com/collection/AHRO_ReviewsPharmaceutics",
      image:
        "https://www.nejm.org/na101/home/literatum/publisher/mms/journals/content/nejm/0/nejm.logo.png?metadata=false",
      date: "2022-01-25",
      description:
        "international open-access journal that promotes the dissemination of quality knowledge in all aspects of pharmaceutical sciences",
    },
    {
      title: "AHRO Reviews of Nursing & Midwifery",
      link: "https://www.scienceopen.com/collection/AHRO_ReviewsNursing",
      image:
        "https://www.thelancet.com/cms/asset/0a0e0f0e-0e0e-4b1e-8b0e-0e0e4b1e8b0e/tla-logo.png",
      date: "2022-01-25",
      description:
        "International  open-access journal that promotes the dissemination of quality knowledge in all aspects of nursing practice.",
    },
    {
      title: "Annals of Tropical Medicine & Public Health",
      link: "https://www.scienceopen.com/collection/AHRO_ATMPH",
      image:
        "https://media.springernature.com/w92/springer-static/cover/journal/41586.jpg",
      date: "2021-11-23",
      description:
        "The Annals of Tropical Medicine and Public Health (ATMPH) published by AHRO is an Open Access Journal established in 2008 and publishes original scientific articles, with emphasis on clinical and laboratory sciences, clinical & tropical medicine, microbiology, public health, Parasitology, infectious diseases, immunology, epidemiology, basic and molecular biology, virology, mycology, surgical sciences, health management, and biomedical technology",
    },
  ];
</script>

<section class="min-h-[400px] py-10">
  <Container class="border-t-2 pt-10">
    {#if !journals.length}
      <div />
    {:else}
      <div class="my-10 flex justify-between items-center">
        <h2 class="text-[3rem] font-extrabold">Our Journals</h2>
        <a href="/blog" class="text-primary-500 hover:underline text-secondary"
          >Explore jounrals</a
        >
      </div>
      <ul class="flex flex-col space-y-10">
        {#each journals as journal}
          <li class="flex flex-col">
            <a href={journal.link} target="_blank" rel="noopener noreferrer">
              <JournalCard {journal} />
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </Container>
</section>
