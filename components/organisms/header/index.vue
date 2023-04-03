<template>
  <nav
    class="z-50 sticky top-0 left-0 w-full border-gray-200 py-4 h-25"
    :class="{ 'bg-black-500': isScrolling, 'bg-transparent': !isScrolling }"
  >
    <div class="container flex flex-wrap items-center justify-between">
      <div class="flex items-center">
        <button
          type="button"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          data-dropdown-delay="100"
          data-dropdown-offset-skidding="70"
          class="group flex h-8 w-8 items-center bg-transparent"
        >
          <img src="/icons/menu-bar.svg" alt="menu-bar icon" />
          <span class="font-bold text-yellow-500">Menu</span>
        </button>

        <div id="dropdownHover" class="z-50 hidden w-44 rounded-lg bg-black-500 pr-5">
          <ul
            class="py-2 text-sm text-yellow-500"
            aria-labelledby="dropdownHoverButton"
            v-for="route in HEADER_ROUTERS"
            :key="route.label"
          >
            <li>
              <nuxt-link
                :to="route.link"
                class="block px-4 py-2 hover:font-bold hover:text-yellow-500"
              >
                {{ route.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <nuxt-link :to="appRouters.HOME" class="flex items-center">
        <img
          v-if="isScrolling"
          src="/logo/logo-ninehousing.svg"
          class="h-[80px] w-[80px]"
          alt="NineHousing Logo"
        />
        <img
          v-else
          src="/logo/logo-ninehousing-transparent.png"
          class="h-[85px] w-[80px] py-4"
          alt="NineHousing Logo transparent"
        />
      </nuxt-link>

      <div class="flex w-[170px] justify-between">
        <button class="group flex w-7 align-middle">
          <img
            class="h-7 group-hover:rounded-full group-hover:border-2 group-hover:border-solid group-hover:border-yellow-500"
            src="/icons/flags/america.png"
            alt="flag icon"
          />
          <span class="ml-2 text-yellow-500 group-hover:font-bold">EN</span>
        </button>

        <button class="group flex w-7 align-middle">
          <img
            class="h-7 group-hover:rounded-full group-hover:border-2 group-hover:border-solid group-hover:border-yellow-500"
            src="/icons/flags/vietnam.png"
            alt="flag icon"
          />
          <span class="ml-2 text-yellow-500 group-hover:font-bold">VN</span>
        </button>

        <button class="group flex w-7 align-middle">
          <img
            class="h-7 group-hover:rounded-full group-hover:border-2 group-hover:border-solid group-hover:border-yellow-500"
            src="/icons/flags/japan.png"
            alt="flag icon"
          />
          <span class="ml-2 text-yellow-500 group-hover:font-bold">JP</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import appRouters from '@/constants/appRouters'

defineProps<{
  isScrolling?: boolean
}>()

const HEADER_ROUTERS = [
  { label: 'Home', link: appRouters.HOME },
  { label: 'Our Product', link: appRouters.OUR_PRODUCT },
  { label: 'Blog', link: appRouters.BLOG },
  { label: 'About Us', link: appRouters.ABOUT_US },
]
</script>
