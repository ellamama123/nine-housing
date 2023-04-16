<template>
  <div class="bg-black-500">
    <div class="container mb-40 py-16">
      <h2 class="mb-16 text-5xl font-bold text-white">Our Apartments</h2>

      <div class="grid grid-cols-3 gap-[30px]">
        <div class="max-h-[494px] max-w-[370px] rounded-xl bg-white" v-for="card in 3" :key="card">
          <img src="/mock-apartment.png" alt="apartment" />

          <div class="p-6">
            <div class="mb-4 flex text-black-500">
              <span class="text-2xl font-bold text-black-500">301</span>
              <p class="ml-4">15/41 Linh Lang Str, Ba Dinh Dist, Ha Noi</p>
            </div>

            <div class="grid grid-cols-3">
              <div class="mr-5 flex">
                <img src="/icons/bed.svg" alt="bed icon" class="mr-3 h-6 w-6" />
                <span>1 Br</span>
              </div>

              <div class="mr-5 flex">
                <img src="/icons/water.svg" alt="water icon" class="mr-3 h-6 w-6" />
                <span>1 Ba</span>
              </div>

              <div class="flex">
                <img
                  src="/icons/square-Medical.svg"
                  alt="square medical icon"
                  class="mr-3 h-6 w-6"
                />
                <span>55 Sq.Ft</span>
              </div>
            </div>
          </div>

          <hr class="h-0.5 bg-black-500" />

          <div class="flex items-center justify-between p-6">
            <p class="font-medium text-black-500">$500/Month</p>
            <button
              type="button"
              class="mb-2 mr-2 h-[46px] w-[134px] rounded-lg bg-yellow-500 px-6 py-3 font-medium text-black-500"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
