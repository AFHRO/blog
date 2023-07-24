<script lang="ts">
  import Container from "../Container.svelte";
  import SharePost from "./SharePost.svelte";
  import SubscribeCard from "./SubscribeCard.svelte";

  export let content: string;
</script>

<Container>
  <div class="flex flex-col-reverse lg:flex-row m-auto gap-20 p-5 lg:p-20">
    <SharePost />
    <div
      class="post__body flex flex-col w-full m-auto lg:max-w-[60rem] text-line-[2] text-gray-800 align-middle py-20"
    >
      {@html content}
      <SubscribeCard />
    </div>
  </div>
</Container>

<style lang="scss">
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

  :global(.post__body ol li) {
    list-style-type: circle;
  }
</style>
