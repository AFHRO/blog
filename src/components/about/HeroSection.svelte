<script>
  import { PUBLIC_SITE_NAME } from "$env/static/public";

  const isPublishingSite = PUBLIC_SITE_NAME === "AHRO Scientific Publishing";
</script>

<section class="bg-white">
  <div
    class="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 min-h-[70vh] flex align-middle justify-center flex-col space-y-5 container"
  >
    <h1
      class={"mb-4 font-extrabold tracking-tight leading-none text-primary md:text-5xl text-4xl lg:text-8xl"}
    >
      {#if isPublishingSite}
        Empowering Global Knowledge through Scientific Publishing
      {:else}
        Improving Global Health through research
      {/if}
    </h1>
    <p
      class="mb-8 text-2xl font-normal text-gray-500 lg:text-4xl sm:px-16 lg:px-48"
    >
      {isPublishingSite
        ? ""
        : `${PUBLIC_SITE_NAME} is a non-profit award-wining
      organisation that aims to improve global health through research. We are a
      team of researchers, scientists, and health professionals who are
      passionate about improving global health through research.`}
      `
    </p>
    {#if isPublishingSite}
      <div class="text-left container m-auto">
        <p>
          AHRO Scientific Publishing Ltd (ASPL) is a Glasgow- based-award
          winning company that is into publication of books and journals. It
          focusses on Sciences, Technology, and Medical Sciences.
        </p>
        <p>
          It is the holding entity for Africa Health Research Organization, a
          not-for-profit institute that promotes the advancement of global
          health and AHRO Care Agency, a vibrant company in Scotland providing
          healthcare workers to various health centers.
        </p>
        <p>
          ASPL is incorporated in Scotland where most of its publishing
          activities are performed. The company published more than 25 journals
          in both electronic and printed formats. Our journals consist of
          different disciplines in all aspects of science, medicine, and allied
          health. Our journals are indexed by some recognized indexing agencies.
        </p>
        <p>
          ASPL follows the double-blind peer-review process for submissions to
          all journals. All submitted articles/book chapters are subjected to a
          rigorous peer-review process involving members of the editorial board
          and independent external reviewers. All manuscript/chapters are
          assessed and the decision to either accept or reject is taken by the
          Editor In Chief/ Books editors. The final decision is sent to the
          corresponding author.
        </p>
        <p>
          Since reviewers are important components of our publishing process, we
          acknowledge their role. ASPL therefore makes available their details
          on Publon.
        </p>

        <p>
          ASPL assist authors from the initial submission to the final phase:
          publication if their articles are accepted.
        </p>
        <p>
          ASPL is open to new ideas and partnership. If you are a researchers,
          librarian, or distributor who wish to partner with us , please contact
          us via email: <a class="font-bold" href="mailto:info@afhro.org">
            info@afhro.org
          </a>
        </p>
      </div>
    {/if}
  </div>
</section>
