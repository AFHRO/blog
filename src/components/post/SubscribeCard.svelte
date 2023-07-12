<script>
  import Button from "../Button.svelte";
</script>

<div class="mt-24 shadow-md rounded-lg w-full">
  <div
    class="items-center justify-between py-10 px-5 bg-secondaryLight shadow-2xl rounded-lg mx-auto text-center"
  >
    <div class="px-2 mt-6">
      <div class="text-center">
        <h2 class="text-grey-800 font-medium w-full">
          Subsribe to our mailing list
        </h2>
        <!-- <span class="text-base text-white">
          Regular content around health research and publishing straight to your
          inbox
        </span> -->
        <div class="w-full text-center mt-10">
          <form action="#">
            <div class="mx-auto p-1 pr-0 flex gap-2 justify-center">
              <input
                type="email"
                placeholder="yourmail@example.com"
                class="flex-1 appearance-none rounded shadow px-5 bg-white focus:outline-none max-w-[30rem]"
              />
              <Button
                type="submit"
                class="text-white font-semibold bg-gray-800 "
                >Get started</Button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
