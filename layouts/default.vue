<template>
  <div class="flex min-h-screen flex-col">
    <OrganismsHeader :is-scrolling="isScrolling" />
    <div class="flex-1">
      <slot />
    </div>
    <OrganismsFooter />

    <AtomsTopButton v-if="isScrolling" />
  </div>
</template>

<script lang="ts" setup>
const isScrolling = ref(false)

/**
 * Change header class and show top button
 */
const updateScroll = () => {
  if (window.scrollY > 1) {
    isScrolling.value = true
  } else {
    isScrolling.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>
