<template>
  <div class="mb-40">
    <h2 class="container text-5xl font-bold text-black-500">Our partner</h2>

    <div class="relative mt-16 w-full">
      <!-- Carousel wrapper -->
      <div class="h-[170px] overflow-hidden">
        <div
          v-for="partners in 2"
          :key="partners"
          :id="`partners-item-${partners}`"
          class="hidden duration-700 ease-in-out"
        >
          <div
            class="absolute left-1/2 top-1/2 grid h-[170px] w-[970px] -translate-x-1/2 -translate-y-1/2 grid-cols-5 gap-x-8"
          >
            <div v-for="partner in 5" :key="partner">
              <img src="/mock-partner.png" alt="partner image" class="rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <button
        id="data-partners-prev"
        type="button"
        class="group absolute left-0 top-0 z-30 ml-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
      >
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black-500 group-hover:bg-slate-300 group-focus:outline-none"
        >
          <img src="/icons/left-arrow-white.svg" alt="left arrow-white" />
          <span class="hidden">Previous</span>
        </span>
      </button>

      <button
        id="data-partners-next"
        type="button"
        class="group absolute right-0 top-0 z-30 mr-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
      >
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black-500 group-hover:bg-slate-300 group-focus:outline-none"
        >
          <img src="/icons/right-arrow-white.svg" alt="right arrow-white" />
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel } from 'flowbite'
import type { CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

onMounted(() => {
  const items: CarouselItem[] = [
    {
      position: 0,
      el: document.getElementById('partners-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('partners-item-2'),
    },
  ]

  const options: CarouselOptions = {
    defaultPosition: 0,
    interval: 3000,
  }

  const carousel: CarouselInterface = new Carousel(items, options)

  carousel.cycle()

  // set event listeners for prev and next buttons
  const $prevButton = document.getElementById('data-partners-prev')
  const $nextButton = document.getElementById('data-partners-next')

  $prevButton.addEventListener('click', () => {
    carousel.prev()
  })

  $nextButton.addEventListener('click', () => {
    carousel.next()
  })
})
</script>
