<template>
  <div class="mb-40 bg-black-500">
    <div class="py-16">
      <h2 class="container mb-16 text-5xl font-bold text-white">What customers say about us</h2>

      <div class="relative w-full">
        <!-- Carousel wrapper -->
        <div class="h-64 overflow-hidden">
          <div
            v-for="feedback in 2"
            :key="feedback"
            :id="`customer-feedback-item-${feedback}`"
            class="hidden duration-700 ease-in-out"
          >
            <div
              class="absolute left-1/2 top-1/2 flex h-64 w-[969px] -translate-x-1/2 -translate-y-1/2 justify-between bg-black-500"
            >
              <div class="text-white">
                <p class="mb-8 text-5xl leading-[59px]">“</p>

                <p class="mb-8 text-lg leading-6">
                  Lorem ipsum dolor sit amet consectetur. Lacinia pulvinar morbi elit nulla tortor
                  vitae et laoreet. Urna risus elit enim magna tincidunt nullam cum blandit
                  bibendum. Ornare orci consequat elementum tincidunt. Dolor cursus faucibus.
                </p>

                <p class="text-xl font-semibold">Nam Toong</p>
              </div>

              <img
                src="/mock-customer.png"
                class="ml-8 w-[470px] h-[268px]"
                alt="main slider images"
              />
            </div>
          </div>
        </div>

        <!-- Slider controls -->
        <button
          id="data-customer-feedback-prev"
          type="button"
          class="group absolute left-0 top-0 z-30 ml-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white group-hover:bg-white/50 group-focus:outline-none"
          >
            <img src="/icons/left-arrow-black.svg" alt="left arrow-black" />
            <span class="hidden">Previous</span>
          </span>
        </button>

        <button
          id="data-customer-feedback-next"
          type="button"
          class="group absolute right-0 top-0 z-30 mr-16 flex h-full cursor-pointer items-center justify-center focus:outline-none"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white group-hover:bg-white/50 group-focus:outline-none"
          >
            <img src="/icons/right-arrow-black.svg" alt="right arrow-black" />
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
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
      el: document.getElementById('customer-feedback-item-1'),
    },
    {
      position: 1,
      el: document.getElementById('customer-feedback-item-2'),
    },
  ]

  const options: CarouselOptions = {
    defaultPosition: 0,
    interval: 3000,
  }

  const carousel: CarouselInterface = new Carousel(items, options)

  carousel.cycle()

  // set event listeners for prev and next buttons
  const $prevButton = document.getElementById('data-customer-feedback-prev')
  const $nextButton = document.getElementById('data-customer-feedback-next')

  $prevButton.addEventListener('click', () => {
    carousel.prev()
  })

  $nextButton.addEventListener('click', () => {
    carousel.next()
  })
})
</script>
