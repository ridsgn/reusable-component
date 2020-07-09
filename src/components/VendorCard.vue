<template>
  <div class="container mx-auto card bg-red-100 max-w-sm">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center p-10">
        <div class="w-40 h-40 rounded-full bg-black">
          <img src alt />
        </div>
        <div class="pt-8">
          <h1 class="font-semibold text-lg text-green-400">Sirih Gading Catering</h1>
          <ul class="flex items-center justify-center">
            <li>
              <a href>Catering</a>
            </li>
            <span class="mx-2">|</span>
            <li>
              <a href>Bandung, ID</a>
            </li>
          </ul>
          <div>
            rating
            <span>4.6/5</span>
          </div>
          <div></div>
          <div>
            <button>
              <a href>$$$</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vendor",
  props: ["vendor"]
};
</script>