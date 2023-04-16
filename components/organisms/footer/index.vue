<template>
  <footer class="h-[621px] bg-black-500">
    <div class="container pt-24">
      <div class="flex flex-col">
        <div class="mb-14 flex items-center">
          <img
            src="/logo/logo-ninehousing.svg"
            class="mr-6 h-[70px] w-[70px]"
            alt="NineHousing Logo"
          />
          <span class="text-2xl font-semibold text-white">Nine Housing </span>
        </div>

        <div class="flex justify-between">
          <div>
            <div class="mb-6 flex items-center">
              <img class="mr-6 h-6 w-6" src="/icons/id-card.svg" alt="icon id card" />
              <span class="whitespace-nowrap text-lg text-white"
                >No.11 Ton That Thiep Str., Ba Dinh Dist, Ha Noi</span
              >
            </div>

            <div class="mb-6 flex items-center">
              <img class="mr-6 h-6 w-6" src="/icons/mail.svg" alt="icon mail" />
              <span class="whitespace-nowrap text-lg text-white">Namtoong@gmail.com</span>
            </div>

            <div class="mb-6 flex items-center">
              <img class="mr-6 h-6 w-6" src="/icons/phone-flip.svg" alt="icon phone flip" />
              <span class="whitespace-nowrap text-lg text-white">0918374230</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0769435205225!2d105.80842291549067!3d21.029607085997835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab936ecf1f0f%3A0xe21996fb3ce60b2c!2sNINE%20HOUSING!5e0!3m2!1sen!2s!4v1680385872875!5m2!1sen!2s"
              title="ninehousing map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="h-[151px] w-[270px] rounded-xl"
            />
          </div>

          <div>
            <div v-for="(router, index) in FOOTER_ROUTERS" :key="index" class="mb-6 text-white">
              <nuxt-link :to="router.link">{{ router.label }}</nuxt-link>
            </div>
          </div>

          <!-- TODO: change to working facebook plugin -->
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNINEHousing&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="facebook page"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            class="h-80 w-72 rounded-xl"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import appRouters from '@/constants/appRouters'

const FOOTER_ROUTERS = [
  { label: 'Our Product', link: appRouters.OUR_PRODUCT },
  { label: 'Blog', link: appRouters.BLOG },
  { label: 'About Us', link: appRouters.ABOUT_US },
]
</script>
