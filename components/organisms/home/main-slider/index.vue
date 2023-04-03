<template>
  <div class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative h-[720px] overflow-hidden">
      <div
        v-for="img in 4"
        :key="img"
        :id="`main-slider-item-${img}`"
        class="hidden duration-700 ease-in-out"
      >
        <img
          src="/mock-image-slider.png"
          class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="main slider images"
        />
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      <button
        id="main-slider-indicator-0"
        type="button"
        class="h-5 w-5 rounded-full"
        aria-current="true"
        aria-label="Slide 0"
      />

      <button
        v-for="indicator in 3"
        :key="indicator"
        :id="`main-slider-indicator-${indicator}`"
        type="button"
        class="h-5 w-5 rounded-full"
        aria-current="false"
        :aria-label="`Slide ${indicator}`"
      />
    </div>

    <!-- Slider controls -->
    <button
      id="data-main-slider-prev"
      type="button"
      class="group absolute left-0 top-0 z-30 ml-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
    >
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black-500 group-hover:bg-white/50 group-focus:outline-none"
      >
        <img src="/icons/left-arrow.svg" alt="left arrow" />
        <span class="hidden">Previous</span>
      </span>
    </button>

    <button
      id="data-main-slider-next"
      type="button"
      class="group absolute right-0 top-0 z-30 mr-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
    >
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black-500 group-hover:bg-white/50 group-focus:outline-none"
      >
        <img src="/icons/right-arrow.svg" alt="right arrow" />
        <span class="hidden">Next</span>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Carousel } from 'flowbite'
import type { CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite'

onMounted(() => {
  const items: CarouselItem[] = [
    {
      position: 0,
      el: document.getElementById('main-slider-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('main-slider-item-2'),
    },
    {
      position: 2,
      el: document.getElementById('main-slider-item-3'),
    },
    {
      position: 3,
      el: document.getElementById('main-slider-item-4'),
    },
  ]

  const options: CarouselOptions = {
    defaultPosition: 0,
    interval: 3000,

    indicators: {
      activeClasses: 'bg-yellow-500 w-10',
      inactiveClasses: 'bg-black-400 hover:bg-yellow-500 hover:bg-yellow-500',
      items: [
        {
          position: 0,
          el: document.getElementById('main-slider-indicator-0'),
        },
        {
          position: 1,
          el: document.getElementById('main-slider-indicator-1'),
        },
        {
          position: 2,
          el: document.getElementById('main-slider-indicator-2'),
        },
        {
          position: 3,
          el: document.getElementById('main-slider-indicator-3'),
        },
      ],
    },
  }

  const carousel: CarouselInterface = new Carousel(items, options)

  carousel.cycle()

  // set event listeners for prev and next buttons
  const $prevButton = document.getElementById('data-main-slider-prev')
  const $nextButton = document.getElementById('data-main-slider-next')

  $prevButton.addEventListener('click', () => {
    carousel.prev()
  })

  $nextButton.addEventListener('click', () => {
    carousel.next()
  })
})
</script>
