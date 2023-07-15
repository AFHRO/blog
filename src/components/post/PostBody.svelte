<script lang="ts">
  import Container from "../Container.svelte";
  import SharePost from "./SharePost.svelte";
  import SubscribeCard from "./SubscribeCard.svelte";

  export let content: string;
  export let subscribed = false;
</script>

<Container>
  <div class="flex flex-col-reverse lg:flex-row m-auto gap-20 p-20">
    <SharePost />
    <div class="post__body lg:max-w-[60rem] text-[1.8rem] text-line-[2]">
      {@html content}
      <SubscribeCard {subscribed} />
    </div>
  </div>
</Container>

<style lang="scss">
  :global(.post__body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    color: rgb(133, 147, 167);
    padding: 20px 0;
  }

  :global(.post__body img),
  :global(.post__body video),
  :global(.post__body figure),
  :global(.post__body iframe) {
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 100%;
    border-radius: 2rem;
  }
  :global(.post__body p),
  :global(.post__body li) {
    white-space: pre-line;
  }
  /* :global(.post__body h1),
  :global(.post__body h2),
  :global(.post__body h3) {
    margin-top: 2.5rem;
  } */

  /* :global(.post__body h1) {
    font-size: 3.2rem;
  }
  :global(.post__body h2) {
    font-size: 2.4rem;
  }

  :global(.post__body h3) {
    font-size: 1.8rem;
  } */
  :global(.post__body ol li) {
    list-style-type: circle;
  }
</style>
