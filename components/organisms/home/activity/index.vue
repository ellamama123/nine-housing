<template>
  <div class="mb-40">
    <h2 class="container text-5xl font-bold text-black-500">Activity</h2>

    <div class="relative mt-6 w-full">
      <!-- Carousel wrapper -->
      <div class="h-[460px] overflow-hidden">
        <div
          v-for="activities in 2"
          :key="activities"
          :id="`activities-item-${activities}`"
          class="hidden duration-700 ease-in-out"
        >
          <div
            class="absolute left-1/2 top-1/2 grid h-[460px] w-[80%] -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-x-8 pt-11"
          >
            <div v-for="activity in 3" :key="activity">
              <div class="max-w-[370px] rounded-xl border border-gray-200 bg-white">
                <img src="/mock-apartment.png" alt="activity image" />
                <div class="p-6">
                  <h5 class="mb-2 text-xl font-bold leading-6 text-yellow-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </h5>
                  <div class="flex items-center justify-between">
                    <p class="text-lg text-black-500">February 7, 2023</p>

                    <button type='button' class="p-2 rounded-full bg-yellow-500 text-center hover:bg-yellow-400">
                      <img src="/icons/right-arrow-white.svg" alt="right arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <button
        id="data-activities-prev"
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
        id="data-activities-next"
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
      el: document.getElementById('activities-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('activities-item-2'),
    },
  ]

  const options: CarouselOptions = {
    defaultPosition: 0,
    interval: 3000,
  }

  const carousel: CarouselInterface = new Carousel(items, options)

  carousel.cycle()

  // set event listeners for prev and next buttons
  const $prevButton = document.getElementById('data-activities-prev')
  const $nextButton = document.getElementById('data-activities-next')

  $prevButton.addEventListener('click', () => {
    carousel.prev()
  })

  $nextButton.addEventListener('click', () => {
    carousel.next()
  })
})
</script>
