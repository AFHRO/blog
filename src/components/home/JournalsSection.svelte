<script>
  import Container from "../Container.svelte";
  import JournalCard from "./JournalCard.svelte";

  const journals = [
    {
      title: "Journal of the American Medical Association",
      link: "https://jamanetwork.com/journals/jama",
      image: "https://www.jamanetwork.com/Content/images/JAMA-logo.png",
      date: "2021-10-01",
      description: "The latest medical research findings and review articles.",
    },
    {
      title: "New England Journal of Medicine",
      link: "https://www.nejm.org/",
      image:
        "https://www.nejm.org/na101/home/literatum/publisher/mms/journals/content/nejm/0/nejm.logo.png?metadata=false",
      date: "2021-10-01",
      description: "The latest medical research findings and review articles.",
    },
    {
      title: "The Lancet",
      link: "https://www.thelancet.com/",
      image:
        "https://www.thelancet.com/cms/asset/0a0e0f0e-0e0e-4b1e-8b0e-0e0e4b1e8b0e/tla-logo.png",
      date: "2021-10-01",
      description: "The latest medical research findings and review articles.",
    },
    {
      title: "Nature",
      link: "https://www.nature.com/",
      image:
        "https://media.springernature.com/w92/springer-static/cover/journal/41586.jpg",
      date: "2021-10-01",
      description: "The latest medical research findings and review articles.",
    },
  ];
</script>

<section class="min-h-[400px] py-10">
  <Container class="border-t-2 pt-10">
    {#if !journals.length}
      <div />
    {:else}
      <div class="mb-10 flex justify-between items-center">
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
