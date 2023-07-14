<script>
  import Button from "../Button.svelte";
</script>

<div class="mt-24 shadow-md rounded-lg w-full">
  <div
    class="items-center justify-between py-10 px-5 bg-secondaryLight shadow-2xl rounded-lg mx-auto text-center"
  >
    <div class="px-2 mt-6">
      <div class="text-center">
        <h2 class="text-gray-800 font-medium w-full text-6xl mb-5">
          Subsribe to our mailing list
        </h2>
        <div class="text-md text-gray-800">
          Regular content around health research and publishing straight to your
          inbox
        </div>
        <div class="w-full text-center mt-10">
          <form action="#">
            <div class="mx-auto p-1 pr-0 flex gap-2 justify-center">
              <input
                type="email"
                placeholder="yourmail@example.com"
                class="flex-1 appearance-none rounded shadow px-5 bg-white focus:outline-none max-w-[30rem]"
              />
              <button
                type="submit"
                class="btn text-white font-semibold bg-gray-800 p-4 rounded-lg hover:bg-gray-900 btn--md min-w-[15rem] inline-block"
                >Subscribe</button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
